const produtos = [
    { nome: "notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plastico", preco: 18.99, fragil: false },
];

const elemetosFragil = e => e.fragil;
const elementosAcima500reais = e => e.preco >= 500;

console.log(produtos.filter(elemetosFragil).filter(elementosAcima500reais));
