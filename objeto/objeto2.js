// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
    };
}

const p1 = criaPessoa("Leonardo", "Pacheco");
console.log(p1.nomeCompleto);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

const p2 = new Pessoa("Leonardo", "Pacheco");
console.log(p2);
