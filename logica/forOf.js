const nome = "Leonardo Pacheco";
for (let i of nome) {
    console.log(i);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero % 2 == 0) {
        continue;
    }
    console.log(numero);
}
