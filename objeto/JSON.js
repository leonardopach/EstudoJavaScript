//JSON -> Javascript object notation

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };

let convert = JSON.stringify(obj);
console.log(convert);
console.log(JSON.parse(convert));
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true,"d": {},"e": []}'));
