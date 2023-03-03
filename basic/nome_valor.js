const saudacao = 'Opa'; // contexto léxico

function exec() {
  const saudacao = 'Fala';
  return saudacao;
}

const client = {
  nome: 'Leonardo',
  idade: 24,
  peso: 105.5,
  endereco: {
    logradouro: 'Rua muito legal',
    numero: 123
  }
}

console.log(saudacao);
console.log(exec());
console.log(client);
