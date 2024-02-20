const alunos = ["Luiz", "Maria", "Bianca"];

alunos[2] = "Leonardo";
console.log(alunos[alunos.length - 1]);

alunos[alunos.length] = "Lucas";
alunos[alunos.length] = "Pedro";
alunos.push("Gabriel");

alunos.unshift("Luiza");

delete alunos[4];
console.log(alunos);
console.log(alunos.slice(0, 4));
console.log(alunos instanceof Array);

const a = [1, 2, 3];
const b = [...a];

a.push(4);
console.log(a, b);
