const {
    add,
    subtract,
    multiply,
    divide,
    factorial,
    average
} = require("./calculator");

describe("Calculator Testing", () => {

    test("Addition of two numbers", () => {
        expect(add(5, 3)).toBe(8);
    });

    test("Subtraction of two numbers", () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test("Multiplication of two numbers", () => {
        expect(multiply(4, 5)).toBe(20);
    });

    test("Division of two numbers", () => {
        expect(divide(20, 4)).toBe(5);
    });

    test("Division by zero should throw error", () => {
        expect(() => divide(10, 0)).toThrow();
    });

    test("Factorial of five", () => {
        expect(factorial(5)).toBe(120);
    });

    test("Average of numbers", () => {
        expect(average([10, 20, 30])).toBe(20);
    });

});
