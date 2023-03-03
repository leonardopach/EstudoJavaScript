function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      // console.log("Executando promise...");
      resolve()
    }, tempo)
  })
}

esperarPor(2000)
  .then(esperarPor)
  .then(esperarPor)

async function executar() {
  await esperarPor(2000);
  console.log("Async/Await...");
}

executar();
