const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const ulList = document.getElementById('phrases-list');

function insereFraseNoDom() {
  const frasesLista = JSON.parse(localStorage.getItem('phrases'));
  const listaTamanho = frasesLista.length - 1;
  const fraseTexto = frasesLista[listaTamanho];
  const frase = document.createElement('li');
  frase.innerText = fraseTexto;
  ulList.appendChild(frase);
}

function adicionaFraseNoLocalStorage() {
  const listaAntiga = JSON.parse(localStorage.getItem('phrases'));
  const fraseTexto = input.value;
  listaAntiga.push(fraseTexto);
  localStorage.setItem('phrases', JSON.stringify(listaAntiga));
  insereFraseNoDom();
}

function iniciaRenderizacao() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const frasesLista = JSON.parse(localStorage.getItem('phrases'));
    const listaTamanho = frasesLista.length - 1;
    for (let index = 0; index <= listaTamanho; index += 1) {
      const elementoDeLista = document.createElement('li');
      elementoDeLista.innerText = frasesLista[index];
      ulList.appendChild(elementoDeLista);
    }
  }
}

button.addEventListener('click', adicionaFraseNoLocalStorage);

window.onload = function() {
  iniciaRenderizacao();
};