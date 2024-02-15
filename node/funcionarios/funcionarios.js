const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then(res => {
    const funcionarios = res.data;
    const chines = e => e.pais === "China";
    const mulheres = e => e.genero === "M";
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual;
    };
    console.log(
        funcionarios.filter(chines).filter(mulheres).reduce(menorSalario)
    );
});
