const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro: "rua ABC",
        numero: 1000,
    },
};

const { nome, idade } = pessoa;

console.log(nome, idade);

const {
    endereco: { logradouro, numero },
} = pessoa;

console.log(logradouro, numero);

console.log();
