const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "test.json");
const escrever = require("./escreverFile");
const ler = require("./lerFile");

const pessoas = [
  { nome: "leonardo" },
  { nome: "Lucas" },
  { nome: "Pedro" },
  { nome: "Gabriel" },
  { idade: 26 },
];

const json = JSON.stringify(pessoas, "", 2);
escrever(caminhoArquivo, json);

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val));
}
lerArquivo(caminhoArquivo);
