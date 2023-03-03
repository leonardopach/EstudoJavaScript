const produto = new Object;
produto.nome = "Cadeira";
produto['marca do produto'] = "generica";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'leonardo',
    idade: 24,
    endereco: {
      logradouro: 'Rua abc',
      numero: 123
    }
  },
  condutores: [{
    nome: "junior",
    idade: 19
  }, {
    nome: "ana",
    idade: 42
  }],
  calcularValorSeguro: function() {

  }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av gigante';

console.log(carro);
delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
