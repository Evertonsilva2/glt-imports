(function aplicarPrecosGLT() {
  if (!Array.isArray(window.PRODUTOS)) return;

  // Correções pontuais solicitadas no catálogo.
  window.PRODUTOS = window.PRODUTOS.filter(produto => !['Camisa Athletico Paranaense Athlético Paranaense', 'Atlético Mineiro', 'S.C Internacional', 'Chapecoense', 'Coritiba', 'Cruzeiro', 'Fluminense', 'Palmeiras', 'Remo', 'Vasco da Gama', 'Vitória', 'RB Bragantino'].includes(produto.nome));
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
    if (/RB Bragantino.*(?:2026\/27|2025\/26).*Titular/i.test(produto.nome)) produto.marca = 'Puma';
    if (/Regata Fluminense Goalkeeper Trainning Yellow|Feminina 2026\/27 Fluminense Titular/i.test(produto.nome)) produto.marca = 'Puma';
    if (/Fluminense/i.test(produto.nome)) produto.marca = 'Puma';
    if (/2026\/27 Vasco da Gama Green|2026\/27 Vasco da Gama Edição Especial Yellow/i.test(produto.nome)) produto.marca = 'Adidas';
    if (/Vasco da Gama Trainning|Vasco da Gama.*Trainning/i.test(produto.nome)) produto.marca = 'Nike';
    if (/1998\/99 Chelsea Black/i.test(produto.nome)) produto.marca = 'Nike';
    if (/Atlético de Madrid Retrô.*2000\/01/i.test(produto.nome)) produto.marca = 'Nike';
    if (/Osasuna 1995\/96/i.test(produto.nome)) produto.marca = 'Kappa';
    if (/Celta de Vigo/i.test(produto.nome)) produto.marca = 'Adidas';
    if (/Atalanta.*2024\/25/i.test(produto.nome)) produto.marca = 'Joma';
    if (/Eintracht Frankfurt 2024\/25.*125th/i.test(produto.nome)) produto.marca = 'Nike';
    if (/Eintracht Frankfurt Retrô 98\/00/i.test(produto.nome)) produto.marca = 'Puma';
    if (/Eintracht Frankfurt 2022\/23/i.test(produto.nome)) produto.marca = 'Nike';
    if (/Köln/i.test(produto.nome)) produto.marca = 'Adidas';
    if (/RC Lens Titular/i.test(produto.nome)) produto.marca = 'Adidas';
    if (/AS Monaco 100th Anniversary/i.test(produto.nome)) produto.marca = 'Kappa';
    if (/Países Baixos Retrô Long-Sleeve 1988/i.test(produto.nome)) produto.marca = 'Nike';
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
      if ([934, 935, 936, 940, 941, 942, 946, 947, 953].includes(produto.id)) produto.preco = 899.90;
      else if (/adidas\s+Adizero\s+Evo\s+SL/i.test(produto.nome)) produto.preco = 589.90;
      else produto.preco = 649.90;
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
