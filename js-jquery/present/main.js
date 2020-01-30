$(document).ready(function() {


  $('#logo').attr('src', 'https://media.giphy.com/media/MOGd08vAQdQgU/giphy.gif')


  $('#login').hide()

  $('#open_login').click(function(){
    $('#login').slideToggle('nomal', function(){
    })
  })

  //User
    var input = $("#user_input");
    var user = $("#user");

    //Evento keyup
    input.keyup(function() {
      user.html(input.val()); 
    });


    //login falso
    $('#login form').submit(function(){
      var userName =  $('#user_input').val()

      localStorage.setItem('user_name', userName)
    })

    var userName = localStorage.getItem('user_name')
    user.html('Bienvenido! ' + `<br>` + userName);


    $('#random_user').click(function(){
      $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          console.log(data.results['0']);
          var datosRandom = data.results['0']
  
          $('#random_user_box').append(`<img width="100px" src="${datosRandom.picture.large}" class="img-fluid rounded-circle">`)
          $('#random_user_box img').addClass('movil-img')
        }   
      });  
    })

        //drag & drop
        var elementoMovil = $('.movil-img')
        var cajaElementos = $('#drop')
        elementoMovil.draggable()
    
        cajaElementos.droppable({
          drop: function() {
            console.log('has soltado algo dentro del area')
            elementoMovil.animate({
              borderRadius: '50px',
              width: '0px',
              height: '0px'
            })
          }
        })

    //slector de tema
    


})