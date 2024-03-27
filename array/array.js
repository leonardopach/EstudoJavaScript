console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);

aprovados[3] = "Paulo";
aprovados.push("Abia");
console.log(aprovados);
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.sort());

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

console.log();
aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 0, "Elemento novo", "Gabriel");
console.log(aprovados);
