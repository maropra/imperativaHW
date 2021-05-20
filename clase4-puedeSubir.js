//Ejercicio PuedeSubir

function puedeSubir(altura, vieneAcompaniado, penalizada){
    if(altura < 1.40 && !vieneAcompaniado) {
        console.log(false)
    } else if(altura < 1.20 || altura >= 2.00){
        console.log(false)
    } else if(penalizada){
        console.log('No puede subir')
    }else {
        console.log(true)
    }

} 


puedeSubir(1.65, true, true);
puedeSubir(1, false);
puedeSubir(1, true);
puedeSubir(2.30, false);
puedeSubir(1.39, true, false);








/*

2) Modificar la función para impedir la subida al juego si la persona fue penalizada por
no respetar las normas y reglas del juego.*/