let alumnos = {
    nombre: 'Sofia Fernandez',
    cantidadFaltas: 5,
    notas: [7, 8, 6, 9, 10, 6, 8],
    calcularPromedio: function () {
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma = suma + this.notas[i];
        }
        return suma / this.notas.length;
    },
    faltar: function () {
        return ++this.cantidadFaltas
    }
};

//1. sumar todas los indices del array. = En la primer vuelta, la variable suma sera igual al indice 0 (i = 0 + indice-0 = 7). En la segunda vuelta suma sera igual a si misma + el valor del indice 1 (suma = 7 + indice-1 = 8), esto es igual a 15.
//2. dividir esa suma por el largo del array.

function Alumno(nombre, cantidadFaltas, notas) {
    this.nombre = nombre;
    this.cantidadFaltas = cantidadFaltas;
    this.notas = notas;
    this.calcularPromedio = function () {
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma = suma + this.notas[i];
        }
        return suma / this.notas.length;
    };
    this.faltar = function () {
        return ++this.cantidadFaltas
    };
};

let alumno1 = new Alumno ('Mar Opradolce', 2, [6, 6, 6, 5, 10, 9, 8]);
let alumno2 = new Alumno ('Celi Rojas', 4, [10, 10, 10, 9, 10, 9, 8]);
let alumno3 = new Alumno ('Gonza Dapuente', 1, [2, 3, 2, 5, 4, 5, 3]);
let alumno4 = new Alumno ('Silvia Lauria', 0, [7, 6, 8, 7, 10, 9, 8]);
let alumno5 = new Alumno ('Pablo Guillermo', 6, [1, 10, 2, 3, 10, 10, 10]);



module.exports = {Alumno, alumno1, alumno2, alumno3, alumno4, alumno5};


