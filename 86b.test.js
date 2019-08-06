const sumOfDigits = require('./86b.js');
const assert = require('assert');


describe("sumOfDigits", function () {

    it("Правильно находить суму цифр в числі", function () {
        assert.equal(sumOfDigits(123457), 22);
        assert.equal(sumOfDigits(23), 5);
        assert.equal(sumOfDigits(1534), 13);
    });

});
