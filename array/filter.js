const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeroFiltrado = numeros.filter((e) => e % 2 == 0);
console.log(numeroFiltrado);

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 28 },
    { nome: "Camila", idade: 35 },
    { nome: "Bruno", idade: 21 },
    { nome: "Fernanda", idade: 27 },
    { nome: "Eduardo", idade: 32 },
    { nome: "Gabriela", idade: 24 },
    { nome: "Ricardo", idade: 31 },
];

const idade = pessoas.filter((e) => e.idade > 25);
const nomeTamanho = pessoas.filter((e) => e.nome.length >= 5);
const nomeLetraA = pessoas.filter((e) => e.nome.endsWith("a"));
console.log(idade);
console.log(nomeTamanho);
console.log(nomeLetraA);
