let btnMais1 = document.getElementById('maisEqui1')
let btnMenos1 = document.getElementById('menosEqui1')
let btnMais2 = document.getElementById('maisEqui2')
let btnMenos2 = document.getElementById('menosEqui2')


let restart = document.getElementById('restart')
let perso = document.getElementById('personalizacao')
let truco = document.getElementById('truco')

//CONFIGURANDO AS VARIAVEIS

let cont1 = document.getElementById('contador1')
    cont1 = 0

let cont2 = document.getElementById('contador2')
    cont2 = 0

//BOTÃO ADICIONAR E REMOVER 1
btnMais1.addEventListener("click", function() {
   cont1++
   contador1.innerHTML = cont1
   if(cont1 === 11){
        cont1 = -1;
   }

})

btnMenos1.addEventListener("click", function() {
    if(cont1 != 0){
        cont1--
        contador1.innerHTML = cont1
    }
   
})

//BOTÃO ADICIONAR E REMOVER 2
btnMais2.addEventListener("click", function() {
   cont2++
   contador2.innerHTML = cont2
   if(cont2 === 11){
        cont2 = -1;
   }

})

btnMenos2.addEventListener("click", function() {
    if(cont2 != 0){
        cont2--
        contador2.innerHTML = cont2
    }
   
})

//BOTÃO DE REINICIAR --- EM PRODUÇÃO 
// restart.addEventListener("click", function() {
//     cont1 = 0
//     cont2 = 0
// })

//TRUCOOOO!!!

