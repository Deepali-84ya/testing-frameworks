```javascript
// Calculator application for Jest unit testing

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
        throw new Error("Factorial requires a non-negative integer");
    }

    if (n > 170) {
        throw new Error("Input is too large for this factorial implementation");
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
        throw new Error("Input must be a non-empty array");
    }

    if (!numbers.every(number => typeof number === "number" && Number.isFinite(number))) {
        throw new Error("All array elements must be finite numbers");
    }

    const sum = numbers.reduce((total, number) => total + number, 0);

    return sum / numbers.length;
}

function maximum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array");
    }

    if (!numbers.every(number => typeof number === "number" && Number.isFinite(number))) {
        throw new Error("All array elements must be finite numbers");
    }

    return Math.max(...numbers);
}

function minimum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array");
    }

    if (!numbers.every(number => typeof number === "number" && Number.isFinite(number))) {
        throw new Error("All array elements must be finite numbers");
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
```
