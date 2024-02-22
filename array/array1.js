// const nomes = ["Eduardo", "Maria", "Joana"];
const nomes = new Array("Eduardo", "Maria", "Joana", "Lucas", "Pedro");
const novo = [...nomes];
delete nomes[2];
console.log(nomes);
console.log(novo);
console.log(novo.length);

const removido = nomes.pop();
nomes.shift();
nomes.push("Joao");
const novo2 = novo.slice(1, 4);
console.log(removido);
console.log(nomes);
console.log(novo2);

const nome = "Luiz Otavio Miranda";
const nomes1 = nome.split(" ");
const nomes2 = nomes1.join(" ");
console.log(nomes1);
console.log(nomes2);
