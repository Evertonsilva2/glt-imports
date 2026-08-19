// Produto cadastrado a partir do álbum autorizado do fornecedor.
window.PRODUTOS = window.PRODUTOS || [];
window.PRODUTOS.push({
  id: 1061,
  nome: 'Short Balenciaga — 608090150 Modelo 23',
  categoria: 'Luxo',
  marca: 'Balenciaga',
  preco: 149.99,
  tipo: 'Shorts',
  tamanhos: ['M', 'G', 'GG', 'XG'],
  cores: ['Preto'],
  descricao: 'Short Balenciaga 608090150 Modelo 23, com corte casual, acabamento confortável e estética urbana premium.',
  img: 'https://photo.yupoo.com/407131796/bfea46023f/small.jpg',
  galeria: [
    'https://photo.yupoo.com/407131796/bfea46023f/small.jpg',
    'https://photo.yupoo.com/407131796/8722424b87/small.jpg',
    'https://photo.yupoo.com/407131796/d2a302579a/small.jpg',
    'https://photo.yupoo.com/407131796/8fa3ac01a3/small.jpg',
    'https://photo.yupoo.com/407131796/380a9acc7a/small.jpg',
    'https://photo.yupoo.com/407131796/c23626c38b/small.jpg',
    'https://photo.yupoo.com/407131796/c8a3b3e44d/small.jpg',
    'https://photo.yupoo.com/407131796/c87d1a6082/small.jpg',
    'https://photo.yupoo.com/407131796/37f252a240/small.jpg',
    'https://photo.yupoo.com/407131796/c3e0eb295c/small.jpg',
    'https://photo.yupoo.com/407131796/f0433ef534/small.jpg',
    'https://photo.yupoo.com/407131796/cb494ef6e5/small.jpg',
    'https://photo.yupoo.com/407131796/375df40c2b/small.jpg'
  ],
  caracteristicas: ['Curadoria GLT Imports', 'Modelagem casual masculina', 'Disponibilidade sob consulta']
});

// As fotos ficam hospedadas localmente para evitar bloqueios do fornecedor.
for (const id of [1061, 1062]) {
  const produto = window.PRODUTOS.find(item => item.id === id);
  if (produto) {
    produto.img = `assets/images/luxo/1061-1062-local/${id}-0.jpg`;
    produto.galeria = Array.from({ length: id === 1061 ? 14 : 11 }, (_, i) => `assets/images/luxo/1061-1062-local/${id}-${i}.jpg`);
  }
}

window.PRODUTOS.push({
  id: 1062,
  nome: 'Polo Lacoste — 60709080',
  categoria: 'Luxo',
  marca: 'Lacoste',
  preco: 149.99,
  tipo: 'Camisa polo',
  tamanhos: ['M', 'G', 'GG', '2XL'],
  cores: ['Branco Paris', 'Azul Madrid', 'Preto Berlin', 'Preto Chicago', 'Azul-marinho Nova York', 'Verde Londres', 'Vermelho Milão', 'Branco Los Angeles'],
  descricao: 'Polo Lacoste 60709080, com modelagem masculina, acabamento confortável e opções de cores inspiradas em diferentes cidades.',
  img: 'https://photo.yupoo.com/407131796/55eb269020/small.jpg',
  galeria: [
    'https://photo.yupoo.com/407131796/55eb269020/small.jpg',
    'https://photo.yupoo.com/407131796/1addf6b88d/small.jpg',
    'https://photo.yupoo.com/407131796/3f6b30d03a/small.jpg',
    'https://photo.yupoo.com/407131796/ba9eb3c2dc/small.jpg',
    'https://photo.yupoo.com/407131796/ff5e21df00/small.jpg',
    'https://photo.yupoo.com/407131796/d4adf8bbda/small.jpg',
    'https://photo.yupoo.com/407131796/9221755a0b/small.jpg',
    'https://photo.yupoo.com/407131796/b29e6dba72/small.jpg',
    'https://photo.yupoo.com/407131796/50d33d50e7/small.jpg',
    'https://photo.yupoo.com/407131796/67f1ce1745/small.jpg'
  ],
  caracteristicas: ['Coleção de edição urbana', 'Modelagem masculina', 'Disponibilidade sob consulta']
});
