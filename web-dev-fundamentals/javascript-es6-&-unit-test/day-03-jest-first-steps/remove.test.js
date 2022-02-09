const myRemove = require('./remove.js');

describe('testing myRemove function', () => {
    it('tests if the function is working', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    })
})