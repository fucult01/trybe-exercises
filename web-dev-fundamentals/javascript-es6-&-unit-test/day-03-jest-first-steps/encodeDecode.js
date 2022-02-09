function convert(object, string) {
  const splitString = string.split('');
  const array = [];
  splitString.forEach((element) => {
  const value = object[element];
  if (value) array.push(value);
  else array.push(element);
  });
  return array.join('');
}

function encode(string) {
  const obj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return convert(obj, string);
}
  
function decode(string) {
  const obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return convert(obj, string);
} 

const functions = { encode, decode };
module.exports = functions;