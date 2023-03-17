var MQ = document.querySelector('#MQ')
var BB = document.querySelector('#BB')
var TB = document.querySelector('#TB')
var TF = document.querySelector('#TF')
var BBS = document.querySelector('#BBS')


var wasi = document.getElementsByName('wasi')
var country = document.getElementsByName('country')
var resultado = document.querySelector('#resultado')

//sexo[0].style.width = '50px'

// se modificia la parte de abajo del texto
//resultado.innerHTML = '<h3>teste</h3>'
var button = document.querySelector('#button')
var img = document.querySelector('img')

button.addEventListener('click',()=>{
let opcao = text()
let anoAtual = date.getFullYear()
let dataNascimento = Number(dataNasc.value)

let idade = anoAtual - dataNascimento

if(sexo[0].checked){
    resultado.innerHTML = `<h3> homem com
     ${idade} anos </h3>`
      if(idade < 5){
        resultado.innerHTML = `<h3> Menino com
        ${idade} anos </h3>`
        img.src = 'https://mario.wiki.gallery/images/thumb/5/58/BabyMarioSluggers.png/1200px-BabyMarioSluggers.png'
      }  else if(idade < 11){
        resultado.innerHTML = `<h3> Menino com 
        ${idade} anos </h3>`
        img.src = 'https://media.istockphoto.com/id/1290047919/photo/confident-boy-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=8Z0kkpOCUJj4Ec9ybE05v61v-1Um7kOpaT3L9BtWQSs='

      }  else if(idade < 24){
        img.src = 'https://media.ambito.com/p/1625cc7be15fc3ca270ff7bf97433d5b/adjuntos/239/imagenes/040/413/0040413027/julian-alvarez.jpg'
    
      }  else if(idade < 50){
         img.src = 'http://conteudo.imguol.com.br/c/esporte/38/2022/10/11/pep-guardiola-tecnico-do-manchester-city-na-partida-contra-o-copenhagen-pela-champions-1665511078756_v2_1920x1279.jpg'
      }  else{
         img.src = 'https://s.hs-data.com/picmon/30/42GO_853XQN_lo.jpg'
          }      


} else if(sexo[1].checked){
    resultado.innerHTML = `<h3> Mulher com ${idade} anos </h3>`

         if(idade < 5){
        resultado.innerHTML = `<h3> Menina com
        ${idade} anos </h3>`
        img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e738c17-7f3c-422e-8225-f8c782b08626/df2impg-a9e0ecf1-518b-4fd2-b3d7-ff4c9449ff7e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlNzM4YzE3LTdmM2MtNDIyZS04MjI1LWY4Yzc4MmIwODYyNlwvZGYyaW1wZy1hOWUwZWNmMS01MThiLTRmZDItYjNkNy1mZjRjOTQ0OWZmN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TxIqkUTzo3cir4WpPuGKNk-OIzSx8Ue6jDQamNXGNDA'
      }  else if(idade < 11){
        resultado.innerHTML = `<h3> Menina com 
        ${idade} anos </h3>`
        img.src = 'https://e1.pxfuel.com/desktop-wallpaper/1002/562/desktop-wallpaper-pin-di-cinematic-adventures-elsa-and-anna-baby.jpg'

      }  else if(idade < 24){
        img.src = 'https://shows.net.br/wp-content/uploads/2022/08/tini.jpg'
    
      }  else if(idade < 50){
         img.src = 'https://static.onecms.io/wp-content/uploads/sites/21/2022/08/08/karol.png'
      }  else{
         img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Queen_Elizabeth_II_in_March_2015.jpg/1200px-Queen_Elizabeth_II_in_March_2015.jpg'
          }      }
})
