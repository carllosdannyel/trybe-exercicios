let idade = 17;

//se (essa condição for verdadeira) { faça isso }
if (idade >= 18) {
    console.log("Pode dirigir!");
}

//senão (se a condição acima for falsa) { faça aquilo }
else {
    console.log("Não pode dirigir!");
}

let number1 = 21;
let number2 = 51;

if (number1 > number2) {
  console.log('O primeiro número é maior.');
} 
else if (number1 < number2) {
  console.log('O segundo número é maior.');
} 
else {
  console.log('Os números são iguais.');
}

// AND
if (number1 === 23 && number2 === 55) {
  console.log('Acertei');
} else {
  console.log('Errei');
}

// OR
if (number1 === 23 || number2 === 55) {
  console.log('Acertei');
} else {
  console.log('Errei');
}

// NOT
if (number1 !== 23) {
  console.log('Diferente');
} else {
  console.log('Igual');
}