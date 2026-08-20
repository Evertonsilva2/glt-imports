// Novos itens de Luxo cadastrados a partir dos álbuns autorizados.
const LUXO_NOVOS = [
  { id: 1101, nome: 'Jaqueta masculina — 608130120 Modelo 4', tipo: 'Jaqueta', pasta: '608130120', capa: 6, fotos: 8, cores: ['Preto'], tamanhos: ['M','G','GG','3XL'] },
  { id: 1102, nome: 'Conjunto masculino — 608160225 Modelo 20', tipo: 'Conjunto', pasta: '608160225', capa: 2, fotos: 8, cores: ['Preto'], tamanhos: ['M','G','GG','3XL'] }
];
window.PRODUTOS = window.PRODUTOS || [];
for (const item of LUXO_NOVOS) {
  window.PRODUTOS.push({
    id: item.id, nome: item.nome, categoria: 'Luxo', marca: 'GLT Imports', preco: 149.99,
    tipo: item.tipo, tamanhos: item.tamanhos, cores: item.cores,
    descricao: `${item.tipo} masculino ${item.nome.split(' — ')[0]}, com acabamento premium e modelagem confortável.`,
    img: `/assets/images/luxo/${item.pasta}/${item.capa}.jpg`,
    galeria: Array.from({length:item.fotos}, (_,i)=>`/assets/images/luxo/${item.pasta}/${i}.jpg`),
    caracteristicas: ['Curadoria GLT Imports','Modelagem masculina','Disponibilidade sob consulta']
  });
}

const POLOS_T = [
  [1103, 'Camisa masculina — 608080120 Modelo 20', 'polo-t-1103', 6, 'Preto'],
  [1104, 'Camisa masculina — 608080120 Modelo 19', 'polo-t-1104', 5, 'Branco'],
  [1105, 'Camisa masculina — 608080120 Modelo 18', 'polo-t-1105', 7, 'Azul-marinho'],
  [1106, 'Camisa masculina — 608080120 Modelo 17', 'polo-t-1106', 7, 'Verde'],
  [1107, 'Camisa masculina — 608080120 Modelo 15', 'polo-t-1107', 6, 'Vermelho']
];
for (const [id, nome, pasta, fotos, cor] of POLOS_T) {
  window.PRODUTOS.push({ id, nome, categoria: 'Luxo', marca: 'Sem marca informada', preco: 149.99,
    tipo: 'Camisa gola polo', tamanhos: ['M','G','GG','3XL'], cores: [cor],
    descricao: `${nome}, com gola polo, modelagem masculina e acabamento confortável.`,
    img: `/assets/images/luxo/${pasta}/0.jpg`,
    galeria: Array.from({length:fotos}, (_,i)=>`/assets/images/luxo/${pasta}/${i}.jpg`),
    caracteristicas: ['Curadoria GLT Imports','Modelagem masculina','Disponibilidade sob consulta'] });
}
