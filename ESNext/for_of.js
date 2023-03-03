for (let letras of "Leo") {
  console.log(letras);
}

const assuntosEcma = ["Map", "Set", "Promise"];

for (let i in assuntosEcma) {
  console.log(i)
}

for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
])

for (let maps of assuntosMap) {
  console.log(maps)
}
for (let chaves of assuntosMap.keys()) {
  console.log(chaves);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}
