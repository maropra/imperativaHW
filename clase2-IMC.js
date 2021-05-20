// calcular el IMC de los clientes
let nomNico = 'Nicolas Lopez';
let edadNico = 27;
let pesoNico = 83.5;
let alturaNico = 170;
let tienePrepagaNico = true;
let imcNico = null;

let nomEsteban = 'Esteban Piazza';
let edadEsteban = 28;
let pesoEsteban = 80.1;
let alturaEsteban = 176;
let tienePrepagaEsteban = true;
let imcEsteban = null;

let nomJose = 'Jose Fermoso';
let edadJose = 33;
let pesoJose = 63.7;
let alturaJose = 153;
let tienePrepagaJose = false;
let imcJose = null;

//convierto la altura de cm a m
function alturaEnMetros(altura) {
    return altura / 100
}
// calculo imc = peso / altura ** 2
function calcularIMC(peso, altura) {
    return Math.round(peso / (alturaEnMetros(altura) ** 2))
}

console.log(calcularIMC(pesoNico, alturaNico))
//console.log(calcularIMC(pesoEsteban, alturaEsteban))
//console.log(calcularIMC(pesoJose, alturaJose))

// Ahora lo voy a hacer usando funcion constuctora y objetos literales. 

// Creo f(x) constructora
function Cliente(nombre, edad, peso, altura, tienePrepaga) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
    this.tienePrepaga = tienePrepaga;
    this.alturaEnMetros = function () {
        return this.altura / 100
    };
    this.calcularIMC = function () {
        return Math.round(this.peso / (this.alturaEnMetros(this.altura) ** 2))
    }

}

//Creo los clientes como objetos literales = instanciar objetos
let mar = new Cliente('Mar Opradolce', 25, 60, 168, false)
let celi = new Cliente('Celi Rojas', 30, 70, 158, true)

//console.log(`El imc del cliente Mar es de ${mar.calcularIMC(mar.peso, mar.altura)}`)
//console.log(`El imc de la cliente Celi es de ${celi.calcularIMC(celi.peso, celi.altura)}`)