// Variables Arrays

let cardSuits = ["♦", "♥", "♠", "♣"];
let cardNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

//variables del documento que se recogen a traves del id del html
let number = document.getElementById("number");
let suitTop = document.getElementById("suitTop");
let suitBottom = document.getElementById("suitBottom");
let button = document.getElementById("btn");

//funcion para generar los simbolos aleatorios que vamos a aplicar al html
let randomSuit = () => {
  let indexCardSuit = Math.floor(Math.random() * cardSuits.length); //esto es numero que es igual al index del array de cardSuits
  let randomCardSuit = cardSuits[indexCardSuit];

  suitTop.innerText = randomCardSuit; //simbolo de la parte superior
  suitBottom.innerText = randomCardSuit; //simbolo parte inferior
};

//funcion para generar los numeros aleatorios que vamos a aplicar al html
let randomNum = () => {
  let indexCardNum = Math.floor(Math.random() * cardNumbers.length);
  let randomCardNumber = cardNumbers[indexCardNum];
  number.innerText = randomCardNumber;
};

// Eventos para que cuando le de al boton genere los randoms
button.addEventListener("click", randomSuit);
button.addEventListener("click", randomNum);

// Eventos para que la pagina cargue los randoms tras darle al boton.
window.addEventListener("load", randomSuit);
window.addEventListener("load", randomNum);

/*PARTE EXTRA*/

let timer; // Variable que almacena el temporizador.

// Función para generar una nueva carta
let generateNewCard = () => {
  randomSuit();
  randomNum();
};

// Función para iniciar el temporizador cada 3 segundos
let startTimer = () => {
  timer = setInterval(generateNewCard, 3000); // 3000 milisegundos = 3 segundos
};

// Función para detener el temporizador
function stopTimer() {
  clearInterval(timer);
}

//Eventos que escuchan cuando le doy al boton
button.addEventListener("click", function() {
  stopTimer(); // Detener el temporizador cuando se hace clic en el botón
  generateNewCard(); //genera una nueva carta random
  startTimer(); // Iniciar el temporizador nuevamente
});

// Muestra lo que hace el evento en la pagina, lo que carga
window.addEventListener("load", function() {
  generateNewCard(); //Genera una carta al cargar la página
  startTimer(); // Iniciar el temporizador al cargar la página
});
