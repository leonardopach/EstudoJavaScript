const express = require("express");
const app = express();
const porta = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
<form action="/" method="POST">
Nome : <input type="text" name="nome">
<button>Enviar</button>
</form>
`);
});

app.get("/teste/:idUsuario?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params.idUsuario);
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que voce me enviou foi: ${req.body.nome}`);
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(porta, (error) => {
  if (error) return;
  console.log(`Link http://localhost:${porta}`);
  console.log(`O servidor esta rodando na porta 3000`);
});
