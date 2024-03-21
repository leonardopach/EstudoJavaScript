function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado ${nota}`);
    }
}

soBoaNoticia(7);
soBoaNoticia(8);
soBoaNoticia(4);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`E verdade ${valor}`);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
