// First-class objects
// Function expression
const souUmDado = function () {
    console.log("Sou um dado.");
};
souUmDado();
function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
};
funcaoArrow();

const obj = {
    falar: function () {
        console.log("Estou falando...");
    },
};
obj.falar();
