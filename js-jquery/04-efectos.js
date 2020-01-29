$(document).ready(function(){

  $('#mostrar').hide()

  $('#mostrar').click(function() {
    $(this).hide()
    $('#ocultar').show()
    $('#caja').show('normal') //fadeIn //fadeTo
  })

  $('#ocultar').click(function() {
    $(this).hide()
    $('#mostrar').show()
    $('#caja').hide('normal') //fadeOut //fadeTo
  })

})