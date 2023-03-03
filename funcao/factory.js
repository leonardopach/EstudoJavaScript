function criarPessoa() {
  return {
    nome: 'Leonardo',
    sobrenome: 'Pacheco',
  }
}

console.log(criarPessoa());

function Pessoa(nome, idade, peso) {
  return {
    nome,
    idade,
    peso,
  }
}

console.log(Pessoa("leonardo", 24, 105.2));

const prod1 = {
  nome: "caderno",
  preco: 45
}

const CriarPessoa2 = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = CriarPessoa2("Leonardo");
p2.falar();
