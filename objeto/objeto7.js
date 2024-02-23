const objA = {
    chaveA: "A",
    // __proto__: Object.prototype
};

const objB = {
    chaveB: "B",
    // __proto__: ObjA
};

Object.setPrototypeOf(objB, objA);

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
Produto.prototype.desconto = function (percentual = 0) {
    this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual = 0) {
    this.preco = this.preco + this.preco * (percentual / 100);
};

const prod1 = new Produto("caneca", 100);
prod1.desconto(10);
prod1.aumento(100);
console.log(prod1);

const p2 = {
    nome: "Lapis",
    preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento();
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 23,
    },
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "Lapizeira",
    },
});
