// Funcao em JS e First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function () {};

// Armazenar em um array
const array = [
    function (a, b) {
        return a + b;
    },
    fun1,
    fun2,
];

console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};

obj.falar = function () {
    return "opa";
};
console.log(obj.falar());

// Passar funcao como param
function run(fun) {
    fun();
}

run(function () {
    console.log("executando...");
});

// Uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    };
}

soma(5, 2)(3);
