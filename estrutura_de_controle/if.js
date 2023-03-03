function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Você passou ", nota);
  } else {
    console.log("Você reprovou ", nota);
  }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

Number.prototype.entre = function(inicio, fim) {
  return this >= inicio && this <= fim;
}

const imprimirResultadp = function(nota) {
  if (nota.entre(9, 10)) {
    console.log("quadro de honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("recuperação");
  } else if (nota.entre(0, 3.99)) {
    console.log("reprovado");
  } else {
    console.log("vixe!!!");
  }
}

imprimirResultadp(9);
