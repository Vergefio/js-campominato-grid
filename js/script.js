/**Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const container = document.quareySelector('.container');
const numElements = 100
const numberSquare = []

for (let i = 1; i < 101; i++) {

  const square = document.createElement('div');
  square.className = 'square';
  console.log(square);
  square.innerHTML = i;

  square.addEventListener('click', function () {
    console.log('cliccato');
    this.classList.add('azzurro');
  })


  container.append(square);
}
