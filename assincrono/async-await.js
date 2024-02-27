function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject("Bad valeu");
                return;
            }
            resolve(msg);
        }, tempo);
    });
}

async function executa() {
    try {
        const fase1 = await esperaAi("Fase 1", rand());
        console.log(fase1);
        const fase2 = await esperaAi("Fase 2", rand());
        console.log(fase2);
        const fase3 = await esperaAi(2, rand());
        console.log(fase3);
    } catch (error) {
        console.log(error);
    }
}

executa();
