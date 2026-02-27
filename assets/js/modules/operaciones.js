const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => {
  if (num2 === 0) {
    console.error('No se puede dividir por 0');
    return 'Error: No se puede dividir por 0';
  }
  return num1 / num2;
};

export { suma, resta, multiplicacion, division };
