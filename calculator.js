// Calculator Application

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

function absolute(a) {
    return Math.abs(a);
}

function modulus(a, b) {
    if (b === 0) {
        throw new Error("Modulus by zero is not allowed");
    }
    return a % b;
}

function percentage(value, total) {
    if (total === 0) {
        throw new Error("Total cannot be zero");
    }
    return (value / total) * 100;
}

function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Invalid factorial input");
    }

    if (n > 170) {
        throw new Error("Input is too large");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

function average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }

    if (!numbers.every(Number.isFinite)) {
        throw new Error("All elements must be finite numbers");
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

function maximum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }

    if (!numbers.every(Number.isFinite)) {
        throw new Error("Invalid array elements");
    }

    return Math.max(...numbers);
}

function minimum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }

    if (!numbers.every(Number.isFinite)) {
        throw new Error("Invalid array elements");
    }

    return Math.min(...numbers);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    square,
    cube,
    absolute,
    modulus,
    percentage,
    factorial,
    average,
    maximum,
    minimum
};
