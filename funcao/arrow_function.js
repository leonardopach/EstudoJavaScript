let dobro = function(a) {
  return 2 * a
};

console.log(dobro(2));

dobro = (a) => {
  return 2 * a
};
console.log(dobro(3));

dobro = a => 2 * a;
console.log(dobro(4));


let ola = function() {
  return "ola";
};
console.log(ola());

ola = () => "olaa";
console.log(ola());

function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade)
  }, 1000);
}

// new Pessoa;

let comparaComThis = function(param) {
  console.log(this === param);

}
comparaComThis(global);
const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let compararComThisArrow = (param) => {
  console.log(this === param);
}

compararComThisArrow(global);
