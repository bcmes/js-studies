// se voce declarar uma variavel sem var, let ou const, ela será criada no escopo global
console.log("Exemplo 1.:");
(function() {
  number = 12;
})();
console.log(number); // 12
/// não deve ser usado, pois pode causar problemas de escopo e poluição do escopo global