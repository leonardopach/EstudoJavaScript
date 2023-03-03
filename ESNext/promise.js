const { parseInt } = require("lodash");

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  })
}

const umObjeto = {
  name: "Leonardo",
  idade: 25
};
falarDepoisDe(3, umObjeto)
  // .then(frase => frase.concat("?!?"))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e));


let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa({
    x: 3,
    y: 4
  });
});

p
  .then(valor => valor.x)
  .then(valor => valor.y);

p.then((resolve, reject) => {
  console.log(resolve)
})

function esperarPor(tempo = 200) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Executando promise...");
      resolve("Vishhhh")
    }, tempo)
  })
}
esperarPor(3000).then(texto => console.log(texto));
esperarPor().then(() => esperarPor()).then(esperarPor());

const gerarNumerosEntre = (min, max) => {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    resolve(aleatorio)
  })
}

gerarNumerosEntre(10, 30)
  .then(num => num * 10)
  .then(numx10 => `O número gerado foi: ${numx10}`)
  .then(console.log);
