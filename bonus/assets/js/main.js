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
console.log(result)

function sommaNumeri(array) {
    let somma = 0;

    for (let i = 0; i < array.length; i++) {
        somma += array[i];
    }

    return somma;
}