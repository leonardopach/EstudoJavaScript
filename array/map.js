const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const duplo = numeros.map((e) => e * 2);
const tripla = numeros.map((e) => e * 3);

console.log(duplo);
console.log(tripla);

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

const nomes = pessoas.map((e) => e.nome);
const idade = pessoas.map((e) => ({ idade: e.idade }));
const comId = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(nomes);
console.log(idade);
console.log(comId);
console.log(pessoas);
