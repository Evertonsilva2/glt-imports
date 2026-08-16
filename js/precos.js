(function aplicarPrecosGLT() {
  if (!Array.isArray(window.PRODUTOS)) return;

  const versaoPremium = /retr[oô]|vers[aã]o\s+(?:do\s+)?jogador|players?[\s-]+(?:version|edition)/i;

  PRODUTOS.forEach(produto => {
    if (produto.categoria !== 'Camisas') return;

    const identificacao = [produto.nome, produto.tipo, produto.descricao]
      .filter(Boolean)
      .join(' ');

    produto.preco = versaoPremium.test(identificacao) ? 199.99 : 179.99;
  });
})();
