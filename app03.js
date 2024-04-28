
// 03 Loops e Tentativas

let read = require('readline-sync');

// //Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let numero = 1;
// while(numero <= 10){
//  console.log(`seu número ira aumentar! ${numero}`);
//     numero++;
// }

// //Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let numeroMenor = 10;
// while(numeroMenor >= 0){
//   console.log(`seu número ira diminuir! ${numeroMenor}`);  
//     numeroMenor--;
// }

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
/* let contagem = read.question('Digite um numero: ');
 console.clear();
 while(contagem >= 0){
    
     console.log(`falta pouco pra explosao! Falta ${contagem} segundos!`);
     contagem--;
    
 }
*/
 //Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
 let x = 0;
 let contagemProgresso = read.question('Digite um numero: ');
 while(x <= contagemProgresso){
         console.log(`ja temos ${x} para atingirmos a meta`)
         x++;
 }