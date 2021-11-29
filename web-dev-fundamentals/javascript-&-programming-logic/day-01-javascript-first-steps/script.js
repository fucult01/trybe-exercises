const a = 8;
const b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


const c = 12;
const d = 20;
if (c > d) {
    console.log(c)
} else {
    console.log(d)
}

const e = 40;
const f = 24;
const g = 60;
if (e > f && e > g) {
    console.log(e)
} else if (f > e && f > g) {
    console.log(f)
} else {
    console.log(g)
}

const h = -5;
if (h > 0) {
    console.log('positive');
} else if (h < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

const i = 45;
const j = 60;
const k = 75;
if (i + j + k == 180) {
    console.log('true');
} else {
    console.log('negative');
}

const piece = 'bishop';
switch (piece.toLowerCase()) {
    case 'king':
        console.log('King - one square in any direction');
        break;
    case 'queen':
        console.log('Queen - diagonally, horizontally, or vertically any number of squares');
        break;
    case 'pawn':
        console.log('Pawn - vertically forward one square or two if they haven\'t yet moved');
        break;
    case 'bishop':
        console.log('Bishop - diagonally any number of squares');
        break;
    case 'knight':
        console.log('Knight - two squares in a horizontal or vertical direction, then one square horizontally or vertically');
        break;
    case 'rook':
        console.log('Rook - horizontally or vertically any number of squares');
        break;
    default:
        console.log('Invalid');
        break;
}

const percentage = 0;
if (percentage >= 90 && percentage <= 100) {
    console.log('A');
} else if (percentage >= 80 && percentage < 90) {
    console.log('B');
} else if (percentage >= 70 && percentage < 80) {
    console.log('C');
} else if (percentage >= 60 && percentage < 70) {
    console.log('D');
} else if (percentage >= 50 && percentage < 60) {
    console.log('E');
} else if (percentage < 50 && percentage >= 0) {
    console.log('F');
} else {
    console.log('invalid');
}

const number1 = 5;
const number2 = 3;
const number3 = 55;
if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    console.log('true');
} else {
    console.log('false');
}

const l = 3;
const p = 5;
const x = 7;
let isEven = false; 
if ((l % 2 !== 0 || p % 2 !== 0 || x % 2 !== 0)) {
    isEven = true; 
}; 
console.log(isEven);

const cost = 300;
const sale = 1350; 
const tax = 0.2; 
if (cost >= 0 && sale >= 0 ) {
productTax = cost * tax; 
const totalCost = cost + productTax; 
const profit = sale - totalCost; 
const finalProfit = profit * 1000;
console.log(finalProfit);
} else {
    console.log('invalid');
}

