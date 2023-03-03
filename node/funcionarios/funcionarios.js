const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");


const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === "F";
const menorSalario = (acc, atual) => {
  return acc.salario < atual.salario ? acc : atual;
}

axios.get(url).then(res => {
  const funcionarios = res.data;

  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(func);
})
