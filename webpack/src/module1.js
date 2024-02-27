export const nome = "Leonardo";
export const sobrenome = "Pacheco";
export const idade = 26;

export function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export default (x, y) => x * y;
