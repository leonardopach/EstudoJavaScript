const pessoa = {
    saudacao: 'Bom dia',
    gritando: 'BOM DIA',
    falar() {
        console.log(this.saudacao)
    },
    gritar() {
        console.log(this.gritando)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.gritar.bind(pessoa)
falarDePessoa()
