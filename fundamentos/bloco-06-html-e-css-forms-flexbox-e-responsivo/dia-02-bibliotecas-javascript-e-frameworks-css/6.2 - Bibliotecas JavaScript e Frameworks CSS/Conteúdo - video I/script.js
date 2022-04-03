// Documentação da biblioteca moment https://momentjs.com/

let moment = require("moment");

let brasilTetra = moment("17071994", "DDMMYYYY");
let fromNow = brasilTetra.fromNow();

console.log('Ouvimos o "É TETRAA!!" há: ' + fromNow);

// Documentação da biblioteca cheet.js https://namuol.github.io/cheet.js/

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  alert('Voilà!');
});