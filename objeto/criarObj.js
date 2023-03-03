// criando Objt
const obj1 = {};
console.log(obj1);


console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// funções construtoras
function Produto(nome, preco, desconto) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto)
  }
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario("João", 7980, 4);
console.log(f1);
console.log(f1.getSalario());

// object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);
