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

const POLOS_T_EXTRAS = [
  [1108, 'Camisa masculina — 608080120 Modelo 14', 'polo-t-1108', 'Cinza'], [1109, 'Camisa masculina — 608080120 Modelo 13', 'polo-t-1109', 'Azul'],
  [1110, 'Camisa masculina — 608080120 Modelo 12', 'polo-t-1110', 'Verde-escuro'], [1111, 'Camisa masculina — 608080120 Modelo 11', 'polo-t-1111', 'Bege'],
  [1112, 'Camisa masculina — 608080120 Modelo 10', 'polo-t-1112', 'Marrom'], [1113, 'Camisa masculina — 608080120 Modelo 9', 'polo-t-1113', 'Vinho'],
  [1114, 'Camisa masculina — 608080120 Modelo 8', 'polo-t-1114', 'Branco'], [1115, 'Camisa masculina — 608080120 Modelo 7', 'polo-t-1115', 'Preto'],
  [1116, 'Camisa masculina — 608080120 Modelo 6', 'polo-t-1116', 'Azul-marinho'], [1117, 'Camisa masculina — 608080120 Modelo 5', 'polo-t-1117', 'Verde'],
  [1118, 'Camisa masculina — 608080120 Modelo 4', 'polo-t-1118', 'Cinza'], [1119, 'Camisa masculina — 608080120 Modelo 3', 'polo-t-1119', 'Azul-claro'],
  [1120, 'Camisa masculina — 608080120 Modelo 2', 'polo-t-1120', 'Preto'], [1121, 'Camisa masculina — 608080120 Modelo 1', 'polo-t-1121', 'Branco']
];
for (const [id, nome, pasta, cor] of POLOS_T_EXTRAS) {
  window.PRODUTOS.push({ id, nome, categoria: 'Luxo', marca: 'Marca própria', preco: 149.99,
    tipo: 'Camisa gola polo', tamanhos: ['M','G','GG','3XL'], cores: [cor],
    descricao: `${nome}, camisa masculina de gola polo com acabamento confortável.`,
    img: `/assets/images/luxo/${pasta}/0.jpg`, galeria: Array.from({length:6}, (_,i)=>`/assets/images/luxo/${pasta}/${i}.jpg`),
    caracteristicas: ['Curadoria GLT Imports','Modelagem masculina','Disponibilidade sob consulta'] });
}

for (let id = 1122; id <= 1146; id++) {
  window.PRODUTOS.push({ id, nome: `Short masculino — 608090150 Modelo ${1148 - id}`, categoria: 'Luxo', marca: 'Marca própria', preco: 149.99,
    tipo: 'Short masculino', tamanhos: ['M','G','GG','3XL'], cores: ['Preto'],
    descricao: 'Short masculino 608090150, com modelagem confortável e acabamento casual.',
    img: `/assets/images/luxo/calca-${id}/1.jpg`, galeria: Array.from({length:4}, (_,i)=>`/assets/images/luxo/calca-${id}/${i}.jpg`),
    caracteristicas: ['Curadoria GLT Imports','Modelagem masculina','Disponibilidade sob consulta'] });
}

const short1142 = window.PRODUTOS.find(item => item.id === 1142);
if (short1142) {
  short1142.img = '/assets/images/luxo/calca-1142/3.jpg';
  short1142.galeria = ['/assets/images/luxo/calca-1142/0.jpg', '/assets/images/luxo/calca-1142/3.jpg'];
}

const short1144 = window.PRODUTOS.find(item => item.id === 1144);
if (short1144) short1144.galeria = ['/assets/images/luxo/calca-1144/0.jpg', '/assets/images/luxo/calca-1144/3.jpg'];

const short1146 = window.PRODUTOS.find(item => item.id === 1146);
if (short1146) {
  short1146.img = '/assets/images/luxo/calca-1146/3.jpg';
  short1146.galeria = ['/assets/images/luxo/calca-1146/0.jpg', '/assets/images/luxo/calca-1146/3.jpg'];
}

const short1143 = window.PRODUTOS.find(item => item.id === 1143);
if (short1143) {
  short1143.img = '/assets/images/luxo/calca-1143/3.jpg';
  short1143.galeria = ['/assets/images/luxo/calca-1143/0.jpg', '/assets/images/luxo/calca-1143/3.jpg'];
}
