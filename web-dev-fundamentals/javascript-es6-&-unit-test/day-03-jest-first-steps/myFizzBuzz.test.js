const myFizzBuzz = require('./myFizzBuzz.js');

describe('Requisito 1', () => {
    test('3 / 5 equals fizzBuzz', () => {
        expect(myFizzBuzz(45)).toBe('fizzbuzz');
    })
    test('multiples of 3 equals fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    })
    test('multiples of 5 equals buzz', () => {
        expect(myFizzBuzz(50)).toBe('buzz');
    })
    test('equals the number if it"s not divisible by 3 or 5', () => {
        expect(myFizzBuzz(133)).toBe(133);
    })
    test('equals false if it"s not a number', () => {
        expect(myFizzBuzz('4')).toBe(false);
    })
})