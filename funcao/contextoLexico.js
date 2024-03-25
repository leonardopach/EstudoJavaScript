const valor = "global";

function minhaFuncao(valor) {
    console.log(valor);
}

function exec() {
    const valor = "Local";
    minhaFuncao(valor);
}

exec();
