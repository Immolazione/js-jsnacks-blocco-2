console.log('JS OK');

/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

//CREO DUE ARRAY
let array1 = [12, 3, 5, 35, 23];
let array2 = [13, 53];

console.log(array1);
console.log(array2);

// ESPLICITO ARRAY PIù LUNGO E PIù CORTO
let longArray;
let shortArray;

// STABILISCO QUALE ARRAY PIù CORTO E QUALE PIù LUNGO
if (array1.length > array2.length) {
    shortArray = array2;
    longArray = array1;
} else if (array1.length < array2.length){
    shortArray = array1;
    longArray = array2;
}

// ESPLICITO DIFFERENZA
const diff = longArray.length - shortArray.length;
console.log(diff);

// AGGIUNGO NUMERI CASUALI FINCHè NON SONO DELLA STESSA LENGTH
for (let i = 0; i < diff; i++) {
    const rndNum = Math.floor(Math.random() * 80 + 1);
    shortArray.push(rndNum);
}

// CONSOLE DEGLI ARRAY CON LUNGHEZZA UGUALE
console.log(array1);
console.log(array2);