class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    // Metodo de instancia
    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo de estatico
    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(ControleRemoto.soma(2, 1));
console.log(controle1);
