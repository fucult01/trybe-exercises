const sum = require('./sum.js')

describe('lalalal', () => {
    it('tests if 4+5 equal to 9', () => {
        expect(sum(4,5)).toBe(9);
    })
    it('tests if 0 + 0 equal to 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('tests if string input throw an error', () => {
        expect(() => sum(4, '5')).toThrowError();
    })
    it('tests if string input throw message error', () => {
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
})
