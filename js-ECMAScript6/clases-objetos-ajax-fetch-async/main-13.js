//Arrow functions

//funcion normal
let aprendiendo 
aprendiendo = function() {
  
}

//Arrow function
aprendiendo = () => {
  console.log('Aprendiendo JS')
}

//Arrow function una linea no requiere llaves
aprendiendo = () => console.log('Aprendiendo JS')

//Arrow function una linea sin clg retorna el valor
aprendiendo = () => 'Aprendiendo JS'

//Arrow function una linea sin clg retorna el objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo JS'})

//Arrow function pasar parametros
aprendiendo = (tecnologia) => console.log(`Aprendiendo JS ${tecnologia}`)

//Arrow function si le pasas un solo parametro el parentesis es opcional
aprendiendo = tecnologia => console.log(`Aprendiendo JS ${tecnologia}`)

const productos = ['Disco', 'Camisa', 'Guitarra']

//Callback sin arrow function
// const letrasProductos = productos.map(function(producto) {
//   return producto.length
// })


//Callback conn arrow function
// const letrasProductos = productos.map((producto) => {
//   return producto.length
// })

// console.log(letrasProductos)

//Haciendo un foreach
productos.forEach((producto) => {
  console.log(producto)
})
