class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;

  };
  falar() {
    console.log(`Meu nome é ${this.nome} ${this.idade}`)
  }
}

const p1 = new Pessoa("Leonardo", 24);

console.log(p1.nome);
p1.falar();
