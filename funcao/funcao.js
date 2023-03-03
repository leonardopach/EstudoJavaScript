function func1() { }

const func2 = function() { }


const array = [function(a, b) { return a + b }, func1, func2];

console.log(array[0](10, 4))

const obj = {};
obj.falar = function() { return 'Opa' };
console.log(obj.falar());


function run(fun) {
  fun();
}

run(function() { console.log('executando...') });


function soma(a, b) {
  return function(c) {
    console.log(a + b + c);
  }
}
soma(10, 2)(5);

