// crie um algoritmo que imprima na tela o fatorial de 10.

let fat = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let res = 10;

for (index = 0; index < fat.length; index += 1) {
  res = res * fat[index];
}

console.log(res);
