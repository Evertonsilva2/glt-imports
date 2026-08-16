// Normaliza marcas identificáveis pelo clube/seleção e pelo nome do modelo.
(() => {
  if (!Array.isArray(window.PRODUTOS)) return;

  const idsRemovidos = new Set([16, 17, 18, 19, 20, 21]);
  const imagensRemovidas = new Set([
    'assets/images/chuteiras/soccer9999/chuteiras-internacionais/250014940/foto-01.jpeg',
    'assets/images/chuteiras/soccer9999/chuteiras-internacionais/250014781/foto-01.jpeg'
  ]);
  window.PRODUTOS.splice(0, window.PRODUTOS.length, ...window.PRODUTOS.filter(produto =>
    !idsRemovidos.has(produto.id) && !imagensRemovidas.has(produto.img)
  ));

  const porEquipe = {
    'Athletico Paranaense':'Umbro','Atlético Mineiro':'Nike','Bahia':'Puma','Botafogo':'Reebok','RB Bragantino':'New Balance','Chapecoense':'Kappa','Corinthians':'Nike','Coritiba':'Diadora','Cruzeiro':'Adidas','Fluminense':'Umbro','Grêmio':'New Balance','Internacional':'Adidas','Palmeiras':'Puma','Remo':'Volt Sport','Santos':'Umbro','São Paulo':'New Balance','Vasco da Gama':'Kappa','Vitória':'Volt Sport',
    'Arsenal':'Adidas','Aston Villa':'Adidas','Bournemouth':'Umbro','Brighton':'Nike','Chelsea':'Nike','Coventry':'Hummel','Crystal Palace':'Macron','Everton':'Castore','Fulham':'Adidas','Leeds United':'Adidas','Liverpool':'Adidas','Manchester City':'Puma','Manchester United':'Adidas','Newcastle United':'Adidas','Nottingham Forest':'Adidas','Sunderland':'Hummel','Tottenham Hotspur':'Nike',
    'Athletic Club':'Castore','Atlético de Madrid':'Nike','Osasuna':'Macron','Celta de Vigo':'Hummel','Deportivo Alavés':'Puma','Barcelona':'Nike','Málaga':'Hummel','Rayo Vallecano':'Umbro','Deportivo La Coruña':'Kappa','Espanyol':'Kelme','Real Betis':'Hummel','Real Madrid':'Adidas','Real Sociedad':'Macron','Sevilla':'Adidas','Valencia':'Puma','Villarreal':'Joma',
    'Atalanta':'New Balance','Bologna':'Macron','Cagliari':'Eye Sport','Fiorentina':'Kappa','Genoa':'Kappa','Inter':'Nike','Lazio':'Mizuno','Milan':'Puma','Napoli':'EA7','Parma':'Puma','Roma':'Adidas','Torino':'Joma','Venezia':'Nike',
    'Werder Bremen':'Hummel','Borussia Dortmund':'Puma','Eintracht Frankfurt':'Adidas','Freiburg':'Nike','Köln':'Hummel','RB Leipzig':'Puma','Bayer 04 Leverkusen':'New Balance',"Borussia M'gladbach":'Puma','Bayern München':'Adidas','Schalke 04':'Adidas',
    'Lens':'Puma','Lyon':'Nike','Olympique de Marseille':'Puma','AS Monaco':'Mizuno','PSG':'Nike',
    'Canadá':'Nike','México':'Adidas','Estados Unidos':'Nike','Austrália':'Nike','Japão':'Adidas','Coreia do Sul':'Nike','Catar':'Adidas','Arábia Saudita':'Adidas','Uzbequistão':'Jako','Argélia':'Adidas','Cabo Verde':'Tempo','Costa do Marfim':'Puma','Egito':'Puma','Gana':'Puma','Marrocos':'Puma','Senegal':'Puma','África do Sul':'Le Coq Sportif','Tunísia':'Kappa','Curaçao':'Nike','Haiti':'Saeta','Panamá':'Reebok','Argentina':'Adidas','Brasil':'Nike','Colômbia':'Adidas','Equador':'Marathon','Paraguai':'Puma','Uruguai':'Nike','Nova Zelândia':'Puma','Áustria':'Puma','Bélgica':'Adidas','Croácia':'Nike','Tchéquia':'Puma','Inglaterra':'Nike','França':'Nike','Alemanha':'Adidas','Países Baixos':'Nike','Noruega':'Nike','Portugal':'Puma','Escócia':'Adidas','Espanha':'Adidas','Suécia':'Adidas','Suíça':'Puma','Turquia':'Nike',
    'Itália':'Adidas','Dinamarca':'Hummel','Polônia':'Nike','Ucrânia':'Adidas','País de Gales':'Adidas','Nigéria':'Nike','Camarões':'Fourteen','Mali':'Airness','Emirados Árabes Unidos':'Adidas','Costa Rica':'Adidas','Jamaica':'Adidas','Chile':'Adidas','Peru':'Adidas','Venezuela':'Adidas'
  };

  const porNome = [
    [/air\s*jordan|\bjordan\b/i,'Air Jordan'],[/air\s*force/i,'Nike'],[/adizero|ultraboost|samba|campus|predator|\bf50\b/i,'Adidas'],[/mercurial|phantom|tiempo|\bnike\b/i,'Nike'],[/new\s*balance|\bfuron\b/i,'New Balance'],[/\bpuma\b|\bultra\b/i,'Puma'],[/\bumbro\b/i,'Umbro'],[/\basics\b|gel[- ]/i,'Asics'],[/\bmizuno\b|morelia/i,'Mizuno'],[/\breebok\b/i,'Reebok'],[/\blacoste\b/i,'Lacoste'],[/hugo\s*boss|\bboss\b/i,'Hugo Boss'],[/armani|\bea7\b/i,'Armani'],[/calvin\s*klein/i,'Calvin Klein'],[/tommy\s*hilfiger/i,'Tommy Hilfiger'],[/under\s*armour/i,'Under Armour'],[/on\s*running|cloudmonster|cloudrunner/i,'On Running'],[/\bzoci\b/i,'Zoci']
  ];

  // Uniformes retrô usam o fornecedor da época, não necessariamente o atual.
  const retro = [
    [/Botafogo.*2002|2002.*Botafogo/i,'Kappa'],[/Corinthians.*1990|1990.*Corinthians/i,'Finta'],[/Coritiba.*1996|1996.*Coritiba/i,'Penalty'],[/Palmeiras.*(?:99|1999)/i,'Rhumell'],[/Vasco.*1988|1988.*Vasco/i,'Adidas'],
    [/Chelsea.*1998|1998.*Chelsea/i,'Umbro'],[/Everton.*1994|1994.*Everton/i,'Umbro'],[/Leeds.*1999|1999.*Leeds/i,'Puma'],[/Newcastle.*(?:1999|2006)|(?:1999|2006).*Newcastle/i,'Adidas'],[/Tottenham.*1994|1994.*Tottenham/i,'Umbro'],
    [/Atletico Madrid.*(?:1998|1999|2000)|(?:1998|1999|2000).*Atletico Madrid/i,'Reebok'],[/Celta.*2002|2002.*Celta/i,'Umbro'],[/Deportivo La Coruña.*(?:1998|1999|2003)|(?:1998|1999|2003).*Deportivo La Coruña/i,'Adidas'],[/Espanyol.*1999|1999.*Espanyol/i,'Puma'],[/Sevilla.*1994|1994.*Sevilla/i,'Umbro'],[/Villarreal.*05|05.*Villarreal/i,'Puma'],
    [/Bologna.*1997|1997.*Bologna/i,'Diadora'],[/Fiorentina.*(?:1995|1996)|(?:1995|1996).*Fiorentina/i,'Lotto'],[/Fiorentina.*(?:1997|1998|1999)|(?:1997|1998|1999).*Fiorentina/i,'Fila'],[/Lazio.*1998|1998.*Lazio/i,'Puma'],[/Milan.*2002|2002.*Milan/i,'Adidas'],[/Napoli.*2013|2013.*Napoli/i,'Macron'],[/Parma.*93|93.*Parma/i,'Umbro'],[/Venezia.*(?:1998|1999)|(?:1998|1999).*Venezia/i,'Kronos'],[/Werder Bremen.*03|03.*Werder Bremen/i,'Kappa'],[/Dortmund.*2011|2011.*Dortmund/i,'Kappa'],
    [/Marseille.*1990|1990.*Marseille/i,'Adidas'],[/México.*1986|1986.*Mexico/i,'Adidas'],[/Brasil.*1994|1994.*Brazil/i,'Umbro'],[/Colômbia.*1990|1990.*Colombia/i,'Adidas'],[/Colômbia.*1998|1998.*Colombia/i,'Reebok'],[/Uruguai.*2010|2010.*Uruguay/i,'Puma'],[/Croácia.*1998|1998.*Croatia/i,'Lotto'],[/Países Baixos.*1988|1988.*Netherlands/i,'Adidas'],[/Países Baixos.*(?:1996|2000|2002|2004|2008|2010|2014)|(?:1996|2000|2002|2004|2008|2010|2014).*Netherlands/i,'Nike'],[/Espanha.*2000|2000.*Spain/i,'Adidas'],[/Turquia.*1996|1996.*Türkiye/i,'Adidas'],[/Turquia.*2008|2008.*Türkiye/i,'Nike'],[/Polônia.*1982|1982.*Poland/i,'Adidas'],[/Polônia.*2012|2012.*Poland/i,'Nike'],[/Camarões.*1990|1990.*Cameroon/i,'Adidas'],[/Camarões.*(?:1998|2002)|(?:1998|2002).*Cameroon/i,'Puma']
  ];

  window.PRODUTOS.forEach(produto => {
    if (produto.categoria === 'Chuteiras') {
      produto.nome = produto.nome
        .replace(/\s*(?:tamanhos?|numera[cç][aã]o|sizes?)?\s*[:：]\s*[\d\s.,/-]+$/iu, '')
        .replace(/\s+\d{2}\s*[-/]\s*\d{2}$/u, '')
        .trim();
      produto.descricao = `${produto.nome} selecionada para o catálogo GLT Imports.`;
    }
    if (!/^Catálogo(?: GLT| Funny1| Futebol)?$/i.test(produto.marca || '')) return;
    const texto = `${produto.nome} ${produto.tipo || ''} ${produto.linha || ''}`;
    const identificadaRetro = retro.find(([padrao]) => padrao.test(texto));
    const identificadaNoNome = porNome.find(([padrao]) => padrao.test(texto));
    const marca = identificadaRetro?.[1] || identificadaNoNome?.[1] || porEquipe[produto.clube];
    if (marca) produto.marca = marca;
  });
})();
