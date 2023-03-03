const fs = require("fs");

const caminho = __dirname + "/arquivoJSON.json";

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);


// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {

  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`)
});

const config = require("./arquivoJSON.json");
console.log(config.db);

fs.readdir(__dirname, (err, arquivo) => {
  if (err) return Error;

  console.log(arquivo);
})
