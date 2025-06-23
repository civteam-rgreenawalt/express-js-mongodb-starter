const mathUtil = {

    sum(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    },

    power(base, exponent) {
        return Math.pow(base, exponent);
    },

    sqrt(a) {
        if (a < 0) {
            throw new Error("Square root of negative number is not allowed.");
        }
        return Math.sqrt(a);
    }
}



function greet(name) {
    const unused = 42;
    return `Hello, ${name}!`;
}

module.exports = { mathUtil, greet };