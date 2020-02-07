//SYMBOL

//como es un dato primitivo de JS no es necesario poner new ((new es para un objeto))
// const simbolo = Symbol()
// const simbolo2 = Symbol('Descripcion aqui')

// //cada symbol que se genera es diferente al otro (son unicos)
// console.log(Symbol() === Symbol())

// console.log(simbolo2)

//////////////////////////////////////////////////////////////////////
let nombre = Symbol()
let apellido = Symbol()

//crear un persona 
let persona = {}
persona.nombre = 'Pepe'

//agregar el symbol como parte del objeto 
persona[nombre] = 'Pepes'
persona[apellido] = 'De la cruz'
persona.saldo = 100
persona.tipoCliente = 'Normal'

//console.log(persona.nombre)
//console.log(persona[nombre])

//los symbols no puedes ser iterados de esta forma
for (let i in persona) {
   console.log(`${i} : ${persona[i]}`)
}