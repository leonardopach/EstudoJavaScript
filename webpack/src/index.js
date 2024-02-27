import multi, { Pessoa, idade, nome, sobrenome, soma } from "./module1";

console.log(nome, sobrenome, idade);
console.log(soma(2, 4));

const pessoa1 = new Pessoa("Leonardo", "Pacheco");
console.log(pessoa1);
console.log(multi(2, 5));
