// Array<T> - T[]
export function multiplicarArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicarArgs(1, 2, 3);
const concatenacao = concatenaString("a", "b", "c");
const upper = toUpper("a", "b", "c");

console.log(result);
console.log(concatenacao);
console.log(upper);
