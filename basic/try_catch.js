function tratarErroElancar(err) {
  // throw new Error("Ocorreu um erro");
  throw {
    nome: err.name,
    msg: err.message,
    date: new Date
  }
}
function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!!');
  } catch (e) {
    tratarErroElancar(e);
  }

}

const obj = { name: 'Leonardo' }

imprimirNome(obj);
