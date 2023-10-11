function restaPromesa(a, b) {    // se hace la funcion luego lo que debe retornar y los metodos 
  return new Promise((resolve, reject) => {
    const resultado = a - b;
    if (resultado >= 0) {
      resolve(resultado);
    } else {
      reject(new Error("El resultado de la resta es menor a cero."));
    }
  });
}



// Utilizando then()/catch()
restaPromesa(10, 5)
  .then(resultado => {
    console.log("Resultado:", resultado);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

  

// Utilizando async/await
async function realizarResta() {
  try {
    const resultado = await restaPromesa(8, 12);
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

realizarResta();
