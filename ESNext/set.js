const times = new Set();
times.add("Vasco");
times.add("Sao Paulo").add("Palmeiras").add("Corinthias");
times.add("Flamengo");

console.log(times);
console.log(times.size);
console.log(times.has("Vasco"));
console.log(times.has("vasco"));
times.delete("Flamengo");
console.log(times.has("Flamengo"));

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
