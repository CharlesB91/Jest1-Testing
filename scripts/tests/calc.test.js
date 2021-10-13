/**
 * @jest-environment jsdom
 */

const { expect } = require("@jest/globals");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("Should return 73 for 42 + 31", ()=>{
            expect(addition(42,31)).toBe(72)
        })
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});