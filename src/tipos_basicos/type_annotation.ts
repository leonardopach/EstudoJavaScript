const nome: string = "leonardo";
const idade: number = 10; //
const adulto: boolean = true;
const simbolo: symbol = Symbol("qualquer-symbol");
// let big: biginit = 10n;
console.log(nome, idade, adulto, simbolo);

//arrays
const arrayOfNumbers: Array<number> = [1, 2, 3, 4];
const arrayOfNumbers2: number[] = [1, 2, 3, 4];
const arrayOfString: Array<string> = ["one", "two", "tree"];
const arrayOfString2: string[] = ["one", "two", "tree"];

console.log(arrayOfNumbers, arrayOfString2, arrayOfNumbers2, arrayOfString);

// Objetos
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 26,
  nome: "leonardo",
};

console.log(pessoa.nome);

// Funcoes
function soma(x: number, y: number): number {
  return x + y;
}
const result = soma(2, 2);
console.log(result);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
console.log(soma2(2, 3));
