Array.prototype.map2 = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
};
const numeros = [1, 2, 3, 4, 5, 6];

let dobro = numeros.map2((e) => e * 2);
console.log(dobro);
