// Novos itens de Luxo cadastrados a partir dos álbuns autorizados.
const LUXO_NOVOS = [
  { id: 1101, nome: 'Jaqueta masculina — 608130120 Modelo 4', tipo: 'Jaqueta', pasta: '608130120', capa: 6, fotos: 8, cores: ['Preto'], tamanhos: ['M','G','GG','3XL'] },
  { id: 1102, nome: 'Conjunto masculino — 608160225 Modelo 20', tipo: 'Conjunto', pasta: '608160225', capa: 2, fotos: 8, cores: ['Preto'], tamanhos: ['M','G','GG','3XL'] },
  { id: 1159, nome: 'Jaqueta masculina — 6080100730 Modelo 18', tipo: 'Jaqueta', pasta: '6080100730', capa: 0, fotos: 19, cores: ['Preto'], tamanhos: ['M','G','GG','3XL','4XL'] },
  { id: 1160, nome: 'Suéter masculino — 608090170 Modelo 18', tipo: 'Suéter', pasta: '608090170', capa: 0, fotos: 11, cores: ['Conforme imagens'], tamanhos: ['M','G','GG','3XL','4XL'] }
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

const short1132 = window.PRODUTOS.find(item => item.id === 1132);
if (short1132) {
  short1132.img = '/assets/images/luxo/calca-1132/3.jpg';
  short1132.galeria = ['/assets/images/luxo/calca-1132/0.jpg', '/assets/images/luxo/calca-1132/3.jpg'];
}

const short1134 = window.PRODUTOS.find(item => item.id === 1134);
if (short1134) {
  short1134.img = '/assets/images/luxo/calca-1134/3.jpg';
  short1134.galeria = ['/assets/images/luxo/calca-1134/0.jpg', '/assets/images/luxo/calca-1134/3.jpg'];
}

const LOTES_LUXO = [
  [1147, 'Conjunto masculino', 'conjunto'], [1149, 'Moda esportiva masculina', 'nikad'], [1151, 'Camisa masculina', 'philipp'],
  [1153, 'Camisa manga longa', 'manga-longa'], [1155, 'Suéter masculino', 'sueter'], [1157, 'Jaqueta masculina', 'jaqueta-pluma']
];
for (const [base, tipo, pasta] of LOTES_LUXO) for (let n = 0; n < 2; n++) {
  const id = base + n;
  window.PRODUTOS.push({ id, nome: `${tipo} — Modelo ${n + 1}`, categoria: 'Luxo', marca: 'Marca própria', preco: 149.99,
    tipo, tamanhos: ['M','G','GG','3XL'], cores: ['Preto'], descricao: `${tipo} masculino com acabamento confortável e estilo premium.`,
    img: `/assets/images/luxo/${pasta}-${id}/0.jpg`, galeria: Array.from({length:4}, (_,i)=>`/assets/images/luxo/${pasta}-${id}/${i}.jpg`),
    caracteristicas: ['Curadoria GLT Imports','Modelagem masculina','Disponibilidade sob consulta'] });
}

const item1147 = window.PRODUTOS.find(item => item.id === 1147);
if (item1147) {
  item1147.nome = 'Short masculino — Modelo 1';
  item1147.tipo = 'Short masculino';
  item1147.descricao = 'Short masculino com modelagem confortável e acabamento casual.';
  item1147.img = '/assets/images/luxo/conjunto-1147/3.jpg';
  item1147.galeria = ['/assets/images/luxo/conjunto-1147/0.jpg', '/assets/images/luxo/conjunto-1147/3.jpg'];
}

const item1148 = window.PRODUTOS.find(item => item.id === 1148);
if (item1148) {
  item1148.nome = 'Blusa masculina — Modelo 2';
  item1148.tipo = 'Blusa masculina';
  item1148.descricao = 'Blusa masculina com acabamento confortável e estilo casual premium.';
  item1148.img = '/assets/images/luxo/conjunto-1148/0.jpg';
  item1148.galeria = ['/assets/images/luxo/conjunto-1148/0.jpg', '/assets/images/luxo/conjunto-1148/3.jpg'];
}

const item1149 = window.PRODUTOS.find(item => item.id === 1149);
if (item1149) {
  item1149.img = '/assets/images/luxo/nikad-1149/0.jpg';
  item1149.galeria = [0, 3].map(i => `/assets/images/luxo/nikad-1149/${i}.jpg`);
}

const item1150 = window.PRODUTOS.find(item => item.id === 1150);
if (item1150) {
  item1150.img = '/assets/images/luxo/nikad-1150/3.jpg';
  item1150.galeria = [0, 3].map(i => `/assets/images/luxo/nikad-1150/${i}.jpg`);
}

const item1151 = window.PRODUTOS.find(item => item.id === 1151);
if (item1151) {
  item1151.img = '/assets/images/luxo/philipp-1151/3.jpg';
  item1151.galeria = [0, 3].map(i => `/assets/images/luxo/philipp-1151/${i}.jpg`);
}

const item1152 = window.PRODUTOS.find(item => item.id === 1152);
if (item1152) {
  item1152.img = '/assets/images/luxo/philipp-1152/3.jpg';
  item1152.galeria = [0, 3].map(i => `/assets/images/luxo/philipp-1152/${i}.jpg`);
}

const item1153 = window.PRODUTOS.find(item => item.id === 1153);
if (item1153) item1153.galeria = [0, 3].map(i => `/assets/images/luxo/manga-longa-1153/${i}.jpg`);

const item1154 = window.PRODUTOS.find(item => item.id === 1154);
if (item1154) item1154.galeria = [0, 3].map(i => `/assets/images/luxo/manga-longa-1154/${i}.jpg`);

const item1156 = window.PRODUTOS.find(item => item.id === 1156);
if (item1156) {
  item1156.img = '/assets/images/luxo/sueter-1156/3.jpg';
  item1156.galeria = [0, 3].map(i => `/assets/images/luxo/sueter-1156/${i}.jpg`);
}

const item1108 = window.PRODUTOS.find(item => item.id === 1108);
if (item1108) item1108.galeria = [0, 3, 4].map(i => `/assets/images/luxo/polo-t-1108/${i}.jpg`);

const item1109 = window.PRODUTOS.find(item => item.id === 1109);
if (item1109) item1109.galeria = [0, 3, 4].map(i => `/assets/images/luxo/polo-t-1109/${i}.jpg`);

const item1110 = window.PRODUTOS.find(item => item.id === 1110);
if (item1110) item1110.galeria = [0, 3, 4].map(i => `/assets/images/luxo/polo-t-1110/${i}.jpg`);

const item1111 = window.PRODUTOS.find(item => item.id === 1111);
if (item1111) item1111.galeria = [0, 3, 4].map(i => `/assets/images/luxo/polo-t-1111/${i}.jpg`);

const item1112 = window.PRODUTOS.find(item => item.id === 1112);
if (item1112) item1112.galeria = [0, 3, 4].map(i => `/assets/images/luxo/polo-t-1112/${i}.jpg`);

for (let id = 1113; id <= 1121; id++) {
  const item = window.PRODUTOS.find(product => product.id === id);
  if (item) item.galeria = [0, 3, 4].map(i => `/assets/images/luxo/polo-t-${id}/${i}.jpg`);
}

const item1115 = window.PRODUTOS.find(item => item.id === 1115);
if (item1115) item1115.img = '/assets/images/luxo/polo-t-1115/2.jpg';

const item1119 = window.PRODUTOS.find(item => item.id === 1119);
if (item1119) item1119.img = '/assets/images/luxo/polo-t-1119/3.jpg';

const item1120 = window.PRODUTOS.find(item => item.id === 1120);
if (item1120) item1120.img = '/assets/images/luxo/polo-t-1120/3.jpg';

// Acessórios — cintos selecionados do lote The belt.
const ACESSORIOS_CINTOS = [
  [1161, 'Cinto masculino — 608080165', ['https://photo.yupoo.com/407131796/6e49e7148d/small.jpg','https://photo.yupoo.com/407131796/3616fb7263/small.jpg','https://photo.yupoo.com/407131796/33325feb91/small.jpg','https://photo.yupoo.com/407131796/7e2b0492f8/small.jpg']],
  [1162, 'Cinto masculino — 608080145', ['https://photo.yupoo.com/407131796/fc1f187f8e/small.jpg','https://photo.yupoo.com/407131796/7592c677f4/small.jpg','https://photo.yupoo.com/407131796/28500ccaa0/small.jpg','https://photo.yupoo.com/407131796/007f113199/small.jpg']],
  [1163, 'Cinto masculino — 607250140', ['https://photo.yupoo.com/407131796/54ba18d028/small.jpg','https://photo.yupoo.com/407131796/1a381b41d6/small.jpg','https://photo.yupoo.com/407131796/4197680a3a/small.jpg','https://photo.yupoo.com/407131796/49ed757af8/small.jpg']],
  [1164, 'Cinto masculino — 607250165', ['https://photo.yupoo.com/407131796/4e52f8c6fe/small.jpg','https://photo.yupoo.com/407131796/f8dd4dcccb/small.jpg','https://photo.yupoo.com/407131796/c0364f9601/small.jpg','https://photo.yupoo.com/407131796/01f9fab0af/small.jpg']],
  [1165, 'Cinto masculino — 607130205', ['https://photo.yupoo.com/407131796/7306b1814d/small.jpg','https://photo.yupoo.com/407131796/bff6d55470/small.jpg','https://photo.yupoo.com/407131796/9d502691c2/small.jpg','https://photo.yupoo.com/407131796/593013061b/small.jpg']]
];
for (const [id, nome, galeria] of ACESSORIOS_CINTOS) window.PRODUTOS.push({id,nome,categoria:'Acessórios',marca:'Catálogo GLT',preco:149.99,tipo:'Cinto',tamanhos:['Único'],cores:['Conforme imagens'],descricao:`${nome}, acessório masculino com acabamento premium e disponibilidade sob consulta.`,img:galeria[0],galeria,caracteristicas:['Curadoria GLT Imports','Acessório masculino','Disponibilidade sob consulta']});
for (const id of [1161,1162,1163,1164,1165]) { const p=window.PRODUTOS.find(item=>item.id===id); if(p){ const count=id===1162?3:id===1163?4:4; p.galeria=Array.from({length:count},(_,i)=>`/assets/images/acessorios/cintos/${id}/${i}.jpg`); p.img=p.galeria[0]; } }

const BONES_ACESSORIOS = [1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177];
for (const [indice,id] of BONES_ACESSORIOS.entries()) window.PRODUTOS.push({id,nome:`Boné masculino — Modelo ${indice+1}`,categoria:'Acessórios',marca:'Catálogo GLT',preco:149.99,tipo:'Boné',tamanhos:['Único'],cores:['Conforme imagem'],descricao:'Boné masculino selecionado do lote de acessórios GLT Imports.',img:`/assets/images/acessorios/bones/${id}/0.jpg`,galeria:[`/assets/images/acessorios/bones/${id}/0.jpg`],caracteristicas:['Curadoria GLT Imports','Acessório masculino','Disponibilidade sob consulta']});
const CHINELOS_ACESSORIOS = [1178,1179,1180,1181,1182,1183,1184,1185];
for (const [indice,id] of CHINELOS_ACESSORIOS.entries()) window.PRODUTOS.push({id,nome:`Chinelo masculino — Modelo ${indice+1}`,categoria:'Acessórios',marca:'Catálogo GLT',preco:149.99,tipo:'Chinelo',tamanhos:['39','40','41','42','43','44'],cores:['Conforme imagem'],descricao:'Chinelo masculino selecionado do lote de calçados GLT Imports.',img:`/assets/images/acessorios/chinelos/${id}/0.jpg`,galeria:[`/assets/images/acessorios/chinelos/${id}/0.jpg`],caracteristicas:['Curadoria GLT Imports','Modelo masculino','Disponibilidade sob consulta']});
const OCULOS_ACESSORIOS = [[1186,'39'],[1187,'38'],[1188,'37'],[1189,'36'],[1190,'35'],[1191,'34'],[1192,'33'],[1193,'32']];
for (const [id,modelo] of OCULOS_ACESSORIOS) window.PRODUTOS.push({id,nome:`Óculos masculino 60720 0000 — Modelo ${modelo}`,categoria:'Acessórios',marca:'Catálogo GLT',preco:149.99,tipo:'Óculos',tamanhos:['Único'],cores:['Conforme imagem'],descricao:`Óculos masculino novo modelo 60720 0000, variação ${modelo}, conforme o catálogo do fornecedor.`,img:`/assets/images/acessorios/oculos/${id}/0.jpg`,galeria:[`/assets/images/acessorios/oculos/${id}/0.jpg`],caracteristicas:['Modelo masculino','Código 60720 0000','Disponibilidade sob consulta']});
const MEIAS_ACESSORIOS = [[1194,'31'],[1195,'30'],[1196,'28'],[1197,'23'],[1198,'18']];
for (const [id,modelo] of MEIAS_ACESSORIOS) window.PRODUTOS.push({id,nome:`Meia masculina 60722 0000 — Modelo ${modelo}`,categoria:'Acessórios',marca:'Catálogo GLT',preco:149.99,tipo:'Meias',tamanhos:['Único'],cores:['Conforme imagem'],descricao:`Meia masculina nova 60722 0000, modelo ${modelo}, conforme o catálogo do fornecedor.`,img:`/assets/images/acessorios/meias/${id}/0.jpg`,galeria:[`/assets/images/acessorios/meias/${id}/0.jpg`],caracteristicas:['Acessório masculino','Código 60722 0000','Disponibilidade sob consulta']});
const CINTOS_NOVOS = [[1199,'508210190'],[1200,'508210150'],[1201,'508210185']];
for (const [id,codigo] of CINTOS_NOVOS) window.PRODUTOS.push({id,nome:`Cinto masculino — ${codigo}`,categoria:'Acessórios',marca:'Catálogo GLT',preco:149.99,tipo:'Cinto',tamanhos:['Único'],cores:['Conforme imagem'],descricao:`Cinto masculino novo ${codigo}, conforme o catálogo do fornecedor.`,img:`/assets/images/acessorios/cintos/${id}/0.jpg`,galeria:[`/assets/images/acessorios/cintos/${id}/0.jpg`],caracteristicas:['Acessório masculino','Disponibilidade sob consulta']});
const SANDALIAS_ACESSORIOS = [[1202,'30'],[1203,'95']];
for (const [id,modelo] of SANDALIAS_ACESSORIOS) window.PRODUTOS.push({id,nome:`Sandália masculina 60707 0000 — Modelo ${modelo}`,categoria:'Acessórios',marca:'Catálogo GLT',preco:149.99,tipo:'Sandália',tamanhos:['39','40','41','42','43','44'],cores:['Conforme imagem'],descricao:`Sandália masculina 60707 0000, modelo ${modelo}, conforme o catálogo de calçados do fornecedor.`,img:`/assets/images/acessorios/sandalias/${id}/0.jpg`,galeria:[`/assets/images/acessorios/sandalias/${id}/0.jpg`],caracteristicas:['Acessório masculino','Disponibilidade sob consulta']});

const item1159 = window.PRODUTOS.find(item => item.id === 1159);
if (item1159) item1159.img = '/assets/images/luxo/6080100730/3.jpg';
const item1160 = window.PRODUTOS.find(item => item.id === 1160);
if (item1160) { item1160.img = '/assets/images/luxo/608090170/6.jpg'; item1160.galeria = item1160.galeria.filter((_, indice) => ![1, 8].includes(indice)); }
