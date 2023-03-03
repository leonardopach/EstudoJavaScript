class Lancamento {
  constructor(nome = "generico", valor = 0) {
    this.nome = nome;
    this.valor = valor;

  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = []
  }

  addLanchamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l));

  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor;

    })

    return valorConsolidado;
  }
}

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('luz', 220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLanchamentos(salario, contaDeLuz);
console.log(contas.sumario());

class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super('Pacheco', 'QA');
  }
}

const filho = new Filho;
console.log(filho);
