let dobro = function(a) {
    return 2 * a
}

console.log(dobro(2))

dobro = (a) => {
    return 2 * a
}
console.log(dobro(2))

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() {
    return 'Ola'
}

ola = () => 'ola'
ola = _ => 'ola'
console.log(ola())
