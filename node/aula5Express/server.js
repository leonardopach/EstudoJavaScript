const express = require("express");
const routes = require("./routes");
const app = express();
const path = require("path");
const middleware = require("./src/middleware/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(middleware);
app.use(routes);

app.listen(3000, () => {
  console.log("Esta rodando na porta 3000");
});
