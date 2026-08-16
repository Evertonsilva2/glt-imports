(function aplicarPrecosGLT() {
  if (!Array.isArray(window.PRODUTOS)) return;

  // Correções pontuais solicitadas no catálogo.
  window.PRODUTOS = window.PRODUTOS.filter(produto => !['Camisa Athletico Paranaense Athlético Paranaense', 'Atlético Mineiro', 'S.C Internacional', 'Chapecoense', 'Coritiba', 'Cruzeiro', 'Fluminense'].includes(produto.nome));
  const morelia = window.PRODUTOS.filter(produto => /morelia\s*neo\s*v\s*beta/i.test(produto.nome));
  morelia.forEach(produto => {
    produto.nome = produto.nome.replace(/\s*Made\s*In\s*Japan\s*/i, ' ').replace(/\s+/g, ' ').trim();
  });
  window.PRODUTOS.forEach(produto => {
    if (/Retr[oô]\s+Lazio\s+98\/00\s+3rd/i.test(produto.nome)) produto.marca = 'Puma';
    if (/Retr[oô]\s+1994\/96\s+Atl[eé]tico\s+Mineiro/i.test(produto.nome)) produto.marca = 'Umbro';
    if (/Atl[eé]tico de Madrid Retr[oô]\s+1994\/95/i.test(produto.nome)) produto.marca = 'Puma';
    if (/22\/23 Venezia Titular/i.test(produto.nome)) produto.marca = 'Kappa';
    if (/Lyon|Curaçao/i.test(produto.nome)) produto.marca = 'Adidas';
    if (/RB Bragantino.*2025\/26.*Visitante/i.test(produto.nome)) produto.marca = 'Puma';
    if (/Regata Fluminense Goalkeeper Trainning Yellow|Feminina 2026\/27 Fluminense Titular/i.test(produto.nome)) produto.marca = 'Puma';
    if (/Mizuno\s+Alpha\s+III\s+Made\s+In\s+Japan/i.test(produto.nome)) {
      produto.nome = produto.nome.replace(/\s*Made\s*In\s*Japan\s*/i, ' ').replace(/\s+/g, ' ').trim();
    }
  });

  const versaoPremium = /retr[oô]|vers[aã]o\s+(?:do\s+)?jogador|players?[\s-]+(?:version|edition)/i;

  PRODUTOS.forEach(produto => {
    if (produto.nome === 'Camisa Flamengo Centenário Retrô 1994') produto.marca = 'Umbro';
    if (/Mizuno\s+(?:Alpha\s+III|Morelia\s+Neo\s+V\s+Beta)/i.test(produto.nome)) produto.preco = 599.99;
    if (produto.categoria === 'Chuteiras') {
      produto.preco = 549.99;
      return;
    }

    if (produto.categoria === 'Tênis') {
      produto.preco = 649.90;
      return;
    }

    if (produto.categoria === 'Luxo') {
      produto.preco = 149.99;
      return;
    }

    if (produto.categoria !== 'Camisas') return;

    const identificacao = [produto.nome, produto.tipo, produto.descricao]
      .filter(Boolean)
      .join(' ');

    produto.preco = versaoPremium.test(identificacao) ? 199.99 : 179.99;
  });
})();
