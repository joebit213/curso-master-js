$(document).ready(function() {

  let character = $('#other')

  character.click(function() {
    
    $('.loadign-character').fadeOut()
    $('.spinner').fadeIn()
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
          $('.loadign-character').css('flex-direction', 'row-reverse')
        } else {
          $('.loadign-character').css('flex-direction', 'row')
        }
        $('.loadign-character').fadeIn()
        $('.spinner').fadeOut()
      }, 2000);
    }))
    .catch(err => {
      console.log(err)
    })
  })



})
