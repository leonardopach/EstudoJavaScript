class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome e ${this.nome}`);
    }
}

const p1 = new Pessoa("Joao");
p1.falar();

const pessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`),
    };
};

const p2 = pessoa("Leonardo");
p2.falar();
