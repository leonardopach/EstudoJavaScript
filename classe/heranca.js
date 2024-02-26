class Eletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} ja ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} ja esta desligado`);
            return;
        }
        this.ligado = false;
    }
}
class Smartphone extends Eletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const c1 = new Eletronico("celular");
const sm1 = new Smartphone("celular2", "preto");

c1.ligar();
sm1.ligar();

console.log(c1);
console.log(sm1);
