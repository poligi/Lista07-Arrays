/*
Criar um array e percorrê-lo utilizando o loop for of
-a. Crie um array com o nome "numeros" e adicione 5 números de
sua escolha
-b. Utilize o loop for of para percorrer o array e exibir a soma dos
números na tela
 */

const numeros = [5, 8, 7, 9, 2]
let soma = 0

for (let numero of numeros) {
    soma += numero
}

document.write(`Os números são ${numeros} <br>`)
document.write(`A soma dos números é ${soma}`)