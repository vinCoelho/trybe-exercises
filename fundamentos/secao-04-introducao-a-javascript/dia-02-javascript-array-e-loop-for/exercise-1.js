// Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado;

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index];
}

console.log('');
console.log('A soma de todos os valores do array é: ' + sum);

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let sum2 = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum2 = sum2 + numbers[index];
}

let avarage = sum2 / numbers.length;

console.log('');
console.log('A média aritmética dos valores do array é: ' + avarage);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (avarage > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (maiorValor < numbers[index]) {
        maiorValor = numbers[index];
    }
}

console.log('');
console.log('O maior valor do array é o: ' + maiorValor)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let oddNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddNumbers += 1;
    }
}

console.log('');

if (oddNumbers > 0) {
    console.log('Foram encontrados ' + oddNumbers + ' valores ímpares no array.')
} else {
    console.log('nenhum valor ímpar encontrado')
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorValor = maiorValor;

for (index = 0; index < numbers.length; index += 1) {
    if (menorValor > numbers[index]) {
        menorValor = numbers[index];
    }
}

console.log('');
console.log('O menor valor do array é o: ' + menorValor)
