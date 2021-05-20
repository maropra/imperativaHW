let films = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

console.log(films[1])

console.log(films[0].toUpperCase())
console.log(films[1].toUpperCase())
console.log(films[2].toUpperCase())
console.log(films[3].toUpperCase())
console.log(films[4].toUpperCase())

cartoons.pop()

function moverUltimoElemento (arrayUno, arrayDos){
    if(arrayUno.length > 0){
        let ultimoElemento = arrayDos.pop();
        arrayUno.push(ultimoElemento)
    } 
}

moverUltimoElemento(films, cartoons)
moverUltimoElemento(films, cartoons)
moverUltimoElemento(films, cartoons)
moverUltimoElemento(films, cartoons)
console.log(films)
console.log(cartoons)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 7];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 7];

function compararRating (arrayUno, arrayDos, indice){
   if(arrayUno [indice] == arrayDos [indice]){
    console.log('Los rating son iguales')
   } else{
       console.log('Los ratings son distintos')
   }
}

compararRating(asiaScores, euroScores, 0)
compararRating(asiaScores, euroScores, 1)
compararRating(asiaScores, euroScores, 2)
compararRating(asiaScores, euroScores, 3)
compararRating(asiaScores, euroScores, 4)
compararRating(asiaScores, euroScores, 5)
compararRating(asiaScores, euroScores, 6)
compararRating(asiaScores, euroScores, 7)
compararRating(asiaScores, euroScores, 8)