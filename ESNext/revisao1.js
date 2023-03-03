// let e const
{
  var a = 2;
  let b = 3;
  console.log(b);
}

console.log(a);

// template string
const produto = "iPad";
console.log(`${produto} e caro`);

// Destructuring
const [l, e, ...tras] = "Coder";

console.log(l, e, tras);

const [x, , y] = [1, 2, 3];

console.log(x, y);

const { idade: as, nome } = { nome: "Leonardo", idade: 25 };

console.log(as, nome);
