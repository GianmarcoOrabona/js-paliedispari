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

let palindromeWord = palindrome(userWord);


/*---------- FUNCTIONS ----------*/

function palindrome(word) {
    // Trasformo la parola in un array e scompongo ogni singolo carattere
    WordToArray = word.split("");
    console.log(word);

    // Creo una copia dell'array e la inverto
    let reverseWordArray = WordToArray.slice().reverse();
    console.log(reverseWordArray);

    // Trasformo l'array invertito in una stringa
    let reverseWord = reverseWordArray.join("");
    console.log(reverseWord);

    if (word == reverseWord) {
        document.getElementById('palindrome_word').innerHTML = `La parola "${word.charAt(0).toUpperCase() + word.slice(1)}" è palindroma`;
        console.log(`La parola "${word}" è palindroma`);
    } else {
        document.getElementById('palindrome_word').innerHTML = `La parola "${word.charAt(0).toUpperCase() + word.slice(1)}" non è palindroma`;
        console.log(`La parola "${word}" non è palindroma`);
    }
}
