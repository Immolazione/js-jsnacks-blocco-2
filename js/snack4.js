console.log('JS OK');

/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

//CREO ARRAY
const array = [3, 34, 54, 65, 123, 4, 654, 1];
console.table(array);

//CREO SOMMA FUORI
let sum = 0;

for (let i = 0; i < array.length; i++) {
    //SE L'INDICE è DISPARI, SOMMALO
    if (i % 2 !== 0) {
        sum += array[i];
    }
}

console.log(sum);