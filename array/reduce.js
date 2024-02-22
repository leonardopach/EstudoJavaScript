const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = numeros.reduce((cont, acum) => {
    return cont + acum;
}, 0);

const total = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

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
const maisVelha = pessoas.reduce((acumulador, valor) =>
    acumulador.idade > valor.idade ? acumulador : valor
);
console.log(total);
console.log(soma);
console.log(maisVelha);
