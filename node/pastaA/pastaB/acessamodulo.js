const moduloA = require("../../moduloA");
console.log(moduloA.ola);

const http = require("http");
let server = http.createServer((req, res) => {
    res.write("Bom dia");
    res.end();
});

server.on("listening", function () {
    console.log("ok, server is running");
});

server.listen(8080);
