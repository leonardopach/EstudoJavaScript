console.log(typeof Array);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['bia', 'carlos', 'ana'];
console.log(aprovados[0]);

aprovados[3] = 'pedro';
aprovados.push('gabriel');
console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[0];
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 0, 'Elemento1', 'Elemento2');
console.log(aprovados);
