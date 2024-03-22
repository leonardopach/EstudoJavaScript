let romanToInt = function (s) {
    let tamanho = s.toUpperCase().split("");
    if ((tamanho === "I" && tamanho.length > 1) || tamanho.length <= 4) {
        console.log(tamanho.length);
    }
};

romanToInt("iiiar");
