//Callback en Foreach

// const ciudades = ['Londres','New York','Madrird','Mexico','Japon', 'Paris', 'Viena']


// //Inline Callback
// ciudades.forEach(ciudad => {
//   //console.log(ciudad)
// })

//Funcion con nombre //esta forma no se suele utilizar
// callback = (ciudad) => {
//   console.log(ciudad)
// }

// ciudades.forEach(callback)







//Ejercicio -- Listado de paises
const paises = ['Francias', 'España', 'Mèxico', 'Japon', 'Portugal', 'Irlanda', 'Asutralia', 'Inglaterra']

//se agrega un nuevo pasi despues de 2 segundos
nuevoPais = (pais, callback) => {
  setTimeout(() => {
    paises.push(pais)
    callback()
  }, 2000)
} 

//los paises se muestran despues de 1 segundos
mostrarPaises = () => {
  setTimeout(() => {
    let html = ''
    paises.forEach(pais => {
      html += `<li>${pais}</li>`
    })
    document.getElementById('app').innerHTML = html
  }, 1000)
}

//Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises)

//Mostral los paises
mostrarPaises()