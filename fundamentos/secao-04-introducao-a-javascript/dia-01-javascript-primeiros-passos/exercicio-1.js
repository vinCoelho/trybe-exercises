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

// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

const num1 = -7;

if (num1 > 0) {
  console.log('positive');
} else if (num1 < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const ang1 = 80;
const ang2 = 40;
const ang3 = 60;

if ((ang1 + ang2 + ang3) == 180) {
  console.log('true');
} else if ((ang1 + ang2 + ang3) < 0) {
  console.log('valores inválidos');
} else {
  console.log('false');
}

// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let xadrez = 'Cavalo';

switch (xadrez.toLowerCase()) {
  case "peão":
    console.log('O peão se move para frente, uma casa por vez.')
    break;

  case "bispo":
    console.log('O bispo se move em diagonais.')
    break;

  case "torre":
    console.log('A torre se move tanto para frente quanto para os lados, múltiplas casas por vez.')
    break;

  case "rei":
    console.log('O rei pode mover-se em qualquer direção, porém apenas uma casa por vez.')
    break;

  case "dama":
    console.log('A rainha pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.')
    break;
  
  case "cavalo":
    console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.')
    break;

  default:
    console.log('Peça não identificada.')
}

// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const porcentagem = 40;
let nota;

if (porcentagem >= 90) {
  nota = 'A';
  console.log('Nota: ' + nota);
} else if (porcentagem >= 80) {
  nota = 'B';
  console.log('Nota: ' + nota);
} else if (porcentagem >= 70) {
  nota = 'C';
  console.log('Nota: ' + nota);
} else if (porcentagem >= 60) {
  nota = 'D';
  console.log('Nota: ' + nota);
} else if (porcentagem >= 50) {
  nota = 'B';
  console.log('Nota: ' + nota);
} else if (porcentagem > 100 || porcentagem < 0) {
  console.log('Erro: valor de nota inválido');
} else {
  nota = 'F';
  console.log('Nota: ' + nota);
}

// Há um par entre nós
// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const numer1 = 2;
const numer2 = 13;
const numer3 = 4;

if (numer1 % 2 === 0 || numer2 % 2 === 0 || numer3 % 2 === 0) {
  console.log('true');
} else {
  console.log('false');
}

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

if (numer1 % 2 !== 0 || numer2 % 2 !== 0 || numer3 % 2 !== 0) {
  console.log('true');
} else {
  console.log('false');
}
