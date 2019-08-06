let n = 123457;
sumOfDigits = (n) => {

    if (!Number.isInteger(n)) {
        throw new Error('n is not an integer value');
    }
    let sum = 0;

    for (let i = 0; n > 1; i++) {
        let test = n % 10;
        sum += Math.floor(test);
        n /= 10;
    }

    return sum;
}
console.log(sumOfDigits(n));

module.exports = sumOfDigits;