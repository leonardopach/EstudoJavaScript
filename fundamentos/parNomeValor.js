const saudacao = "opa";

function exec() {
    const saudacao = "falaa"; // Contexto lexico
    return saudacao;
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua muito legal",
        numero: 123,
    },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
