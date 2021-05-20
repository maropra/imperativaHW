// estoy en una competencia de clavados,
// en dos arrays se muestran los 5 clavados que hacen los competidores 
//en una competencia gana el que tiene el mejor promedio de clavado
// en otra gana el competidor con el mejor clavado

//agregar un puntaje mas
//participante1.puntajes.push(4)
//console.log(participante1.puntajes)

let participante1 = {
    nombre: 'Mar',
    apellido: 'Opradolce',
    puntajes: [5, 8, 9, 10, 3, 8],
    agregarPuntaje: function (puntajeNuevo) { // crear una funcion que me sume un puntaje nuevo
        if (puntajeNuevo >= 0 && puntajeNuevo <= 10) { //Si el puntaje nuevo esta entre 0 y 10
            this.puntajes.push(puntajeNuevo) //this para que busque dentro de participante1, agarro la propiedad puntaje y le hago un push que le agregue el nuevo puntaje
        } else {
            console.log(puntajeNuevo + ' es un puntaje invalido')
        }
    },
    calcularPromedio: function () {//No van los parametros como puntaje porque estoy dentro del objeto donde ya esta declarado
        let suma = 0
        for (let i = 0; i < this.puntajes.length; i++) {
            suma = suma + this.puntajes[i]
        }
        return suma / this.puntajes.length

    }
}

let participante2 = {
    nombre: 'Celi',
    apellido: 'Coco',
    puntajes: [5, 4, 6, 2, 3, 1],
    agregarPuntaje: function (puntajeNuevo) { // crear una funcion que me sume un puntaje nuevo
        if (puntajeNuevo >= 0 && puntajeNuevo <= 10) { //Si el puntaje nuevo esta entre 0 y 10
            this.puntajes.push(puntajeNuevo) //this para que busque dentro de participante1, agarro la propiedad puntaje y le hago un push que le agregue el nuevo puntaje
        } else {
            console.log(puntajeNuevo + ' es un puntaje invalido')
        }
    },
    calcularPromedio: function () {//No van los parametros como puntaje porque 
        let suma = 0
        for (let i = 0; i < this.puntajes.length; i++) {
            suma = suma + this.puntajes[i]
        }
        return suma / this.puntajes.length

    }
}

let participante3 = {
    nombre: 'Laura',
    apellido: 'Roja',
    puntajes: [10, 8, 9, 10, 10, 6],
    agregarPuntaje: function (puntajeNuevo) { // crear una funcion que me sume un puntaje nuevo
        if (puntajeNuevo >= 0 && puntajeNuevo <= 10) { //Si el puntaje nuevo esta entre 0 y 10
            this.puntajes.push(puntajeNuevo) //this para que busque dentro de participante1, agarro la propiedad puntaje y le hago un push que le agregue el nuevo puntaje
        } else {
            console.log(puntajeNuevo + ' es un puntaje invalido')
        }
    },
    calcularPromedio: function () {
        let suma = 0
        for (let i = 0; i < this.puntajes.length; i++) {
            suma = suma + this.puntajes[i]
        }
        return suma / this.puntajes.length

    }
}

//participante1.agregarPuntaje(10)
//participante1.agregarPuntaje(90)
//console.log(participante1.puntajes)
//console.log(participante1.calcularPromedio())

let participantes = [participante1, participante2, participante3]
//console.log(participantes)

function calcularGanador(arrayParticipantes) {
    let participanteGanador = arrayParticipantes[0]
    for (let i = 0; i < arrayParticipantes.length; i++) {
        const participanteActual = arrayParticipantes[i];
        if (participanteActual.calcularPromedio() >= participanteGanador.calcularPromedio())
            participanteGanador = participanteActual;
    }
    return participanteGanador;
}

let ganador = calcularGanador([participante1, participante2, participante3])
console.log('gano la competencia ' + ganador.nombre + ' con un promedio de ' + ganador.calcularPromedio())