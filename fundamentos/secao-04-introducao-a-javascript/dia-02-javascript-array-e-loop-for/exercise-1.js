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

let average = 0;

for (let index = 0; index < numbers.length; index += 1) {
    average = average + numbers[index];
}

console.log('');
console.log('A média aritmética dos valores do array é: ' + (average / numbers.length));
