const name = "Leonardo";
const concatenacao = "ola " + name + "!";
const template = `
    Olá
    ${name}!
`;

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);

const up = s => s.toUpperCase();

console.log(`Ei... ${up('Cuidado')}!`);
