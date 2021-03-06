//Iteradores

// for(let i = 0 ; i < 10; i++) {
//   console.log(i)
// }

function crearIterador(carrito) {
  //inicialiazamos el indice
  let i = 0;

  return {
    siguiente: () => {
      let fin = (i >= carrito.length)
      let valor = !fin ? carrito[i++] : undefined

      return {
        fin: fin,
        valor: valor
      }
    }
  }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4']

const recorrerCarrito = crearIterador(carrito)

console.log(recorrerCarrito.siguiente())

//este iterador te permite ir paso a paso
