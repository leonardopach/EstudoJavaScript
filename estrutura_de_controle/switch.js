const imprimirResultado = function(nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log('Quadro de Honra');
      break;
    case 8:
    case 7:
      console.log("aprovado");
      break;
    case 6:
    case 5:
    case 4:
      console.log("recuperação");
      break;
    case 3:
    case 0:
      console.log("reprovado");
      console.log('Quadro de Honra');
      break;
    default:
      console.log("vixe!!!");
      break;
  }
}

imprimirResultado(8);
imprimirResultado(6);
imprimirResultado(10);
