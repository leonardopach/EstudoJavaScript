try {
    console.log(naoExisto);
} catch (e) {
    console.log(e.message);
}

function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x e y precisam ser numeros");
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma("1", 2));
} catch (err) {
    console.log(err.message);
}
function retonaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instancia de Date");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
}

try {
    const hora = retonaHora();
    console.log(hora);
} catch (e) {
} finally {
    console.log("Tenha um bom dia");
}
