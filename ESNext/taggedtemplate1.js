// tagged templates
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return "Outra String";
}

const aluno = "gui";
const situacao = "aprovado";
console.log(tag`${aluno} esta ${situacao}`);
