const firstName = prompt('Scrivi il tuo nome');
const lastName = prompt('Scrivi il tuo cognome');
const favColor = prompt('Scrivi il tuo colore preferito');

document.getElementById('message').innerHTML = `La tua password è ${firstName}${lastName}${favColor}23`;