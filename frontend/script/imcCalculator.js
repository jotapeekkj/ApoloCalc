const pesoInput = document.getElementById('weight').value;
const alturaInput = document.getElementById('height').value;

const peso = parseFloat(pesoInput);
const altura = parseFloat(alturaInput);
const imc = peso/(altura*altura);

