//Destructuring de una funcion

// ---- metodo "aterior" ---- //
// function reservacion(completo, opciones) {
//   opciones = opciones || {};

//   let metodo = opciones.metodoPago,
//       cantidad = opciones.cantidad,
//       dias = opciones.dias

//       console.log(metodo)
//       console.log(cantidad)
//       console.log(dias)

// }

// //
// reservacion(
//   true,
//   {
//     metodoPago: 'Tarjeta',
//     cantidad: 2000,
//     dias: 3
//   }
// )


// ---- metodo "aterior" ---- //
function reservacion(completo,
          {
            metodoPago = 'efectivo',
            cantidad = 0,
            dias = 0
          } = {}
  ) 
  {
  if(completo) {
    console.log('Proceder a reservar...')
  } else {
    console.log('Abandonar')
  }
      
}

//
reservacion(
  true,
  {
    metodoPago: 'Tarjeta',
    cantidad: 2000,
    dias: 3
  }
)