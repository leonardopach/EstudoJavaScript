function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve();
        }, tempo);
    });
}

// esperarPor(2000)
//     .then(() => console.log("Executando promise 1..."))
//     .then(esperarPor)
//     .then(() => console.log("Executando promise 2..."))
//     .then(esperarPor)
//     .then(() => console.log("Executando promise 3..."))
//     .then(esperarPor);

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 2000);
    });
}
async function executar() {
    let valor = await retornarValor();
    await esperarPor(1500).then(() =>
        console.log(`Async/Await ${valor + 1}...`)
    );
    await esperarPor(1500).then(() =>
        console.log(`Async/Await ${valor + 2}...`)
    );
    await esperarPor(1500).then(() =>
        console.log(`Async/Await ${valor + 3}...`)
    );
    return valor + 3;
}

executar().then(console.log);
