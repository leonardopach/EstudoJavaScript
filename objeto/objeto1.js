const pessoa = {
    nome: "leonardo",
    sobrenome: "Pacheco",
    idade: 26,
};

const chave = "nome";
console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = "leonardo";
pessoa1.sobrenome = "pacheco";
pessoa1.idade = 26;
pessoa1.falarNome = function () {
    console.log(`${this.nome} esta falando seu nome`);
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());
