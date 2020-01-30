$(document).ready(function(){
  
  //load
  //$('#datos').load('https://reqres.in/')

  //Get y Post
  $.get('https://reqres.in/api/users', {page: 2}, function(response){
    response.data.forEach((element, index) => {
      $('#datos').append('<p>' + element.first_name + ' ' + element.last_name + '</p>')
    });
  })

  $('#form').submit(function(e){
    e.preventDefault()

    let usuario = {
      nombre: $('input[name="name"]').val(),
      web: $('input[name="web"]').val()
    }

    //console.log(usuario)
  
    // $.post($(this).attr('action'), usuario, function(response) {
    //   console.log(response)
    // }).done(function(){
    //   alert('Usuario añadido correctamente')
    // })

    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: usuario,
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



})