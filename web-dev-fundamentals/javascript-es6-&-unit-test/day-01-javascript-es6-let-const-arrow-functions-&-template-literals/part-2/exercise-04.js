let result;
const changeLetter = (str) => {
    const stringToChange = 'x x x x x x x x';
    let newString = '';
    for (let k = 0; k < stringToChange.length; k += 1) {
        if (stringToChange[k] === 'x') {
            newString += ` ${str}`;
        }
    }
    result = newString;
    return newString;
}
console.log(changeLetter('stretchingforeverintoeverything'));


const array = ['CSS', 'Flexbox', 'Git', 'HTML', 'Javascript'];

const mainSkills = (result) => {
    let newString2 = `${changeLetter(result)};
    Main skills:`;
    array.forEach((skill) => 
    newString2 = `${newString2}
    -${skill}`);

    newString2 = `
    ${newString2}
    
    #goTrybe
    `;
    return newString2;
}

console.log(mainSkills('stretchingforeverintoeverything'));