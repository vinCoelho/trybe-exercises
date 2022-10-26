// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrime = 0;

for (let index1 = 2; index1 <= 50; index1 += 1) {
  let prime = true;
  for (let index2 = 2; index2 < index1; index2 += 1) {
    if (index1 % index2 == 0 && index1 !== index2) {
      prime = false;
    }
  }
  if (prime === true) {
    biggestPrime = index1;
  }
}

console.log('O maior número primo entre 2 e 50 é: ' + biggestPrime);
