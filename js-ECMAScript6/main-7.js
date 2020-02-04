$(document).ready(function() {
  $('#traer').click(function() {
    traerDatos()
  })
})


const traerDatos = () => {

  //crear el objeto xmlhttprequest
  const xhr = new XMLHttpRequest();

  //abrir una conexion
  xhr.open('GET', 'datos.txt', true);

  // //una vez que carga la pagina
  // xhr.onload = function() {
  //   //200: correcto | 403: prohibido | 404: no encontrado
  //   if(this.status === 200) {
  //     //console.log(this.responseText)
  //     //template string
  //     $('#datos').html(`<h1>${this.responseText}</h1>`)
  //   }
  // }

  //forma -- onready state change
  xhr.onreadystatechange = function() {

    console.log(`Estado ${this.readyState}`)

    if(this.readyState === 4 && this.status === 200 ) {
      //console.log(this.responseText)
    }
  }

  // ready status
  /*
  0.- No inicializado
  1.- Coneccion establecida
  2.- Recibido
  3.- Procesando
  4.- Respuesta lista
  */
 
  //enviar el request 
  xhr.send()
}