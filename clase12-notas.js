let notas = [10, 4, 5, 8, 9, 7, 2]

let notasHastaEl100 = notas.map(function (numero) {
    return numero * 10;
})

// console.log(notasHastaEl100)

let notasAprobadas = notas.filter(function (numero) {
    return numero >= 7;
})

// console.log(notasAprobadas)

let sumaNotas = notas.reduce(function (acum, num) {
    return acum + num
})


let estudiantes = [
    { nombre: 'John', promedio: 8.5, aprobado: true },
    { nombre: 'Jane', promedio: 7, aprobado: true },
    { nombre: 'June', promedio: 3, aprobado: false },
]

let aprobados = estudiantes.filter(function (estudiante) {
    if (estudiante.aprobado == true) {
        return 'Felicitaciones'
    }
})

let desaprobados = estudiantes.filter(function (estudiante) {
    if (estudiante.aprobado !== true) {
        return 'Rendir recuperatorio'
    }
})

console.log(aprobados)
console.log(desaprobados)