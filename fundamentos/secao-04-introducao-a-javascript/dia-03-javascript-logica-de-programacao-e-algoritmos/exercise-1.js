// crie um algoritmo que imprima na tela o fatorial de 10.

let fat = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let res = 10;

for (index = 0; index < fat.length; index += 1) {
  res = res * fat[index];
}

console.log('Fatorial de 10: ' + res);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Tryber';

const arrayWord = word.split('');

const reverseWord = arrayWord.reverse();

const newWord = reverseWord.join('');

console.log('Palavra: ' + word);
console.log('Palavra ao contrário: ' + newWord);
