const array = ["leonardo", "Pedro", "Lucas"];
const [nome1, nome2, nome3] = array;

console.log(nome1, nome2, nome3);
console.log(nome1);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, c, d, ...resto] = numeros;

console.log(a, b, c, d);
console.log(resto);

const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const [lista1, lista2, lista3] = numeros2;

console.log(lista3[2]);

const pessoa = {
    nome: "Leonardo",
    sobrenome: "Pacheco",
    idade: 30,
    endereco: {
        rua: "Av Brasil",
        numero: 320,
    },
};

const {
    nome: outroNome,
    sobrenome = "",
    endereco: { rua, numero },
    endereco,
} = pessoa;
console.log(endereco, outroNome, sobrenome, rua, numero);
