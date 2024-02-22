function criarPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
        },

        fala(assunto) {
            return `${this.nome} esta ${assunto}`;
        },
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / this.altura ** 2;
            return indice.toFixed(2);
        },
    };
}

const p1 = criarPessoa("Leonardo", "Pacheco", 1.83, 107);
console.log(p1.fala("Estudando sobre JS"));
console.log(p1.imc);
p1.nomeCompleto = "Leonardo Pacheco dos Santos";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
