const x = [7.7, 8.9, 6.3, 8.2];
console.log(x[0], x[3]);
console.log(x[4]);

x[5] = 10;
console.log(x);
console.log(x.length);


x.push({ id: 3 }, false, null, 'teste');
console.log(x);


console.log(x.pop());
console.log(x);
delete x[0];
console.log(x);
