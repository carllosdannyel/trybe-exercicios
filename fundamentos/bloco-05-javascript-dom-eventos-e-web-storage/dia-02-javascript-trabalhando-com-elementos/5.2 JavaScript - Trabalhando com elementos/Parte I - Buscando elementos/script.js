// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "green"

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector("#primeiroFilhoDoFilho").innerText = "Olá mundo";

// Acesse o primeiroFilho a partir de pai .
document.querySelector("#pai").firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.querySelector("#elementoOndeVoceEsta").previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.querySelector("#elementoOndeVoceEsta").nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .
document.querySelector("#pai").children[2];