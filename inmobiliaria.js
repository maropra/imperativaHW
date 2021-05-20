let fs = require('fs');
const deptosJSON = fs.readFileSync('departamentos.json', 'utf-8');
const deptos = JSON.parse(deptosJSON);
// console.log(deptos)

//1. variable conteniendo un array con todos los departamentos.

//2. Crear un objeto literal que represente la inmobiliaria Este objeto contendrá, una propiedad con el listado de departamentos obtenido en el punto anterior y las funcionalidades que nos solicitan a continuación:

//3. Agregar un método departamentosDisponibles que permita consultar disponibilidad, es decir, que devuelva una lista de los departamentos disponibles.

//4. Agregar un método listarDepartamentos que reciba como parámetro un array de departamentos y los imprima por consola. Este método deberá imprimir por cada elemento: El id, El precio, disponible (en caso de ser true mostrar “Disponible” caso contrario “Alquilado”)

//5. Agregar un método buscarPorId que permita buscar él departamento en función de su identificador. Este método debe devolver un departamento en caso de encontrar el identificador.

//6. Agregar un método buscarPorPrecio que permita filtrar los departamentos disponibles, siempre y cuando el precio sea menor o igual al precio enviado como argumento. Este método debe usar departamentosDiponibles. Este método debe devolver una lista de departamentos.

//7. Agregar un método que permita ordenar por precio de menor a mayor según él precioAlquiler y devolverlo.

//8. Agregar un método precioConImpuesto que permita realizar un incremento del precioAlquiler a todos los departamentos, tanto disponibles como no disponibles, según un porcentaje que se envía como argumento al momento de la invocación del método. Ejemplo : PrecioConImpuesto(10), deberá incrementar el precioAlquiler de Todos los departamentos un 10%. Resultado esperado: un array con los precios con el impuesto sumado.

//9. Agregar un método que permita alquilar un departamento. Este método recibe por parámetro el id del departamento y actualiza la propiedad del departamento en false. Resultado esperado: que quede actualizada la propiedad departamentos de la inmobiliaria, donde el departamento que alquilo no está disponible.

//10. Agregar un método que permita calcular el ingreso en el flujo de caja que tendría la empresa cuando se pague el alquiler de los departamentos. Resultado esperado: suma del alquiler de todos los departamentos que estén alquilados.

//11. Agregar un método comentar que permita realizar un comentario, (la propiedad comentarios es un array de objetos dentro de el objeto departamento) a un departamento indicando los siguientes datos: ○ comentario = string ○ puntuacion = number (1 ... 5) . Resultado esperado: un mensaje “Comentario realizado con éxito”;

let inmobiliaria = {
    departamentos: deptos,
    departamentosDisponibles: function () {
        let deptosDisponibles = this.departamentos.filter(departamento => departamento.disponible)
        return deptosDisponibles;
    },
    listarDepartamentos: function () {
        this.departamentos.forEach(departamentos => {
            console.log(departamentos.id)
            console.log(departamentos.precioAlquiler)
            if (departamentos.disponible) {
                console.log('Disponible')
            } else {
                console.log('Alquilado')
            }
        });
    },
    buscarPorID: function (id) {
        let deptoEncontrado = this.departamentos.find(departamento => id === departamento.id);
        return deptoEncontrado;
    },
    buscarPorPrecio: function (precio) {
        let deptosEncontrados = this.departamentosDisponibles().filter(departamento => precio >= departamento.precioAlquiler);
        return deptosEncontrados;
    },
    ordenarPorPrecio: function () {
        let deptosOrdenados = this.departamentos.sort((a, b) => a.precioAlquiler - b.precioAlquiler);
        return deptosOrdenados;
    },
    precioConImpuesto: function (porcentaje) {
        let precioNuevo = this.departamentos.map(departamento => departamento.precioAlquiler + ((departamento.precioAlquiler * porcentaje) / 100))
        return precioNuevo
    },
    alquilarDepto: function (id) {
        let deptoEncontrado = this.buscarPorID(id)

        if (deptoEncontrado !== undefined) {
            deptoEncontrado.disponible = false;
        }
    },
    sumaAlquileres: function () {
        let deptosAlquilados = this.departamentos.filter(departamento => !departamento.disponible);
        // console.log(deptosAlquilados) = Array de objetos
        return deptosAlquilados.reduce((acum, departamento) => acum + departamento.precioAlquiler, 0)
    },
    comentar: function (id, comentario) {
        let deptoEncontrado = this.departamentos.find(departamento => departamento.id === id);

        if (deptoEncontrado !== undefined) {
            deptoEncontrado.comentarios.push(comentario);
        }

        console.log('Comentario realizado con exito');
    },
    preferenciasCliente: function (habitaciones, mascotas, personas, precio) {
        let deptosDisponibles = this.departamentosDisponibles();

        let deptosAptos = deptosDisponibles.filter(departamento => habitaciones === departamento.cantidadHabitacion && mascotas === departamento.aceptaMascotas && personas >= departamento.cantidadPersonas && precio >= departamento.precioAlquiler);

        return deptosAptos;
    }

}


//console.log(inmobiliaria.departamentosDisponibles())

//inmobiliaria.listarDepartamentos()

//console.log(inmobiliaria.buscarPorID(7))

//console.log(inmobiliaria.buscarPorPrecio(5000))

//console.log(inmobiliaria.ordenarPorPrecio())

//console.log(inmobiliaria.precioConImpuesto(10))

//inmobiliaria.alquilarDepto(1)
//console.log(inmobiliaria.departamentos[0])

//console.log(inmobiliaria.sumaAlquileres())

// inmobiliaria.comentar({comentario: 'Sucio', puntuacion: 2}, 5)
// console.log(inmobiliaria.departamentos) NO FUNCIONA 

//console.log(inmobiliaria.preferenciasCliente(2, true, 6, 20000))

