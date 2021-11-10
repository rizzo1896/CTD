const imc = (peso, altura) => {
  let result = peso / (altura * altura);
  return result;
};

console.log(imc(83, 1.7));
