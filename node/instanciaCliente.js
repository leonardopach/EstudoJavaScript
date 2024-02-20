const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

const contadorC = require("./InstanciaNova")();
const contadorD = require("./InstanciaNova")();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
