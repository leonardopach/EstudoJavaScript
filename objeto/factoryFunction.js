const falar = {
    falar() {
        return `${this.nome} ${this.sobrenome} esta falando`;
    },
};

const comer = {
    comer() {
        return `${this.nome} ${this.sobrenome} esta comendo`;
    },
};

const pessoaPrototype = Object.assign({}, falar, comer);
function criarPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
}

const pessoa1 = criarPessoa("leonardo", "pacheco");
console.log(pessoa1.falar());
console.log(pessoa1);
