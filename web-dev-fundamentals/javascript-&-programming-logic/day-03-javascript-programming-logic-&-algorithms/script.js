// 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
let y = 5; 
let square = '';
let asterisk = '*'
for(let i=0; i<y; i+=1) {
    square += asterisk;
};
for(let i=0; i<y; i+=1) {
    console.log(square)
}

// 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let k = 5;
let triangle = '';
let asterisk2 = '*';
for(let i=0; i<k; i+=1) {
    triangle += asterisk2;
    console.log(triangle)
} 

// 3 - Agora inverta o lado do triângulo. 
let p = 5;
let reverseTriangle = '';
for (let x = 1; x <= p; x+=1) {
    for (let q = 0; q < p - x; q+=1) {
        reverseTriangle += ' ';
    }
    for (let h = 0; h < x; h+=1) {
        reverseTriangle += '*';
    }
    reverseTriangle += '\n';
}
console.log(reverseTriangle);

// 4 - Depois, faça uma pirâmide com n asteriscos de base:
let o = 5;
let pyramid = '';
for (let u = 2; u < o; u+=1) {
    for (let t = 1; t < o - u; t+=1) {
        pyramid += ' ';
    }
    for (let e = 0; e < (2 * u) - 3 ; e+=1) {
        pyramid += '*';
    }
    pyramid += '\n';
} 
console.log(pyramid);

// Bonus exercise
// 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let w = 7; 
let mid = (w+1)/2;
let pyramidHollow = '';
for (let q = 1; q<mid; q+=1) {
    for(let j=1; j<=(mid-q); j+=1) {
        pyramidHollow += ' ';
    } if(q === 1) {
    pyramidHollow += '*';
} else {
    pyramidHollow += '*';
    for(let j=1; j<= 2*q-3; j+=1) {
        pyramidHollow += ' ';
    }
    pyramidHollow += '*';
}
pyramidHollow += '\n';
}
   for (q = mid; q<=w; q+=1) {
     for(let j=1; j<=q-mid; j+=1) {
        pyramidHollow += '';
    }
    if(q === w) {
        pyramidHollow += '*';
    } else {
        pyramidHollow += '*';
        for (let j=1; j<=2*(w-q)-3; j+=1) {
            pyramidHollow += '';
        }
        pyramidHollow += '*';
    }
}  
console.log(pyramidHollow) 

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
let number = 4294967297;
let divisors = 0;
for(i = 2; i<=number/2; i+=1) {
    if (number % i === 0) {
         divisors += 1;
         break;
    }
}
if (number == 1) {
    console.log('1 is neither prime nor composite.');
} else {
    if (divisors === 0) 
    console.log(number + ' is a prime number.');
    else {
        console.log(number + ' is not a prime number');
    }
}