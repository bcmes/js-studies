// variáveis em JS são case-sensitive
// podem iniciar com [a-zA-Z_$] e conter [a-zA-Z0-9_$]

// var é uma palavra reservada para declarar variáveis
/// seu escopo é de função, ou seja, o interpretador primeiro lê a função e declara as variáveis como undefined, e depois executa o código linha a linha
console.log("Exemplo 1.:")
console.log(value); // resultado é undefined e não variável não declarada
var value = 12;
console.log(value); // 12
/// você pode redeclarar a variável sem problemas
console.log("Exemplo 2.:")
var value = 13;
console.log(value); // 13
var value;
console.log(value); // 13
/// como o escopo de var é de função, não importa se é declarado dentro de um bloco, seu escopo será de função.
console.log("Exemplo 3.:")
if (true) {
  var value = 14;
}
console.log(value); // 14
/// var foi a primeira forma de declarar variáveis, mas não é mais recomendada, pois o escopo dela pode causar problemas em códigos mais complexos.
