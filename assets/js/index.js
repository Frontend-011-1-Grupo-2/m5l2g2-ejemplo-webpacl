import {
  suma,
  resta,
  multiplicacion,
  division,
} from './modules/operaciones.js';

const procesarPedidos = () => {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(`Pedido ${i} ha sido procesado`);
    }, 500);
  }
};

procesarPedidos();

// Crear operaciones
console.log(suma(2, 2));
console.log(resta(10, 2));
console.log(multiplicacion(4, 4));
console.log(division(2, 0));
