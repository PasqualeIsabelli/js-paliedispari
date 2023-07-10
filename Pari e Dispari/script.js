// Pari e Dispari
/* 
  1. L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  3. Sommiamo i due numeri.
  4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
  5. Dichiariamo chi ha vinto.
*/


// Chiedo all'utente di inserire un numero da 1 a 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

// Genero un numero random da 1 a 5 per il pc
let computerNumber = Math.floor(Math.random() * 5) + 1;
console.log(computerNumber)

// Invoco la funzione
sumNumbers(userNumber, computerNumber)

// Funzione
function sumNumbers(userNum, pcNum) {
  // Sommo i due numeri
  let sum = userNum + pcNum;
  console.log(sum);

  // Stabilisco la condizione (se la somma è pari vince l'utente altrimenti vince il pc)
  if (sum % 2 === 0) {
    console.log ("Utente ha vinto");
  } else {
    console.log ("Pc ha vinto")
  }
}
