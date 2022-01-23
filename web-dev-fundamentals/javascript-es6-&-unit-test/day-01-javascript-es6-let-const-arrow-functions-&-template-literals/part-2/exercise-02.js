const longestWord = (str) => {
    let strSplit = str.split(' ');

    let longestWord = strSplit.sort(function(wordA, wordB) {
        return wordB.length - wordA.length;
    })
    return longestWord[0];
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'
