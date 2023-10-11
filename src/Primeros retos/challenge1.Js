const esParImparArrow = (numero) => { 
  if (numero % 2 === 0) {
    console.log(numero + ' es un número par.');
  } else {
    console.log(numero + ' es un número impar.');
  }
};

// la primera es arrowfunction                           Son diferentes en la sint

const esParImparRegular = function (numero) {
    if (numero % 2 === 0) {
      console.log(numero + ' es un número par.');
    } else {
      console.log(numero + ' es un número impar.');
    }
  }
  // y esta es nueva regular (newregularFunction) 
