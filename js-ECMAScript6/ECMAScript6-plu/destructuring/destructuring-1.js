// const cliente = {
//   nombre: 'Alejandra',
//   tipo: 'Premium'
// }

// //variables en scope globlal
// let nombre = 'Pedro';
// let tipo = 'Oro';

// ( {nombre, tipo} = cliente );

// console.log(nombre);

//////////////////////////////////////////////////////////////////////////

// const cliente = {
//   tipo: 'Premium',
//   nombre: 'Antonio',
//   datos: {
//     ubicacion: {
//       ciudad: 'Jalisco',
//       pais: 'Mexico'
//     },
//     cuenta: {
//       desde: '10-12-2012',
//       saldo: '4000'
//     }
//   }
// }

// let { datos: {ubicacion} } = cliente

// console.log(ubicacion)
// console.log(ubicacion.ciudad)
// console.log(ubicacion.pais)

// let { datos: {cuenta} } = cliente

// console.log(cuenta)
// console.log(cuenta.desde)
// console.log(cuenta.saldo)


//////////////////////////////////////////////////////////////////////////
//valor por defecto por si no podemos acceder a ese dato o no existe
// const cliente = {
//   nombre: 'Pedro',
//   tipo: 'Premium'
// }

// let { nombre, tipo, saldo = 0 } = cliente
// console.log(saldo)

//////////////////////////////////////////////////////////////////////////
//Destructuring a un arreglo
//const ciudades = ['Londres', 'NewYork', 'Japon', 'Mexico', 'Madrid']

//const [ primeraCiudad, segundaCiudad ] = ciudades
//const [ , , , ciudad ] = ciudades

//console.log(ciudad)
//console.log(ciudades);

//////////////////////////////////////////////////////////////////////////
const cliente = {
  tipo: 'Premium',
  saldo: 300000,
  datos: {
    nombre: 'Predo',
    apellido: 'Perez',
    residencia: {
      ciudad: 'Mexico',
    }
  },
  movimientos: ['06-02-2020', '12-01-2019', '26-01-2018']
}

let {
  tipo,
  datos: {residencia},
  movimientos: [primer]
} = cliente

console.log(primer)
