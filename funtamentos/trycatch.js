function tratarErroElancar(erro) {
  // throw new Error("....");
  // throw 10;
  // throw "message";
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}
function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroElancar(e);
  }
}

const obj = { nome: "Leonardo" };
imprimirNome(obj);
