const { expect } = require("chai");

const sum = (n1, n2) => n1 + n2;


describe('sum', () => {
    it('should return sum of two numbers', () => {
        const result = sum(5, 12);
        expect(result).to.be.equal(17);
    })
})