// //SET
// let carrito = new Set()
// carrito.add('Camisa')
// carrito.add('Disco #1')
// carrito.add('Disco #2')
// carrito.add('Disco #3')

// //inicializar un set
// let numeros = new Set([1,2,3,4,5,6,7,1,2,3])
// console.log(numeros)


// //console.log(carrito)
// //console.log(carrito.size)

//////////////////////////////////////////////////////////////////////////////
//metodos o propieddes de los sets
let carrito = new Set()
carrito.add('Camisa')
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')

//comprobar si un valor ya existe -- regresa un true cuando ya exite
//console.log(carrito.has('Camisa'))

//eliminar algo del set
// carrito.delete('Camisa')

//eliminar todo el set
// carrito.clear()

//los set si se pueden iterar
//carrito.forEach((producto, index) => {
  //cuando se crea un set las llaves y el valor es igual por que no tiene llave o es decir su llave es su mismo valor
  //console.log(`${index} : ${producto}`)
//})

//console.log(carrito)
//console.log(carrito.size)


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//convertir un set a un arreglo
const arregloCarrito = [...carrito]
console.log(arregloCarrito)

