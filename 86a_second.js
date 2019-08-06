let n = 12356;
if (!Number.isInteger(n)) {
    throw new Error('n is not an integer value');
}
let i;
for (i = 0; n > 1; i++) {
    n /= 10;
}

console.log('Count of digits: ', i);