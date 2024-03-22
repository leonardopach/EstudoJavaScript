let isPalindrome = function (x) {
    let result = parseInt(x.toString().split("").reverse().join(""));
    if (x === result) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(121));
console.log(isPalindrome(122));
console.log(isPalindrome(124));
