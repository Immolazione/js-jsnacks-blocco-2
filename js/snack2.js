console.log('JS OK');

/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

// INSERISCO UN NUMERO
let num = parseInt(prompt('Inserisci un numero').trim());

// SE PARI STAMPO, SE DISPARI STAMPO IL SUCCESSIVO

while (num % 2 !== 0) {
    num += 1;
}

console.log(num)