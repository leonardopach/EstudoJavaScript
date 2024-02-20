Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0];
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i]);
    }
    return acumulador;
};
const alunos = [
    { nome: "leonardo", nota: 7.5, bolsista: false },
    { nome: "pedro", nota: 8.5, bolsista: false },
    { nome: "Lucas", nota: 9.5, bolsista: true },
    { nome: "Silva", nota: 10.0, bolsista: false },
    { nome: "Gabriel", nota: 4.6, bolsista: true },
];

const resultado = alunos
    .map(a => a.nota)
    .reduce2((acumulador, atual) => {
        return acumulador + atual;
    }, 0);
console.log(resultado);

const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2((a, at) => a + at));
