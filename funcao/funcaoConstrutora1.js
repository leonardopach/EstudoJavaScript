function Pessoa(nome) {
    this.nome = nome;

    this.falar = function () {
        console.log(`Meu nome e ${nome}`);
    };
}

const p1 = new Pessoa("Leonardo");
p1.falar();
console.log(p1.nome);
