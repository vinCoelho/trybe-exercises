// Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos, recomendamos que utilize a extensão Code Runner. Você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

const a = 6;
const b = 13;

// Adição (a + b)

console.log(a + b);

// Subtração (a - b)

console.log(a - b);

// Multiplicação (a * b)

console.log(a * b);

// Divisão (a / b)

console.log(a / b);

// Módulo (a % b)

console.log(a % b);

// Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

if (a > b) {
  console.log('O maior número é o: ' + a);
} else {
  console.log('O maior número é o: ' + b);
}

// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const c = 35;

if (a > b && a > c) {
  console.log('O maior dos três números é o (a): ' + a); 
} else if (b > c) {
  console.log('O maior dos três números é o (b): ' + b);
} else {
  console.log('O maior dos três números é o (c): ' + c);
}