class Pessoa {
    constructor(nome, sobrenome) {
        // Atributos ou metodos privados
        const ID = 1234;
        const metodosInterno = function () {
            console.log("Metodos interno");
        };

        // Atributos ou metodos publicos
        this.nome = nome;
        this.sobrenome = sobrenome;

        this.metodo = function () {
            console.log(this.nome, ID);
            metodosInterno();
        };
    }
}

const p1 = new Pessoa("Leonardo", "Pacheco");
const p2 = new Pessoa("Maria", "Oliveira");

console.log(p2.sobrenome);
p2.metodo();
