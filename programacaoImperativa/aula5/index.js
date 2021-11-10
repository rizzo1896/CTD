// Trabalhando com Funções
function teste1(x, y) {
  return y - x;
}
console.log(teste1(10, 40));

function teste2(x, y) {
  return x * 2;
  console.log(x);
  return x / 2;
}
console.log(teste2(10));

function ptocm(polegada) {
  return polegada * 2.54;
}
console.log(ptocm(5));

function convert(string) {
  return `http://www.${string}.com.br`;
}
console.log(convert("funcaojs"));

function addString(string) {
  return `!${string}`;
}
console.log(addString("Teste"));

function dogs(idade) {
  return idade * 7;
}
console.log(dogs(2));

function salario(mensal) {
  return mensal / 160;
}
console.log(salario(500));

function imc(altura, peso) {
  return (peso / altura ** 2).toFixed(2);
}
console.log(imc(1.8, 80));

function convert2(string) {
  return string.toUpperCase();
}
console.log(convert2("ola"));

function tipo(type) {
  return typeof type;
}
console.log(tipo(1));

function raio(valor) {
  return 2 * Math.PI * valor;
}
console.log(raio(2));

// Funções e procedimentos - Exercício