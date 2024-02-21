let relogio = document.querySelector(".relogio");
let iniciar = document.querySelector(".iniciar");
let pausa = document.querySelector(".pausar");
let zerar = document.querySelector(".zerar");
let contador = 0;
let times;

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC",
    });
}

function iniciarRelogio() {
    times = setInterval(() => {
        contador++;
        relogio.innerHTML = `${getTimeFromSeconds(contador)}`;
    }, 1000);
}

iniciar.addEventListener("click", () => {
    clearInterval(times);
    iniciarRelogio();
});

pausa.addEventListener("click", () => {
    clearInterval(times);
});

zerar.addEventListener("click", () => {
    clearInterval(times);
    relogio.innerHTML = `00:00:00`;
    contador = 0;
});
