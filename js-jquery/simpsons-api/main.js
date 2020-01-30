$(document).ready(function() {

  //Variables globales
    let character = $('#other'),
        containerCharacter = $('.loadign-character'),
        spinner = $('.spinner')

  //Evento click para consumir la API
    character.click(function() {
    
    //Oculto personaje y muestro spinner
      containerCharacter.fadeOut()
      spinner.fadeIn()

      fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => new Promise(resolve => {
        setTimeout(() => {
          data = data[0]
        //Inserto al personaje junto con su quote
          $('.quote').html(`
            <p>${data.quote}</p>
          `)

          $('.character').html(`
            <img src="${data.image}">
            <h4>${data.character}</h4>
          `)
        
        //Verifico en que direccion esta viendo el personaje para poner su quote del lado correcto
          if( data.characterDirection == 'Left') {
            containerCharacter.css('flex-direction', 'row-reverse')
          } else {
            containerCharacter.css('flex-direction', 'row')
          }

        //Oculto spinner y muestro personaje
          containerCharacter.fadeIn()
          spinner.fadeOut()
        }, 2000);
      }))
      .catch(err => {
        console.log(err)
      })
    })



})
