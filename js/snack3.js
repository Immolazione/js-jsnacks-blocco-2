console.log('JS OK');

/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

//3 ARRAY
const fakeGuests = [];
const names = ['Federico', 'Pietro', 'Marco', 'Laura'];
const surnames = ['Bettini', 'Mainardi', 'Runza', 'Renda', 'Imbimbo'];

//RANDOMIZZO NOME E COGNOME
let rndName;
let rndSurname;

let fakeName;

//CICLO FINCHè NON HO 3 NOMI CASUALI 
while (fakeGuests.length < 3) {
    rndName = Math.floor(Math.random() * names.length);
    rndSurname = Math.floor(Math.random() * surnames.length);

    fakeName = `${names[rndName]} ${surnames[rndSurname]}`;
    
    console.log(fakeName);
    
    //VALIDATION
    if (!fakeGuests.includes(fakeName)) {
        fakeGuests.push(fakeName);
    }
}

//FINAL CONSOLE LOG
console.table(fakeGuests);
