const escola = "leonardo";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("a"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(/\w/, "e"));

console.log("Ana,Maria,Pedro".split(","));
