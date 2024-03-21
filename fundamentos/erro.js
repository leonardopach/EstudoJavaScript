function tratarErroELancar(erro) {
    // throw new Error("Temos um erro aqui meu parca");
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date(),
    };
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!!");
    } catch (e) {
        tratarErroELancar(e);
    }
}
const obj = { name: "Roberto" };
imprimirNomeGritado(obj);
