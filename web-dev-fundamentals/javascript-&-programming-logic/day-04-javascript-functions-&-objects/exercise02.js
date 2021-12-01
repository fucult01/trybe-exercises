// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
/* function isPalindrome(palindrome) {
    for(i in palindrome) {
        if(palindrome[i] != palindrome[(palindrome.length - 1) - i]) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(isPalindrome('arara')); */

function isPalindrome(randomWord) {
    let palindrome = '';
    for(let i = randomWord.length-1; i >= 0; i-= 1) {
        palindrome += randomWord[i];
    } if (palindrome === randomWord) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// exercise using bubble sort, but same index regardless of input
/*  function highestIndex(testNumber) {
     for(let i=0; i<testNumber.length; i+=1) {
         for(let p=0; p<testNumber.length; p+=1) {
             if(testNumber[p] > testNumber[p+1]) {
                 let temp = testNumber[p];
                 testNumber[p] = testNumber[p+1];
                 testNumber[p+1] = temp;
             }
         }
     }
     return (testNumber.length-1)
 }
 console.log(highestIndex([1, 14, 6, 5, 0, 3])); */

function highestIndex(testNumbers) {
    let highest = 0;
    for(let i in testNumbers) {
        if(testNumbers[highest] < testNumbers[i]) {
            highest = i;
        }
    }
    return highest;
}
console.log(highestIndex([7, 14, 24, 5, 3, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowestIndex(testRandom) {
    let lowest = 0;
    for(let i in testRandom) {
        if(testRandom[lowest] > testRandom[i]) {
            lowest = i;
        }
    }
    return lowest;
}
console.log(lowestIndex([7, 14, 24, 5, 3, 1]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function highestCharacter(testCharacter) {
    let longest = testCharacter[0];
    for(let i in testCharacter) {
        if(longest.length < testCharacter[i].length) {
            longest = testCharacter[i];
        }
    }
    return longest;
}

console.log(highestCharacter(['Saulo', 'Olivia', 'Giselle', 'Sofia', 'Pairo', 'Paco']));


