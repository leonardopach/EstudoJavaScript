const contadorA = require("./instanciaUnica")();
const contadorB = require("./instanciaUnica.js")();

const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor);
