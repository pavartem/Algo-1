let n = 1246;

let countNums = (n) => {
    if (!Number.isInteger(n)) {
        throw new Error('n is not an integer value');
    }
    let i;
    for (i = 0; n > 1; i++) {
        n /= 10;
    }
    return i;
}
console.log(countNums(n));

module.exports = countNums;