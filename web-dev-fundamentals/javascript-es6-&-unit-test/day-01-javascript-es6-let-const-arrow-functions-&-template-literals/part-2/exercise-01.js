const factorial = y => y > 0 ? y * factorial(y - 1) : 1;
console.log(factorial(7))