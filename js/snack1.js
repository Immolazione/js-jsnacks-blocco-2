console.log('JS OK');

/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while
*/

let sum = 0;
let i = 0;
while (i < 5) {
    const num = parseInt(prompt('Inserisci un numero').trim());
    if (!isNaN(num)) {
        sum += num;
    }
    console.log(num);
    
    i++;
}
console.log(sum);
