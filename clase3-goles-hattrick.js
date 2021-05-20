// Crear las variables nombreJugador, golesJugador, precioEnDolares 
let nombreJugador;
let golesJugador = 0;
let precioEnDolares = 0;

// Crear la funcion hacerGol: que incremente la cantidad de goles del jugador en 1 e imprima por pantalla GOL!!
// La funcion debe incrementar en 10.000 dol el valor del jugador

function hacerGol (){
    golesJugador++
    precioEnDolares = precioEnDolares + 10000
    console.log('GOL!!!');
}

// imprimir por pantalla la funcion y ver la nueva cant de goles y valor del juador.
hacerGol()
console.log(golesJugador)
console.log(precioEnDolares)

hacerGol()
console.log(golesJugador)
console.log(precioEnDolares)

hacerGol()
console.log(golesJugador)
console.log(precioEnDolares)

hacerGol()
console.log(golesJugador)
console.log(precioEnDolares)

hacerGol()
console.log(golesJugador)
console.log(precioEnDolares)

// Crear la funcion hattrick
// que ejecute tres veces la funcion gol
// aumenta el valor del jugador en un 10% extra del valor actual
 function hattrick (){
     hacerGol()
     hacerGol()
     hacerGol()
     precioEnDolares = precioEnDolares + (precioEnDolares * 0.1)
 }

 hattrick()
 console.log(golesJugador)
 console.log(precioEnDolares)