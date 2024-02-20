const pessoa = {
  nome: "Leonardo",
  sobrenome: "Pacheco",
  idade: 26,
};

console.log(pessoa);

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,

    fala() {
      return `Ola ${this.nome} ${this.sobrenome} voce esta com ${this.idade}`;
    },
  };
}

const pessoa1 = criaPessoa("Leonardo", "Pacheco", 26);
const pessoa2 = criaPessoa("Pedro", "Oliveira", 32);
console.log(pessoa1.fala());
console.log(pessoa2.fala());

const a = {
  nome: "Leonardo",
  sobrenome: "Pacheco",
};
const b = { ...a };

a.nome = "lucas";
console.log(b);
