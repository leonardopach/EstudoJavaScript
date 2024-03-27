Array.prototype.forEach2 = function (calllback) {
    for (let i = 0; i < this.length; i++) {
        calllback(this[i], i, this);
    }
};

const nomes = ["leonardo", "pedro", "lucas"];

nomes.forEach2((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`);
});
