document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#catalogGrid');
  if (!grid) return;

  const pagination = document.querySelector('#catalogPagination');
  const clubFilter = document.querySelector('#clubFilter');
  const perPage = 24;
  let currentPage = Math.max(1, Number(new URLSearchParams(location.search).get('page')) || 1);

  const clubs = [...new Set(PRODUTOS.map(product => product.clube).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  clubFilter.innerHTML += clubs.map(club => `<option value="${club}">${club}</option>`).join('');

  const controls = [...document.querySelectorAll('[data-filter]')];
  const initial = new URLSearchParams(location.search).get('cat');
  if (initial) document.querySelector('#categoryFilter').value = initial;

  function filteredProducts() {
    return PRODUTOS.filter(product => controls.every(control => {
      if (!control.value) return true;
      const value = product[control.dataset.filter];
      return Array.isArray(value) ? value.includes(control.value) : value === control.value;
    }));
  }

  function draw() {
    const products = filteredProducts();
    const pages = Math.max(1, Math.ceil(products.length / perPage));
    currentPage = Math.min(currentPage, pages);
    const start = (currentPage - 1) * perPage;
    const visible = products.slice(start, start + perPage);
    grid.innerHTML = visible.length ? visible.map(GLT.card).join('') : '<div class="empty">Nenhum produto corresponde aos filtros.</div>';
    document.querySelector('#resultCount').textContent = `${products.length} PRODUTOS`;
    pagination.innerHTML = pages > 1 ? `
      <button data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>← ANTERIOR</button>
      <span>PÁGINA ${currentPage} DE ${pages}</span>
      <button data-page="${currentPage + 1}" ${currentPage === pages ? 'disabled' : ''}>PRÓXIMA →</button>` : '';
    const params = new URLSearchParams(location.search);
    if (currentPage > 1) params.set('page', currentPage); else params.delete('page');
    history.replaceState(null, '', `${location.pathname}${params.toString() ? `?${params}` : ''}`);
  }

  controls.forEach(control => control.addEventListener('change', () => { currentPage = 1; draw(); }));
  pagination.addEventListener('click', event => {
    const button = event.target.closest('[data-page]');
    if (!button || button.disabled) return;
    currentPage = Number(button.dataset.page);
    draw();
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  draw();
});
