// no let a ordem de declaração e atribuição é como o esperado, ocorrendo na ordem de leitura do código, e não permitindo redeclaração.
console.log("Exemplo 1.:")
console.log(value); // ReferenceError: Cannot access 'value' before initialization
let value = 12;
