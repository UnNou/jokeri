

const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
document.body.appendChild(p);

const table = document.createElement('table');
document.body.appendChild(table);

const jokeriRivitElement = document.querySelector('table');
const arvottujenRivitElement = document.querySelector('span');
let arvottujenRivitMaara = 0;

document.body.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
      luoJaJokerit();
  }
});

function luoJaJokerit() {
    const jokeriRiviElement = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const jokeriNumeroElement = document.createElement('td');
        jokeriNumeroElement.textContent = Math.floor(Math.random() * 10);
        jokeriNumeroElement.style.backgroundColor = 'pink';
        jokeriNumeroElement.style.border = '1px solid black';
        jokeriRiviElement.appendChild(jokeriNumeroElement);
    }

    jokeriRivitElement.appendChild(jokeriRiviElement);
    arvottujenRivitMaara++;
    arvottujenRivitElement.textContent = arvottujenRivitMaara;
}

button.addEventListener('click', luoJaJokerit);
