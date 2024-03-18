enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

enum Cores {
  ROXO = "ROXO",
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores[0]);
console.log(Cores["ROXO"]);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
