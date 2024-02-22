const nomes = ["Maria", "Joao", "Eduardo", "Gabriel", "julia"];

// nomes.splice(indice, delete, elem1, elem2, elem3)

const removidos = nomes.splice(-2, Number.MAX_VALUE);
nomes.splice(4, 1);
nomes.splice(3, 0, "Leonardo", "Otavio");
console.log(nomes, removidos);
