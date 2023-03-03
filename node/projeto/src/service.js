const port = 3003;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/produtos", (req, res, next) => {
  console.log("Middleware 1...");
  next()
});

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
});

app.get("/produto/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
});

app.post("/produtos", (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    name: req.body.name,
    preco: req.body.preco
  });
  res.send(produto);
});

app.put("/produtos/:id", (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    name: req.body.name,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.delete("/produtos/:id", (req, res) => {
  const produto = bancoDeDados.excluirProduto(
    req.params.id,
  );
  res.send(produto);
})

app.listen(port, (err) => {
  if (err) return Error;

  console.log(`Servidor executado na porta ${port}.`);
})
