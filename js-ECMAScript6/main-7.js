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

  //una vez que carga la pagina
  xhr.onload = function() {
    //200: correcto | 403: prohibido | 404: no encontrado
    if(this.status) {
      console.log(this.responseText)
    }
  }

  //enviar el request 
  xhr.send()
}