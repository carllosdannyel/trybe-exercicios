// Crie um irmão para elementoOndeVoceEsta .
let pai = document.querySelector("#pai");
let filho = document.createElement("section");
filho.innerHTML = "Olá, eu sou irmão de uma section."
filho.style.color = "green";
pai.appendChild(filho);
console.log(filho);

// Crie um filho para elementoOndeVoceEsta .
let pai2 = document.querySelector("#elementoOndeVoceEsta");
let filho2 = document.createElement("section");
filho2.innerText = "Olá, eu sou filho de uma section específica";
filho2.style.color = "red";
pai2.appendChild(filho2);
console.log(filho2);

// Crie um filho para primeiroFilhoDoFilho .
let pai3 = document.querySelector("#primeiroFilhoDoFilho");
let filho3 = document.createElement("section");
filho3.innerText = "Olá, eu sou filho de um filho de uma section"
filho3.style.color = "blue";
pai3.appendChild(filho3);
console.log(filho3)

// A partir desse filho criado, acesse terceiroFilho .
let refFilho3 = document.querySelectorAll('section')[4].parentNode.parentNode;
let irmao = refFilho3.nextSibling.nextSibling
console.log(irmao);