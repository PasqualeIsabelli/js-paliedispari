// Palindroma
/* 
  1. Chiedere all'utente di inserire una parola
  2. Creare una funzione per capire se la parola inserita è palindroma.
*/

// Chiedo all'utente di inserire una parola
const word = prompt("Inserisci una parola");
console.log(word);

// Invoco la funzione
palindrome();

// Funzione
function palindrome() {
  // Converto la parola inserita dall'utente in un array
  const arrayWord = word.split("");
  console.log(arrayWord);
  // Rovescio l'array (dall'ultimo al primo indice)
  const reverseArray = arrayWord.reverse();
  console.log(reverseArray);
  // Trasformo l'array rovesciato in una stringa
  const reverseWord = reverseArray.join("");
  console.log(reverseWord);

  // Condizione
  // Se la parola al rovescio è uguale alla parola inserita dall'utente allora è palindroma
  // altrimenti non lo è
  if (reverseWord === word) {
    console.log(word + " è una parola palindroma");
  } else {
    console.log(word + " non è una parola palindroma");
  }
}
