// ex 1
   
// Crie uma variável chamada nomeCompleto e atribua a ela o seu nome,
// após isso, imprima o valor no console utilizando a função
// console.log(nomeCompleto)

console.log("Desafio 1")

let nomeCompleto = "Pedro Brandão Fonseca Michelini Muniz"

console.log(nomeCompleto)

// ex 2

// Você irá criar duas variáveis chamadas numeroA e numeroB atribuindo
// valores numéricos para ambas. Após isso crie uma terceira variável
// chamada resultado atribuindo a multiplicação das duas variáveis
// anteriores e imprima o valor do resultado no console

console.log("Desafio 2")

let numeroA = 10
let numeroB = 5
let resultado = numeroA*numeroB

console.log(resultado)

//ex 3

// Você deverá criar uma função chamada saudacao que ao executá-la
// deverá imprimir no console a seguinte mensagem: “Oi eu sou o Goku!”

console.log("Desafio 3");

function saudacao() {
  console.log("Oi eu sou o Goku!");
}

saudacao ()

// ex 4

// Crie uma função chamada multiplica que recebe dois parâmetros
// numéricos. Ela deverá exibir a multiplicação desses dois parâmetros no
// console

console.log("Desafio 4")

function multiplica (a,b){
    return a*b
}

console.log (multiplica(50,10))

// ex: 5

// Crie uma função chamada podeDirigir que receba como parâmetro da
// idade em formato número, e exiba no console “Você pode dirigir” caso o
// valor seja maior ou igual a 18. Caso contrário irá exibir “Você não pode
// dirigir”

console.log("Desafio 5")

function podeDirigir (idade) {
    if (idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
}
}

podeDirigir(25)

// ex: 6

// Você deve criar um loop usando o for, que exibe no console a sequência
// de números do 0 ao 20.

console.log("Desafio 6")

for (let i = 0; i <= 20; i++){
    console.log(i)
}

// ex: 7

// Você deve criar um loop usando o for, que exibe no console apenas os
// números ímpares da sequência de números do 0 ao 20.

console.log("Desafio 7")

for (let i = 0; i <= 20; i++){
    if (i % 2 != 0) {
    console.log(i)
}
}

// ex: 8

// Crie uma função chamada tabuada que irá receber um número inteiro
// como parâmetro e exibir no console a tabuada desse número 1 ao 10.

console.log("Desafio 8")

function tabuada(fator) {
    for (let i = 1; i <= 10; i++)
    console.log(fator + " x " + i + " = " + (fator*i));
}

tabuada(5)

// ex: 9

// Crie uma função chamada converterEmHoras que receba um número em
// minutos como parâmetro e irá exibir a quantidade em horas.

console.log("Desafio 9")

function converterEmHoras (minutos){
    console.log(minutos / 60 + " hora(s)")
}

converterEmHoras(300)
