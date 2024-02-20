// function first-class object
// hifht-order function


//criar de forma literal
function fun1() { }

// Armezenar em uma variavel
const fun2 = function() { }


// armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 4))


// armazenarem um atributo de objecto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

// para funcao como param
function run(fun) {
    fun()
}

run(function() { console.log('Executando') })

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 5)
cincoMais(4)
