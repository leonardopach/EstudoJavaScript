console.log(`${typeof Array}, ${typeof new Array()}, ${typeof []}`);

let aprovados = new Array("bia", "carla", "ana");
console.log(aprovados);

aprovados = ["bia", "carlos", "ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);

aprovados[3] = "pedro";
aprovados.push("silva");
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 2, "Elemento1", "Elemento2");
console.log(aprovados);
