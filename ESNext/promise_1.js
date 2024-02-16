let a = 1;
// console.log(a);

new Promise(function (cumprirPromessa) {
    cumprirPromessa(["Ana", "Bia", "Carlos", "Daniel"]);
})
    .then(valor => {
        console.log(valor);
        return valor;
    })
    .then(primeiro => primeiro[0])
    .then(letra => letra.toUpperCase())
    .then(console.log);
