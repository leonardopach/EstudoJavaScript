function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao1(a = 0, b = 0) {
    console.log(a, b);
}

funcao1(20);

function funcao2({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: "Leonardo", sobrenome: "Pacheco", idade: 20 };
funcao2(obj);

function funcao3([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao3(["Leonardo", "Pacheco", 26]);

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "*") acumulador *= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "%") acumulador %= numero;
    }
    return acumulador;
}
console.log(conta("-", 0, 20, 30, 40, 50));
console.log(conta("+", 0, 20, 30, 40, 50));
console.log(conta("*", 1, 20, 30, 40, 50));
console.log(conta("/", 1, 20, 30, 40, 50));
console.log(conta("%", 1, 20, 30, 40, 50));
