const countNums = require('./86a.js');
const assert = require('assert');


describe("countNums", function () {

    it("Правильно находить кількість цифр в числі", function () {
        assert.equal(countNums(1234), 4);
        assert.equal(countNums(23), 2);
        assert.equal(countNums(153436362325), 12);
    });

});
