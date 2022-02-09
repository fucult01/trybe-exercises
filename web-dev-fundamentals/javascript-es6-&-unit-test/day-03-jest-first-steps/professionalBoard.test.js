const searchEmployee = require('./professionalBoard.js');

describe('Testa a função searchEmployee', () => {
  it('tests if searchEmployee is a function', () => {
    expect(typeof searchEmployee === 'function').toBeTruthy();
  });
  it('tests if searchEmployee(id, "firstName") returns the firstname', () => {
    const actual = searchEmployee('4456-4', 'firstName');
    const expected = 'Leila';

    expect(actual).toBe(expected);
  });
  it('tests if searchEmployee(id, "lastName") returns the lastname', () => {
    const actual = searchEmployee('4456-4', 'lastName');
    const expected = 'Zuckerberg';

    expect(actual).toBe(expected);
  });
  it('tests if searchEmployee(id, "specialities") returns an array with all specialities', () => {
    const actual = searchEmployee('8579-6', 'specialities');
    expect(actual).toContain('UX', 'Design');
  });
  it('tests if an error is thrown when id is invalid', () => {
    expect(() => { searchEmployee('4345-1', 'specialities') }).toThrow();
  });
  it('tests the error message when id is invalid', () => {
    expect(() => { searchEmployee('4345-1', 'specialities') }).toThrowError(new Error("ID não identificada"));
  });
  it('tests if throw an error when id and detail is invalid', () => {
    expect(() => { searchEmployee('3', 'e') }).toThrow();
  });
  it('tests the error message when detail is invalid', () => {
    expect(() => { searchEmployee('5569-4', 'l') }).toThrowError(new Error("Informação indisponível"));
  });
});
  