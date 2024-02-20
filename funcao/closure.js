// Closure e o escopo criado quando a funcao e dreclarada
// Esse escopo permite a funcao acessar e manipular variaveis externar a funcoes

const x = 'Global'

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
