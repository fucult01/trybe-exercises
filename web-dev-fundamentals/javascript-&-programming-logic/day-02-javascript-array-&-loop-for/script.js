let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let i=0; i<numbers.length; i+= 1) {
    console.log(numbers[i]);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sumOfNumbers = 0; 
for (let i=0; i<numbers.length; i+=1) {
    sumOfNumbers += numbers[i];
} 
console.log(sumOfNumbers);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let arithmeticMean = (sumOfNumbers)/numbers.length
console.log(arithmeticMean);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (arithmeticMean > 20) {
    console.log('greater than 20');
} else {
    console.log('less or equals to 20');
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let largest = numbers[0];
for (let i = 0; i<numbers.length; i+=1) {
    if (largest < numbers[i]) {
        largest = numbers[i];
    }
}   
console.log(largest); 

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let isOdd = 0;
for (let x=0; x<numbers.length; x+=1) {
    if (numbers[x] % 2 !== 0) {
        isOdd += 1; 
    } else if (isOdd === 0) {
        console.log('no odd numbers');
    }
} 
console.log(isOdd); 

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let smallest = numbers[0];
for (let z=0; z<numbers.length; z+=1) {
    if (smallest > numbers[z]) {   
        smallest = numbers[z]
    }
}
console.log(smallest); 

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let oneToTwentyFive = [];
for (l=0; l<=25; l+=1) {
    oneToTwentyFive.push(l)
} 
console.log(oneToTwentyFive);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (l=0; l<=25; l+=1) {
    console.log(oneToTwentyFive[l]/2);
}


// Bonus exercise
// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;
for  (let i=1; i<numbers.length; i+=1) {
    for (let j=0; j<i; j+=1) {
        if(numbers[i] < numbers[j]) {
            let aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}
console.log(numbers);

// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;
for  (let i=1; i<numbers.length; i+=1) {
    for (let j=0; j<i; j+=1) {
        if(numbers[i] > numbers[j]) {
            let aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}
console.log(numbers);

// 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

for (let i=0; i<numbers2.length; i+=1) {
    if (i+1 < numbers2.length) {
        numbersMultiplied.push(numbers2[i] * numbers2[i+1]);
    } else {
        numbersMultiplied.push(numbers2[i] * 2);
    }
}
console.log(numbersMultiplied);