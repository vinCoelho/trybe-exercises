// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggest = array[0];
let smallest = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggest.length) {
    biggest = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallest.length) {
    smallest = array[index];
  }
}

console.log('A maior palavra é: ' + biggest);
console.log('A menor palavra é: ' + smallest);
