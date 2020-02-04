$(document).ready(function() {
  $('#cargar').click(function() {
    cargarPosts()
  })
})

cargarPosts = () => {

  //crear el ojeto
  const xhr = new XMLHttpRequest()

  //abrir la coneccion
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
  //carga y leer datos
  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText)

    let contenido = ''
    response.forEach(post => {
      contenido += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `
    });
      $('#listado').html(contenido)
    }
  }

  //enviar datos
  xhr.send()

}