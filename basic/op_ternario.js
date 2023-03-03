const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(10));
console.log(resultado(6.9));

let pessoa = { nome: 'Ana', falar: function() { return `Eu sou ${this.nome}` } };

console.log(pessoa.falar());
