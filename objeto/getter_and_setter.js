const sequencia = {
  _valor: 1, // converção de Variavel privada
  get valor() {
    return this._valor++
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000; // chama o set
console.log(sequencia.valor, sequencia.valor)
