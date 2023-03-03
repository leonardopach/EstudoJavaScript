// Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


const nome = "Carla";
const pessoa = {
  nome,
  ola() {
    return "Ola"
  },
  person: {
    idade: 25
  }
}

console.log(pessoa.nome);
console.log(pessoa.ola());
console.log(pessoa.person.idade);

// class
class Animal { };
class Cachorro extends Animal {
  falar() {
    return "Eai man";
  }
}

console.log(new Cachorro().falar());
