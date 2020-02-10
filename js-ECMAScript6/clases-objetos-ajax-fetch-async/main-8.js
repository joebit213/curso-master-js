$(document).ready(function() {
  let empleado = $('#boton1')
  let empleados = $('#boton2')

  empleado.click(function() {
    empleadoFunc()
  })

  empleados.click(function() {
    empleadosfunc()
  })
})

const empleadoFunc = () => {
  const xhr = new XMLHttpRequest
  xhr.open('GET', 'empleado.json', true) //el true es para asincrono 

  xhr.onload = function() {
    if(this.status == 200) {
      //console.log(JSON.parse( this.responseText ))  //JSON.parse transforma los datos de texto a un objeto

      const persona = JSON.parse( this.responseText )
      
      const htmlTemplate = `
      <ul>
        <li>ID: ${persona.id}</li>
        <li>NOMBRE: ${persona.nombre}</li>
        <li>EMPRESA: ${persona.empresa}</li>
        <li>TRABAJO: ${persona.trabajo}</li>
      </ul>
      `

      $('#empleado').html(htmlTemplate)
    }
  }
  xhr.send()
}



const empleadosfunc = () => {
  const xhr = new XMLHttpRequest
  //se debe reabrir la coneccion siempre que quieras hacer una consulta nueva
  xhr.open('GET', 'empleados.json', true)

  xhr.onload = function() {
    if(this.status == 200) {

      const personal = JSON.parse( this.responseText )
      //console.log(personal)

      let htmlTemplate = ''
      personal.forEach(function(persona) {
        htmlTemplate += `
        <ul>
          <li>ID: ${persona.id}</li>
          <li>NOMBRE: ${persona.nombre}</li>
          <li>EMPRESA: ${persona.empresa}</li>
          <li>TRABAJO: ${persona.trabajo}</li>
        </ul>
        `
      })
      $('#empleados').html(htmlTemplate)
    }
  }
  xhr.send()
}