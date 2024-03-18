// Tuple
const dadosCliente1: readonly [number, string] = [1, "leonardo"];
const dadosCliente2: [number, string, string] = [1, "leonardo", "Pacheco"];
const dadosCliente3: [number, string, string?] = [1, "leonardo"];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  "leonardo",
  "pacheco",
  "dos",
];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

const array1: readonly string[] = ["leonardo", "pacheco"];
const array2: ReadonlyArray<string> = ["leonardo", "pacheco"];

console.log(array1);
console.log(array2);
