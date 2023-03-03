function Carro(velocidadeMaxima = 200, delta = 5) {
  let velocidadeAtual = 0;

  this.acelerar = function() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  }

  this.getVelocidadeAtual = function() {
    return velocidadeAtual;
  }
  // publico -> this
  // privado -> const, let
}


const uno = new Carro;
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();

console.log(ferrari.getVelocidadeAtual());
