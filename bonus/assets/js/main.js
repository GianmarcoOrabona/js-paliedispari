/* 
JSnack 12
Crea una funzione chiamata sommaNumeri che dato un array di 10
numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca
come risultato.
 
Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto.
Javascript - JS
*/

// Definisco un'array di numeri
let numeri = [12, 24, 45, 56, 35, 78, 65, 73, 89, 10];

// Sommo i numeri
let result = sommaNumeri(numeri);
console.log(`La somma dei numeri nell'array è: ${result}`);




/* 
JSnack 13
Crea una funzione chiamata mediaAritmetica che prende in input un
array di 10 numeri e restituisca la media aritmetica dei numeri contenuti
nell'array.
 
Utilizzare la funzione sommaNumeri precedentemente creata per
calcolare la media dei 10 numeri che vanno chiesti all'utente attraverso
dei prompt.
*/

let risultatoMedia = mediaAritmetica();
console.log(`La media dei numeri inseriti è: ${risultatoMedia}`);



/* ------------------- FUNCTIONS ------------------- */
function sommaNumeri(array) {
    let somma = 0;

    for (let i = 0; i < array.length; i++) {
        somma += array[i];
    }

    return somma;
}

function mediaAritmetica() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        let userNumbers = Number(prompt(`Inserisci il ${i + 1} numero`));
        numbers.push(userNumbers);
    }

    let somma = sommaNumeri(numbers);
    let media = somma / numbers.length;

    return media;
}