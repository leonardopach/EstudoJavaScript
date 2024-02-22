class CriaCalculadora {
    constructor() {
        this.display = document.querySelector(".display");

        this.inicia = () => {
            this.clickBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = () => {
            this.display.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) {
                    this.realizarConta();
                }
            });
        };

        this.clickBotoes = () => {
            document.addEventListener("click", (evento) => {
                const el = evento.target;
                if (el.classList.contains("btn-num")) this.btnParaDisplay(el);
                if (el.classList.contains("btn-clear")) this.clearDisplay();
                if (el.classList.contains("btn-del")) this.apagaUm();
                if (el.classList.contains("btn-eq")) this.realizarConta();
            });
        };

        this.realizarConta = () => {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alerta("Conta invalida");
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                console.log(e.message);
                return;
            }
        };

        this.clearDisplay = () => (this.display.value = "");
        this.apagaUm = () =>
            (this.display.value = this.display.value.slice(0, -1));

        this.btnParaDisplay = (valor) => {
            this.display.value += valor.innerText;
            this.display.focus();
        };
    }
}

const calculadora = new CriaCalculadora();
calculadora.inicia();
