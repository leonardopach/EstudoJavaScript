document.addEventListener("click", (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === "a") {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute("href");
        const response = await fetch(href);

        if (response.status !== 200) throw new Error("Erro 404");
        const html = await response.text();
        carregaResultado(html);
    } catch (error) {
        console.log(error);
    }
    // fetch(href)
    //     .then((res) => {
    //         if (res.status !== 200) throw new Error("Erro 404");
    //         return res.text();
    //     })
    //     .then((html) => carregaResultado(html))
    //     .catch((e) => console.log(e));
}
function carregaResultado(response) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = response;
}
