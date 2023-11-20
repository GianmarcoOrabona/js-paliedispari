/* Palidroma
Chiedere all’utente di inserire una parola. 
Creare una funzione per capire se la parola inserita è palindroma. 
Usate poi la funzione per decretare se la parola inserita 
dall'utente è palindroma o meno. In Internet trovate degli esempi di parole palindrome. */

// Chiedo all'utente di inserire una parola
let userWord = prompt('Inserisci una parola');
console.log('La parola inserita è: ' + userWord);

// Trasformo la stringa tutta in minuscolo così da non creare errori
userWord = userWord.toLocaleLowerCase();
console.log(`Stringa in minuscolo: "${userWord}"`);

// Trasformo la parola in un array e scompongo ogni singolo carattere
userWordToArray = userWord.split("");
console.log(userWordToArray);

// Creo una copia dell'array e la inverto
let reverseWordArray = userWordToArray.slice().reverse();
console.log(reverseWordArray);

// Trasformo l'array invertito in una stringa
let reverseWord = reverseWordArray.join("");
console.log(reverseWord);

if (userWord == reverseWord) {
    console.log(`La parola "${userWord}" è palindroma`);
} else {
    console.log(`La parola "${userWord}" non è palindroma`);
}