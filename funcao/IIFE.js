(function (idade, peso, altura) {
    console.log("Hello world");

    const sobrenome = "Pacheco";
    function criarNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criarNome("Leonardo"));
    }

    falaNome();
    console.log(idade, peso, altura);
})(26, 107, 1.8);
