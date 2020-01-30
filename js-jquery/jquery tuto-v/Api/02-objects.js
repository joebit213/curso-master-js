var contenido = document.querySelector('#contenido') 

function traer() {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    console.log(data.results['0'])
    var data = data.results['0']
    contenido.innerHTML = `      
      <img width="100px" src="${data.picture.large}" class="img-fluid rounded-circle">
      <p>Nombre: ${data.name.first} ${data.name.last}</p>
      `
  })

}