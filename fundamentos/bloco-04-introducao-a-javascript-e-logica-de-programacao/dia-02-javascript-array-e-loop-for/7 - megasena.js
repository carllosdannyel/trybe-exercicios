// Jogo da pessoa estudante

let jogoDaniel = [7, 14, 28, 22, 37, 49];

// Criando o jogo sorteado 

let numero1 = 7;
let numero2 = 15;
let numero3 = 22;
let numero4 = 49;
let numero5 = 37;
let numero6 = 14;

let sorteio = [numero1, numero2, numero3, numero4, numero5, numero6];


// Visualizar os dois arrays

//console.log('Jogo do Daniel: ' + jogoDaniel);
//console.log('Jogo Sorteado: ' + sorteio);


// Percorrer os elementos separadamente

let acertos = 0;

// for (inicialização; verificação; atualização)
for (let index = 0; index < jogoDaniel.length; index += 1) { 
    //mostrar na tela(nome do array[nome da variável criada para o for])
    console.log(jogoDaniel[index]);
    for (let index2 = 0; index2 < sorteio.length; index2++) { //index2++ - incremento em 1
        if (sorteio[index2] === jogoDaniel[index]) {
            acertos += 1;
            console.log('Acertouuu!');
        }
    }
}



// Exibir o resultado

console.log('Jogo do Daniel: ' + jogoDaniel);
console.log('Jogo Sorteado: ' + sorteio);
console.log('Número de acertos: ' + acertos);
