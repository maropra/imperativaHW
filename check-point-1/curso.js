const {Alumno, alumno1, alumno2, alumno3, alumno4, alumno5} = require('./alumnos')

//console.log(alumno1)

let curso = {
    nombreCurso: 'Jardineria Bonsai',
    notaAprobacion: 5,
    faltasMax: 6,
    listaEstudiantes: [alumno1, alumno2, alumno3, alumno4, alumno5],
    agregarEstudiante: function (alumno){
       this.listaEstudiantes.push(alumno);
    },
    cursoAprobado: function(alumno){
        let promedio = alumno.calcularPromedio();
        if(promedio > this.notaAprobacion && alumno.cantidadFaltas < this.faltasMax ){
            return true;
        } else if(alumno.cantidadFaltas === this.faltasMax && promedio >= this.notaAprobacion + (this.notaAprobacion * 0.1)){
            return true;
        } else{
            return false;
        }
    },
    listaAprobados: function(){
        let resultados = [];
        for (let i = 0; i < this.listaEstudiantes.length; i++) {
            resultados.push(this.cursoAprobado(this.listaEstudiantes[i])) // Le estoy ejecutando cursoAprobado a cada elemento del array de listaEstudiantes. Y luego eso se lo agrego al array de los resultados.

        }
        return resultados;
    }

}

let maria = new Alumno ('Maria Perez', 2, [2, 8, 6, 9, 10, 6, 8])

curso.agregarEstudiante(maria)
//console.log(curso.listaEstudiantes)
console.log(curso.cursoAprobado(curso.listaEstudiantes[0]))
console.log(curso.listaAprobados())

