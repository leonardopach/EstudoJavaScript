const obj1 = {};
console.log(obj1);

console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    };
}

const p1 = new Produto("caneta", 7.99, 0.15);
const p2 = new Produto("notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// funcao factory
function criarFuncionario(nome, salariobase, faltas) {
    return {
        nome,
        salariobase,
        faltas,
        getSalario() {
            return (salariobase / 30) * (30 - faltas);
        },
    };
}

const f1 = criarFuncionario("joao", 7980, 4);
const f2 = criarFuncionario("maria", 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

const fromJSON = JSON.parse('{"info": "sou um JSON"}');
console.log(fromJSON.info);
