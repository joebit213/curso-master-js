//--------------Object literal
// const cliente = {
//   nombre: "juan",
//   saldo: "200",
//   tipoCliente : function() {
//     let tipo;

//     if(this.saldo > 1000) {
//       tipo = "Gold"
//     } else if(this.saldo > 5000) {
//       tipo = "Platinum"
//     }
//     else {
//       tipo = "Normal"
//     }
//     return tipo
//   }
// }

// console.log(cliente.tipoCliente())


//------------Objeto metodo alternativo

// function Cliente(nombre, saldo) {
//   this.nombre = nombre;
//   this.saldo = saldo
//   this.tipoCliente=  function() {
//     let tipo
//     if(this.saldo > 1000) {
//       tipo = 'Gold'
//     }else if( this.saldo > 5000) {
//       tipo = 'Platinum'
//     }else {
//       tipo = 'Normal'
//     }
//     return tipo
//   }
// }

// const persona = new Cliente('Pedro', 20000)

// console.log(persona)

//--------- Constructores crear un string/objeto usando constructores
// const nombre = 'pepe'
// const nombre2 = new String('pepe')

// console.log(typeof nombre)
// console.log(nombre2)

// if( nombre == nombre2) {
//   console.log('Si, iguales')
// }else  {
//   console.log('No!, diferentes')
// }

//Numeros
const numero1 = 20
const numero2 = new Number(20)

//Bolean
const boolean1 = true
const boolean2 = new Boolean(true)

//Funciones 
const funcion1 = function(a,b) {
  return a+b
}

const function2 = new Function('a', 'b', 'c', 'return 1+2')

//Objetos 
const persona1 = {nombre: "juan"}

const persona2 = new Object({nombre: "juan"})

//Arrays
const array1 = [1,2,3,4];
const array2 = new Array(1,2,3,4,5)

console.log(array1)
console.log(array2)