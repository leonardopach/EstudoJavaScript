const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then(response => {
  const funcionarios = response.data
    .filter(mulher => mulher.pais === "China" && mulher.genero === "F")
    .reduce((func, funcAtual) => {
      return func.salario < funcAtual.salario ? func : funcAtual;
    });
  console.log(funcionarios);
});
