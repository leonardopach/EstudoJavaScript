const objetA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "Valor a",
  chaveB: "Valor b",
};

objetA.chaveC = "Outra chave";
objetA.chaveD = "Nova chave";

console.log(objetA);
