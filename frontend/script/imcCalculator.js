const pesoInput = document.getElementById('weight').value;
const alturaInput = document.getElementById('height').value;

const peso = parseFloat(pesoInput);
const altura = parseFloat(alturaInput);
const imc = peso/((altura*altura));

const imcValor = () => {
    console.log(`Seu IMC é ${imc}`)
}

// const inputFormat = (event) => {
//     let value = event.target.value
//     value = parseFloat(value)
//     value.toFixed(2)
// }