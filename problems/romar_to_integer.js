let romanToInt = function (s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let upper = s.toUpperCase();
        let currentValue = romanNumerals[upper[i]];
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }

    return total;
};
console.log(romanToInt("iIi"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
