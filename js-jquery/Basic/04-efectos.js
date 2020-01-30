$(document).ready(function(){

  let caja = $('#caja')

  $('#mostrar').hide()

  $('#mostrar').click(function() {
    $(this).hide()
    $('#ocultar').show()
    caja.show('normal') //fadeIn //fadeTo
  })

  $('#ocultar').click(function() {
    $(this).hide()
    $('#mostrar').show()
    caja.hide('normal') //fadeOut //fadeTo
  })

  $('#toggle').click(function(){
    caja.slideToggle('slow', function(){
      console.log('animacion terminada')
    }) //fadeToggle slideToggle //De manera de callback se puede saber en el momento en que termina la animacion 
  })

  $('#animate').click(function(){
    caja.animate({
        marginLeft: '500px',
        fontSize: '40px',
        height: 'auto'      
        }, 'slow')
        .animate({
          borderRadius: '40px',
        }, 'slow')
        .animate({
          marginLeft: '0px',
          borderRadius: '0px'
        }, 'slow')
  })

})