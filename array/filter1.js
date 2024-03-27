const produtos = [
    { nome: "notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: false },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plastico", preco: 18.99, fragil: false },
];

let resultado = produtos.filter((e) => e.preco > 10 && e.fragil === false);
console.log(resultado);
