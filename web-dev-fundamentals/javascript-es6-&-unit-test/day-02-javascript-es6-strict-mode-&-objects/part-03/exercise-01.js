const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };



// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (obj, key, value) => obj[key] = value;
addKey(lesson2, 'turno', 'noite');
console.log(lesson2)
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (obj) => console.log(Object.keys(obj));
listKeys(lesson3);
// Crie uma função para mostrar o tamanho de um objeto.
const objLenght = (obj) => console.log(Object.keys(obj).length);
objLenght(lesson3); 
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj) => console.log(Object.values(obj));
listValues(lesson2)
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
console.log(allLessons);

const studentsSum = (obj) => {
    let sum = 0;
    const keys = Object.keys(obj);
    for (k in keys) { 
        sum += obj[keys[k]].numeroEstudantes;
    }
    return sum;
}
console.log(studentsSum(allLessons));


const getValueByIndex = (obj, k) => console.log(Object.values(obj)[k]);
getValueByIndex(lesson1, 2);

const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    let isEqual = false;
    for (let k in entries) {
        if (entries[k][0] === key && entries[k][1] === value) {
            isEqual = true;
        }
    }
    return isEqual;
}
console.log(verifyPair(lesson1, 'professor', 'Clarinha'));
console.log(verifyPair(lesson2, 'turno', 'noite'));
