var N = 1000;

let perfectNumber = (N) => {
        let perfectNumbersArr = [];
        for (let i = 1; i < N; i++) {
                let sum = 0;
                for (let n = 1; n < i; n++) {
                        if (i % n === 0)
                                sum = sum + n;
                }
                if (i === sum) {
                        perfectNumbersArr.push(i);
                }
        }
        return perfectNumbersArr;
}

console.log(perfectNumber(N));

module.exports = perfectNumber;