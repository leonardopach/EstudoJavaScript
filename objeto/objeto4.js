function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra chave
        configurable: true, // configuravel
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor != "number") {
                throw new TypeError("Need be a number");
            }
            estoque = valor;
        },
    });
}

const p1 = new Produto("Camisa", 24, 3);
console.log(p1);
p1.estoque = 400;
console.log(p1.estoque);
