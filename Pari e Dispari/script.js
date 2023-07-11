// Pari e Dispari
/* 
  1. L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  3. Sommiamo i due numeri.
  4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
  5. Dichiariamo chi ha vinto.
*/

// Chiedo all'utente di scegliere tra pari o dispari
const evenOdd = prompt("Scegli pari o dispari");
console.log(evenOdd);

// Chiedo all'utente di inserire un numero da 1 a 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

// Invoco la funzione del numero del pc
getRandomNum();

// Funzione numero pc
function getRandomNum() {
  // Genero un numero random da 1 a 5 per il pc
  let computerNumber = Math.floor(Math.random() * 5) + 1;
  console.log(computerNumber);
  return computerNumber;
}

// Invoco la funzione della somma dei due numeri
let sum = sumNumbers();

// Funzione
function sumNumbers(userNumber, computerNumber) {
  // Sommo i due numeri
  const sum = userNumber + computerNumber;

  // Stabilisco la condizione (se la somma è pari vince l'utente altrimenti vince il pc)
  if (sum % 2 === 0) {
    console.log("La somma è pari");
  } else {
    console.log("La somma è dispari")
  }

  if (sum % 2 === 0 && evenOdd === "pari") {
    console.log("Utente ha vinto");
  } else if (sum % 2 !== 0 && evenOdd === "dispari") {
    console.log("Utente ha vinto");
  } else {
    console.log("Pc ha vinto");
  }

  return sum;
}
