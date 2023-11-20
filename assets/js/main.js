/* Palidroma
Chiedere all’utente di inserire una parola. 
Creare una funzione per capire se la parola inserita è palindroma. 
Usate poi la funzione per decretare se la parola inserita 
dall'utente è palindroma o meno. In Internet trovate degli esempi di parole palindrome. */

// Chiedo all'utente di inserire una parola
let userWord = prompt('Inserisci una parola');
console.log('La parola inserita è: ' + userWord);

// Trasformo la stringa tutta in minuscolo così da non creare errori
userWord = userWord.toLowerCase();
console.log(`Stringa in minuscolo: "${userWord}"`);

let palindromeWord = palindrome(userWord);

/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). 
Dichiariamo chi ha vinto.
*/

// Chiedo all'utente se vuole pari o dispari
let userOddEven = prompt('Scegli pari o dispari!');
console.log(`Scelta utente: ${userOddEven}`);
userOddEven = userOddEven.toLowerCase();

// Chiedo all'utente un numero da 1 a 5
let userNumber = Number(prompt('Scegli un numero da 1 a 5'));
console.log(`Numero utente: ${userNumber}`);

// Invoco la funzione per generare il numero casuale del pc
let pcRandomNumber = randomNumber(1, 5);
console.log(`Numero pc: ${pcRandomNumber}`)

let result = oddEvenWinner(userNumber, pcRandomNumber, userOddEven)

/*---------- FUNCTIONS ----------*/

// Funzione che controlla se la parola è palindroma
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

// Funzione che genera un numero random per il pc
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Funzione che determina il pari e dispari
function oddEvenWinner(num1, num2, str) {

    // Sommo i due numeri
    let sum = num1 + num2;

    // Controllo se il numero è pari
    if (sum % 2 == 0 && str == 'pari') {
        document.getElementById("odd-even-winner").innerHTML = `${sum}. Pari. Hai Vinto!`;
        console.log(`${sum}. Pari. Hai Vinto!`);
    } else if (sum % 2 == 0 && str == 'dispari') {
        document.getElementById("odd-even-winner").innerHTML = `${sum}. Pari. Hai Perso!`;
        console.log(`${sum}. Pari. Hai Perso!`);

        // Controllo se il numero è dispari
    } else if (sum % 2 !== 0 && str == 'dispari') {
        document.getElementById("odd-even-winner").innerHTML = `${sum}. Dispari. Hai Vinto!`;
        console.log(`${sum}. Dispari. Hai Vinto!`);
    } else if (sum % 2 !== 0 && str == 'pari') {
        document.getElementById("odd-even-winner").innerHTML = `${sum}. Dispari. Hai Perso!`;
        console.log(`${sum}. Dispari. Hai Perso!`);
    }
}