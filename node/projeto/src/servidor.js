const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDedados");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
    console.log("Middleware 1...");
    next();
});

app.get("/produtos", (req, res) => {
    res.send(bancoDeDados.getProdutos());
});

app.get("/produtos/:id", (req, res) => {
    let id = req.params.id;
    res.send(bancoDeDados.getProdutos(id));
});

app.post("/produtos", (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto);
});

app.put("/produtos/:id", (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto);
});

app.delete("/produtos/:id", (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);

    res.send(produto);
});
// app.use((req, res, next) => {
//     res.send({ nome: "Caderno", preco: 2223.5 });
// });

app.listen(porta, () => {
    console.log(`Servidor executando na porta:${porta}`);
});
