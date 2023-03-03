function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);


MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
  console.log(`Bom dia! Meu nome é ${this.nome}`);
}

obj1.falar();

obj2.nome = "Leonardo";
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function() {
  return this[0];
}

console.log([1, 2, 3, 4, 5, 6].first());
