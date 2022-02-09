const techList = (tech, name) => {
    if (tech.length === 0) return 'Vazio!';
    const sortedArray = tech.sort();
    const technologyList = [];

    sortedArray.forEach(element => technologyList.push({ tech: element, name }));

    return technologyList; 
}

  module.exports = techList