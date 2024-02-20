for (let letra of "leo") {
    console.log(letra);
}

const assuntosEcma = ["Map", "set", "Promisse"];

for (let i in assuntosEcma) {
    console.log(i);
}

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promisse", { abordado: false }],
]);

for (let assunto of assuntosMap) {
    console.log(assunto);
}
for (let chave of assuntosMap.keys()) {
    console.log(chave);
}
for (let value of assuntosMap.values()) {
    console.log(value);
}
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}
