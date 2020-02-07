//MAPS

let cliente = new Map()
//para agregar valores a un mar se utiliza set y le pasas la llave y valor
cliente.set('nombre', 'Karen')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)

//acceder a los valores
//console.log(cliente.get('nombre'))

//metodos para los maps
//tamaño del map
//console.log(cliente.size)
//comprovar que un valor existe
//console.log(cliente.has('apellido'))
//borrar un elemento del mapp
//console.log(cliente.delete('nombre'))
//borrar  todos los elementos del map
//cliente.clear()


//console.log(cliente)

////////////////////////////////////////////////////////////////////////////////
//Pasar propiedades por defautl a un map
const paciente = new Map(
  [
    ['nombre','paciente'],
    ['habitacion', 'No Definido']
  ]
);

paciente.set('nombre', 'Antonio')
paciente.set('habitacion', 400)

//un map tambien puede ser recorrido por un foreach
paciente.forEach((datos, index) => {
  console.log(`${index}: ${datos}`)
})

console.log(paciente)