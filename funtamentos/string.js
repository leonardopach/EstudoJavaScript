const nome = "leonardo";

console.log(nome.charAt(4));
console.log(nome.charAt(10));
console.log(nome.charCodeAt(3));
console.log(nome.indexOf("n"));

console.log(nome.substring(1));
console.log(nome.substring(0, 4));

console.log("nome ".concat(nome).concat("!"));
console.log(nome.replace("a", "o"));
console.log(nome.replace(/\w/g, "o"));

console.log("Ana,Maria,Pedro".split(/,/));
console.log("Ana,Maria,Pedro".split(/./));
console.log("Ana,Maria,Pedro".split(","));
