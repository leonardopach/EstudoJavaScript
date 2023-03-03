console.log(typeof console);
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';

console.log(obj1);

function Obj(nome) {
  this.nome = nome;
  this.exec = function() {
    console.log("Exec...")
  }
}

const obj2 = new Obj("Caidera");
const obj3 = new Obj("VideoGame");

console.log(obj2);
console.log(obj3);

obj2.exec();
