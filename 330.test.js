const perfectNumber = require('./330.js');
const assert = require('assert');


describe("perfectNumber", function () {

    it("Правильно знаходить всі досконалі числа до N", function () {
        perfectNumber(1000).map((num, index) => {
            assert.equal(perfectNumber(1000)[index], num);
        })
    });

});
