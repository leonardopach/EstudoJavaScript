function triangulos(x, y, z) {
  if (x == y && x == z) {
    console.log("Triangulo  Equilátero");
  } else if (x == y && x != z) {
    console.log("Triangulo Isósceles");
  } else if (x != y && x != z) {
    console.log("Triangulo  Escaleno");
  }

}

triangulos(10, 10, 10);
triangulos(10, 10, 1);
triangulos(10, 0, 1);
