// Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Notacao literal
const nome = "nome";
const pessoa = {
    nome,
    ola() {
        return "ola";
    },
};

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return "Au au";
    }
}

console.log(new Cachorro().falar());
