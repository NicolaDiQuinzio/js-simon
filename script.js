// genera 5 numeri casuali e li visualizza nella pagina
let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 10));
}
let numbersList = document.getElementById("numbers");
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = numbers[i];
  numbersList.appendChild(li);
}

// avvia il timer di 30 secondi e nasconde i numeri
setTimeout(function () {
  numbersList.textContent = "";
}, 30000);

// controlla i numeri inseriti dall'utente e visualizza il risultato
function checkGuesses() {
  let guesses = document.getElementById("guesses").value.split(" ");
  let correct = 0;
  for (let i = 0; i < guesses.length; i++) {
    if (numbers.includes(parseInt(guesses[i]))) {
      correct++;
    }
  }
  let result = document.getElementById("result");
  if (correct == 5) {
    result.textContent = "Hai indovinato tutti i numeri!";
  } else if (correct > 0) {
    result.textContent = "Hai indovinato " + correct + " numeri.";
  } else {
    result.textContent = "Non hai indovinato nessun numero.";
  }
}
