function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") {
            reject("Bad valeu");
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, tempo);
    });
}
const promises = [
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 500),
    esperaAi("Promise 3", 1000),
    // esperaAi(12, 1000),
];

// Promise.all(promises)
//     .then((e) => console.log(e))
//     .catch((e) => console.log(e));

Promise.race(promises)
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
