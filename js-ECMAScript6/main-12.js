$(document).ready(() => {
  let txtBtn = $('#txtBtn')
  let jsonBtn = $('#jsonBtn')
  let apiBtn = $('#apiBtn')

  txtBtn.click(() => {cargarTXT()})

  jsonBtn.click(() => {cargarJSON()})

  apiBtn.click(() => {cargarAPI()})

})

cargarTXT = () => {
  fetch('datosNombres.txt')
    //aqui se le dice a fetch como se quieren estos datos -- se conectta y trae la informacion
    .then((res) => {
      return res.text()
    })
    //aqui se tienen los datos y se dice que se quiere ahcer con ellos
    .then((data) => {
      console.log(data)
      $('#resultado').html(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

cargarJSON = () => {
  fetch('empleados-2.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
    let html = ''
    data.forEach(empleado => {
      html += `
         <ul>
          <li>${empleado.nombre}  ${empleado.puesto}</li>
         </ul>   
      `
    });
    $('#resultado').html(html)
  })
  .catch((err) => {
    console.log(err)
  })
}

cargarAPI = () => {
  fetch('https://picsum.photos/list')
  .then((res) => {
    return res.json()
  })
  .then((imagenes) => {
    let html = ''
    imagenes.forEach(imagen => {
      html += `
        <ul>
          <li>
            <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
            ${imagen.author}
          </li>
        </ul>
      `
    })
    $('#resultado').html(html)
  })
  .catch((err) => {
    console.log(err)
  })
} 