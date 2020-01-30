$(document).ready(function() {

  let character = $('#other'),
      containerCharacter = $('.loadign-character'),
      spinner = $('.spinner')

  character.click(function() {
    
    containerCharacter.fadeOut()
    spinner.fadeIn()

    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then(data => new Promise(resolve => {
      setTimeout(() => {
        data = data[0]
        $('.quote').html(`
          <p>${data.quote}</p>
        `)

        $('.character').html(`
          <img src="${data.image}">
          <h4>${data.character}</h4>
        `)

        if( data.characterDirection == 'Left') {
          containerCharacter.css('flex-direction', 'row-reverse')
        } else {
          containerCharacter.css('flex-direction', 'row')
        }
        
        containerCharacter.fadeIn()
        spinner.fadeOut()
      }, 2000);
    }))
    .catch(err => {
      console.log(err)
    })
  })



})
