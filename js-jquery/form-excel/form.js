$('#form').submit(function(e){
  e.preventDefault()

  let usuario = $('input[name="name"]').val()

  $.ajax({
    type: 'POST',
    url: $(this).attr('action'),
    data: usuario.serialize(),
    beforeSend: function(){
      console.log('Enviando usuario...')
    },
    success: function(response){
      console.log(response)
    },
    error: function(err){
      console.log(err)
    },
    timeout: 2000
  })

  return false
})