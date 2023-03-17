//*Planetas

const readline = require("readline-sync")

var escolha = 0

console.log("---SEU PESO NO PLANETA: ---")
console.log(" Planetas         Gravidade Relativa ")
console.log("1) Mércurio             0,37 ")
console.log("2) Venus                0,88")
console.log("3) Marte                0,38")
console.log("4) Júpiter              2,64")
console.log("5) Saturno              1,15 ")


var resposta = readline.questionInt("Escolha um planeta: ")

switch(resposta){
 case 1:
 escolha = 1
 console.log("1) Mércurio") 
 var qtd = Number(readline.question("Seu peso "))
 var formula0 = qtd /10 * 0.37
 console.log(`O seu peso neste planeta é: Kg ${formula0} `)
break

case 2:
escolha = 2
console.log("2) Venus")
var qtd = Number(readline.question("Seu peso "))
var formula1 = qtd /10 * 0.88
console.log(`O seu peso neste planeta é: Kg ${formula1}`)
break 

case 3:
escolha = 3
console.log("3) Marte")
var qtd = Number(readline.question("Seu peso "))
var formula2 = qtd /10 * 0.38
console.log(`O seu peso neste planeta é: Kg ${formula2}`)
break

case 4:
escolha = 4
console.log("4) Júpiter")
var qtd = Number(readline.question("Seu peso "))
var formula3 = qtd /10 * 2.64
console.log(`O seu peso neste planeta é: Kg ${formula3}`)
break  

case 5:
escolha = 5
console.log("5) Saturno")
var qtd = Number(readline.question("Seu peso "))
var formula4 = qtd /10 * 1.15
console.log(`O seu peso neste planeta é: Kg ${formula4}`)
break  

case 6:
escolha = 6
console.log("6) Urano")
var qtd = Number(readline.question("Seu peso "))
var formula5 = qtd /10 * 1.17
console.log(`O seu peso neste planeta é: Kg ${formula5}`)
break  
}