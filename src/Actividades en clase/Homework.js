

//map(): Este metodo crea una nueva matriz con los resultados de llamar a una funcion proporcionada en cada elemento de esta matriz.
const arr = [1, 2, 3, 4, 5, 6];
    const mapped = arr.map(element => element + 30);
    console.log(mapped); //[31, 32, 33, 34, 35, 36] 


//filter(): Este metodo crea una nueva matriz con solo los elementos que pasan la condicion dentro de la funcion proporcionada.
const arr = [1, 2, 3, 4, 5, 6];
    const filtered = arr.filter(element => element === 2 || element ===4);
    console.logg(filtered); //[2, 4]


//sort():Este metodo se utiliza para ordenar los elementos de un array en orden ascendente o descendente.
const arr = [1, 2, 3, 4, 5, 6];
    const alphabet = ["f", "a", "c", "v", "z"];

    //ordenar en orden descendente 
    descend = arr.sort((a, b) => a > b ?-1 : 1);
    console.log(descend); //[6, 5, 4, 3, 2, 1]

    //ordenar en orden ascendente 
    ascend = alphabet.sort((a, b) => a> b ? 1 : -1);
    console.log(ascend); //["a", "c", "f", "v", "z"]


//forEach() Este metodo ayuda a recorrer un array ejecutando una funcion callback por cada elemento del array.
const arr = [1, 2, 3];
    arr.forEach(element => {
        console.log(element);
    });
    //1
    //2
    //3


//concat() Este metodo se utiliza para fusionar dos o mas matrices y devuelve una nueva matriz, sin cambiar las matrices existentes.
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

console.log(arr1.concat(arr2)); //["a", "b", "c", "d", "e", "f"]
console.log(arr1); //["a", "b", "c"]
console.log(arr2); //["d", "e", "f"]


//every() Este metodo comprueba cada elemento de la matriz que pasa la condicion, devolviendo verdadero o falso segun corresponda.

const arr = [1, 2, 3, 4, 5, 6, 7];

    //todos los elementos son mayores que 5 
    const greaterFive = arr.every(num => num > 5);
    console.log(greaterFive); //false

    // todos los elementos son menores que 9 
    const lessnine = arr.every(num => num < 9);
    console.log(lessnine); // true 


//some() Este metodo comprueba si al menos un elemento de la matriz que pasa la condicion, devolviendo verdadero o falso segun corresponda.
const arr = [1, 2, 3, 4, 5, 6, 7];

    // al mens un elemento es mayor que 5 ? 
    const greaterNum = arr.some(num => num > 5);
    console.log(greaterNum); //true 

    // al menos un elemento es menor o igual a 0 ?
    const lessNum = arr.some(num => num <= 0);
    console.log(lessNum); //false


//includes() Este metodo comprueba si un array incluye el elemento que pasa la condicion, devolviendo verdadero o falso segun corresponda.
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includes(2)); //true
console.log(arr.includes(7)); //false


//join() Este metodo devuelve una nueva cadena concatenando todos los elementos de la matriz separados por el separador especificado.
const arr = ["m", "a", "n", "d", "e", "e", "p"];
console.log(arr.join('')); // madeep


//reduce()  Este metodo aplica una funcion contra un acumulador y cada elemento del array para reducirlo a un unico valor.
const arr = [1, 2, 3, 4, 5, 6];
    const reduced =  arr.reduce((total, current) => total + current);
    console.log(reduce); //21


//find() Este metodo devuelve el valor del primer elemento de una matriz que supera la prueba en una funcion de comprobacion.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const found = arr.find(element => element > 5);
    console.log(found); //6


//findIndex()  Este metodo devuelve el indice del primer elemento de una matriz que supera la prueba en una funcion de comprobacion.
const arr = ["Valentina", "Mandeep", "Esteban", "Andres"];
    const indexFinder = arr.findIndex(element => element == "Mandeep");
    console.log(indexFinder); //1


//indexOf()
const arr = ["Valentina", "Mandeep", "Esteban", "Andres"];
    const indexFinder = arr.indexOf("Mandeep");
    console.log(indexFinder); //1


//fill()
const arr = new Array(3);
console.log(arr); //[vacio, vacio, vacio]
console.log(arr.fill(10)); // [10, 10, 10]


//slice()
const arr = ["a", "b", "c", "d", "e"];
    const sliced = arr.slice(2, 4);
    console.log(sliced); // ["c", "d"]
    console.log(arr); //["a", "b", "c", "d", "e"]


reverse()
const arr = [1, 2, 3];
    arr.reverse();
    console.log(arr); //[3, 2, 1]


const verificar = funtion (num)
if (num %2== 0)
 {
    console.log(is even);
 }

 else 

{
    console.log(is odd);
    
}












