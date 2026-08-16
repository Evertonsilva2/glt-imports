(() => {
  const extensoes = {
    6: ['png','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','png'],
    7: ['png','png'],
    8: ['png','jpg','jpg','jpg','jpg','jpg','jpg','png'],
    9: ['png','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','png'],
    10: ['png','jpg','jpg','jpg','jpg','jpg','jpg','jpg','png'],
    11: ['png','png','png','jpg','png','png','png','png','png'],
    12: ['png','png','png'],
    13: ['jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg'],
    14: ['png','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg'],
    15: ['jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpg']
  };

  Object.entries(extensoes).forEach(([id, tipos]) => {
    const produto = PRODUTOS.find(item => item.id === Number(id));
    if (!produto) return;
    produto.galeria = tipos.map((tipo, indice) =>
      `assets/images/camisas/flamengo/produto-${String(id).padStart(2, '0')}/foto-${String(indice + 1).padStart(2, '0')}.${tipo}`
    );
    produto.img = produto.galeria[0];
  });
})();
