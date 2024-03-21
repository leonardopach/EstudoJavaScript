const imprimirResultado = function (nota) {
    if (typeof nota !== "number") return;
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
};

imprimirResultado(10);
imprimirResultado(8);
imprimirResultado(5);
imprimirResultado("Epa");
