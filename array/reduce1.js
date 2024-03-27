const alunos = [
    { nome: "Joao", nota: 7.3, bolsista: false },
    { nome: "Mario", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
];

let result = alunos.map((e) => e.nota).reduce((ac, atual) => ac + atual, 0);
console.log(result);
