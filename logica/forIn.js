const frutas = ["Pera", "Maca", "uva"];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: "leonardo",
    sobrenome: "Pacheco",
    idade: 26,
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
