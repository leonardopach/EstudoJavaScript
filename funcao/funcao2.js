function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase("ola")("mundo");
console.log(olaMundo);

function criarMultiplicador(multiplicador) {
    return function (n) {
        return multiplicador * n;
    };
}

console.log(criarMultiplicador(2)(2));
console.log(criarMultiplicador(2)(3));
console.log(criarMultiplicador(2)(4));
