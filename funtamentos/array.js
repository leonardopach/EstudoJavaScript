const valores = [1, 2, 4];

console.log(valores);
console.log(valores[0], valores[1]);
console.log(valores[10]);

console.log(valores.length);
valores[10] = 100;

console.log(valores[10]);
console.log(valores.length);

valores.push({ id: 3 }, false, null, "test");
console.log(valores);
console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);
