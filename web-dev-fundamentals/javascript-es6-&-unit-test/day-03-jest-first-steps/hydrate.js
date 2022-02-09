const hydrate = (string) => {
    const splitString = string.split('');
    let glassesOfWater = 0;
    let glass = 'copo';

    splitString.forEach(element => {
        const parsedCharacter = parseInt(element);
        if (parsedCharacter) glassesOfWater += parsedCharacter;
    });
  
    if (glassesOfWater > 1) glass = 'copos';
  
    return `${glassesOfWater} ${glass} de água`;
};
    
module.exports = hydrate;