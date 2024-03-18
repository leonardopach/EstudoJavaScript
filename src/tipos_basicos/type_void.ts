function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome: "leonardo",
  sobrenome: "Pacheco",

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno("leonardo", "Pacheco");
pessoa.exibirNome();

export { pessoa };
