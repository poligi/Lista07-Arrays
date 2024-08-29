/*
Utilizar os métodos push, pop, unshift e shift para manipular um
array
-a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
de sua escolha
-b. Utilize o método push para adicionar uma fruta no final do
array
-c. Utilize o método pop para remover a última fruta do array
-d. Utilize o método unshift para adicionar uma fruta no início do
array
-e. Utilize o método shift para remover a primeira fruta do array
-f. Exiba o array resultante na tela
 */

const frutas = [' Morango', ' Ameixa', ' Abacaxi']

frutas.push('Bergamota')
frutas.pop()
frutas.unshift('Laranja')
frutas.shift()

document.write(`${frutas}`)