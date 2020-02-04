//Promises


//resolve es cuando la promesa se cumple y reject cuando la promesa no se cumple
// const esperando = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Se ejecuto')
//   }, 5000)
// })

// esperando.then((mensaje) => {
//   console.log(mensaje)
// })


//simulando un error en el Promise
const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = false;
  if(descuento) {
    resolve('Descuento aplicado')
  }else {
    reject('No se puede aplicar el descuento')
  }
})

aplicarDescuento.then((mensaje) => {
  console.log(mensaje)
}).catch((error) => {
  console.log(error)
})