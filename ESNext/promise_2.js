const gerarNumerosEntre = (min, max, tempo) => {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    setTimeout(function() {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio)

    }, tempo)
  })
}

const gerarVariosNumeros = () => {
  return Promise.all([
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 2000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 5000),
  ])
}

console.time("promise");
gerarVariosNumeros()
  .then(numero => console.log(numero))
  .then(() => {
    console.timeEnd("promise");
  });


const funcionarOuNao = (valor, chanceErro) => {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro")
    } else {
      resolve(valor)
    }
  })
}

funcionarOuNao('testando...', 0.9)
  .then(v => console.log(`Valor: ${v}`))
  .catch(err => console.log(`Erro: ${err}`))
