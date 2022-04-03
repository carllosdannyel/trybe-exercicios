// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

// encontrando o elemento paiDoPai
let pai = document.querySelector("#pai");
// console.log(pai.children[0]);

// removendo o primeiroFilho
let filho = document.getElementById("primeiroFilho");
pai.removeChild(filho);
// console.log(pf);

// removendo o segundoEUltimoFilhoDoFilho
let pai1 = document.getElementById("elementoOndeVoceEsta");
let filho2 = document.getElementById("segundoEUltimoFilhoDoFilho");
pai1.removeChild(filho2);
console.log(document.getElementById("paiDoPai"));

// removendo o terceiroFilho

let filho3 = document.getElementById("terceiroFilho");
pai.removeChild(filho3);

// removendo o quartoEUltimoFilho
let filho4 = document.getElementById("quartoEUltimoFilho");
pai.removeChild(filho4);