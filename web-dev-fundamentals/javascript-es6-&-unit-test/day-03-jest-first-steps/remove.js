const myRemove = (arr, item) => {
    let newArr = [];
    
    arr.forEach((element) => {if (item !== element) newArr.push(element)});
    return newArr;
  }
  module.exports = myRemove;