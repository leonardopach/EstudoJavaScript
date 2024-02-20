const produto = new Object();
produto.nome = "cadeira";
produto["marca do produto"] = "generica";
produto.preco = 220;

console.log(produto);

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: " Raul",
        idade: 56,
        endereco: {
            logradouro: "rua Abc",
            numero: 123,
        },
    },

    condutores: [
        {
            nome: "junior",
            idade: 19,
        },
        {
            nome: "ana",
            idade: 42,
        },
    ],
    calcularValorSeguro: function () {},
};

carro.proprietario.endereco.numero = 1000;
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
