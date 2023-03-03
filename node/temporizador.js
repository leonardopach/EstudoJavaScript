const schecule = require("node-schedule");

const tarefa1 = schecule.scheduleJob("*/5 * 15 * * 5", function() {
  console.log("Executando tarefa 1", new Date().getSeconds())
})

setTimeout(function() {
  tarefa1.cancel();
  console.log("Cancelando Tarefa 1");
}, 20000);

const regra = new schecule.RecurrenceRule();
regra.dayOfWeek = [new schecule.Range(1, 5)];
regra.hour = 15;
regra.second = 30;

const tarefa2 = schecule.scheduleJob(regra, function() {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
})
