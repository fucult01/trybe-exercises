const { encode, decode } = require('./encodeDecode.js');

describe('testing encode and decode', () => {
  it('tests if encode is a function', () => {
    expect(typeof encode).toEqual('function');
  });
  it('converts A to 1', () => {
    expect(encode('ata')).toEqual('1t1');
  });
  it('converts E to 2', () => {
    expect(encode('teste')).toEqual('t2st2');
  });
  it('converts I to 3', () => {
    expect(encode('it')).toEqual('3t');
  });
  it('converts O to 4', () => {
    expect(encode('odd')).toEqual('4dd');
  });
  it('converts U to 5', () => {
    expect(encode('ugly')).toEqual('5gly');
  });
  it('tests function length', () => {
    expect(encode('trybe').length).toEqual(5);;
  });

  it('tests if decode is a function', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converts 1 to A', () => {
    expect(decode('1t1')).toEqual('ata');
  });
  it('converts 2 to E', () => {
    expect(decode('t2st2')).toEqual('teste');
  });
  it('converts 3 to I', () => {
    expect(decode('3t')).toEqual('it');
  });
  it('converts 4 to O', () => {
    expect(decode('4dd')).toEqual('odd');
  });
  it('converts 5 to U', () => {
    expect(decode('5gly')).toEqual('ugly');
  });
  it('tests function length', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});