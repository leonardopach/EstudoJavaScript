const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200,
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);


Object.prototype.attr0 = 'Z';
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr0);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrarii = {
  modelo: 'F40',
  velMax: 324
}

const volvoo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}
Object.setPrototypeOf(ferrarii, carro);
Object.setPrototypeOf(volvoo, carro);

console.log(ferrarii);
volvoo.acelerarMais(100);
console.log(volvoo.status());

ferrarii.acelerarMais(300);
console.log(ferrarii.status());
