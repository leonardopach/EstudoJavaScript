const prod1 = {};
prod1.nome = "Celular";
prod1.preco = 4000.0;
prod1["Desconto"] = 0.4;

console.log(prod1);

const prod2 = {
  nome: "Camisa",
  preco: 79.9,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2,
    },
  },
};

console.log(prod2["obj"]);
console.log(prod2["obj"]["obj"]);
