// let tem escopode block {...bloco}
// var so tem escopo de funcao

let nome = "luiz";
var nome2 = "luiz";

if (true) {
    let nome2 = "Rogerio";

    if (true) {
        var nome2 = "Ronaldo";
        let nome = "outra coisa";
    }
}

console.log(nome, nome2);
