const aprovados = ["leonardo", "pedro", "lucas", "raquel"];

aprovados.forEach((nome, indice) => {
    console.log(`${indice} - ${nome}`);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovado = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovado);
