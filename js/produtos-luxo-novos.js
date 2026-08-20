// Novos itens de Luxo cadastrados a partir dos álbuns autorizados.
const LUXO_NOVOS = [
  { id: 1101, nome: 'Jaqueta masculina 608130120 — Modelo 4', tipo: 'Jaqueta', pasta: '608130120', fotos: 8, cores: ['Preto'], tamanhos: ['M','G','GG','3XL'] },
  { id: 1102, nome: 'Conjunto masculino 608160225 — Modelo 20', tipo: 'Conjunto', pasta: '608160225', fotos: 8, cores: ['Preto'], tamanhos: ['M','G','GG','3XL'] }
];
window.PRODUTOS = window.PRODUTOS || [];
for (const item of LUXO_NOVOS) {
  window.PRODUTOS.push({
    id: item.id, nome: item.nome, categoria: 'Luxo', marca: 'GLT Imports', preco: 149.99,
    tipo: item.tipo, tamanhos: item.tamanhos, cores: item.cores,
    descricao: `${item.tipo} masculino ${item.nome.split(' — ')[0]}, com acabamento premium e modelagem confortável.`,
    img: `/assets/images/luxo/${item.pasta}/0.jpg`,
    galeria: Array.from({length:item.fotos}, (_,i)=>`/assets/images/luxo/${item.pasta}/${i}.jpg`),
    caracteristicas: ['Curadoria GLT Imports','Modelagem masculina','Disponibilidade sob consulta']
  });
}
