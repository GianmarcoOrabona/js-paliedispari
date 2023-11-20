/* Palidroma
Chiedere all’utente di inserire una parola. 
Creare una funzione per capire se la parola inserita è palindroma. 
Usate poi la funzione per decretare se la parola inserita 
dall'utente è palindroma o meno. In Internet trovate degli esempi di parole palindrome. */

// Chiedo all'utente di inserire una parola
let userWord = prompt('Inserisci una parola');
console.log('La parola inserita è: ' + userWord);

// Trasformo la parola in un array e scompongo ogni singolo carattere
userWordArray = userWord.split("");
console.log(userWordArray);
