function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    } else {
        console.log(`Reprovado ${nota}`);
    }
}

soBoaNoticia(10);
soBoaNoticia(5);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`E verdade... ${valor}`);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo({});
