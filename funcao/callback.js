const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(funcionario) {
    console.log(funcionario)
})
fabricantes.forEach((funcionario) => {
    console.log(funcionario)
})
