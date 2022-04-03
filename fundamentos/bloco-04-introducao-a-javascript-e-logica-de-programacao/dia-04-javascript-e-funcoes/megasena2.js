// 1. Criar uma função para gerar UM número aleatório.

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    return randomNumber;
}

// 2. Criar um jogo completo, com 6 números.

function generateGame() {
    let megaSenaGame = [];
    for (let index = 1; index <= 6; index += 1) {
        megaSenaGame.push(generateRandomNumber());
    }
    return megaSenaGame;
}

// 3. Verificar o número de acertos

let jogoDaniel = [7, 14, 28, 22, 37, 49];

function checkNumberOfHits(person, megaSenaGame) {
    let numberOfHits = 0;
    for (let index = 0; index < person.length; index += 1) {
        for (let index2 = 0; index2 < megaSenaGame.length; index2 += 1) {
            if (megaSenaGame[index2] === person[index]) {
                numberOfHits += 1;
            }
        }
    }
    return numberOfHits;
}
// 4. Gerar o jogo

console.log('Jogo sorteado: ' + generateGame());
console.log('Jogo da pessoa: ' + jogoDaniel);
console.log('Número de acertos: ' + checkNumberOfHits(jogoDaniel, generateGame));