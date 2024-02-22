function criaCalculadora() {
    return {
        display: document.querySelector(".display"),

        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) {
                    this.realizarConta();
                }
            });
        },

        realizarConta() {
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
        },

        clearDisplay() {
            this.display.value = "";
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickBotoes() {
            document.addEventListener("click", (e) => {
                const el = e.target;

                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                if (el.classList.contains("btn-del")) {
                    this.apagaUm();
                }
                if (el.classList.contains("btn-eq")) {
                    this.realizarConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
