$(document).ready(function () {


  var imgWelcome = 'https://pa1.narvii.com/6566/060e6f22be420c4c84162047ba486f86b7d80ee9_hq.gif'

  $('#login').hide();

  $('#open_login').click(function () {
    $('#login').slideToggle('nomal', function () { });
  })

  //User
  var input = $("#user_input");
  var user = $("#user");
  var welcome = $('#welcome');

  //Evento keyup
  input.keyup(function () {
    user.html(input.val());
  });

  //Actualizar el estado de bienvenida
  var userName = localStorage.getItem('user_name');
  if (userName == null) {
    welcome.html('Con login, el nombre que registres se guardara en el localStorage' + `<img src="${imgWelcome}">`);
  } else {
    $('#open_login').hide();
    $('#logout').show();
    user.html('Bienvenido! ' + userName);
  }

  //login falso -- guarda en localstorage
  $('#login form').submit(function (e) {
    e.preventDefault();
    var userName = $('#user_input').val()
    localStorage.setItem('user_name', userName);
  })

  //logout -- borra el local storage
  $('#logout').click(function () {
    localStorage.clear();
    setTimeout(function () {
      document.location.reload();
    }, 200);
  })

  var user_save = $('#user_save');
  user_save.click(function () {
    if (input.val() == '') {
      $('.main-template').append('<div class="login-error alert alert-danger" role="alert"> <p>Usuario invalido!</p> </div>');
      setTimeout(function () {
        $('.login-error').fadeOut();
      }, 2000);
      
    } else {
      $('.main-template').append('<div class="login-succes alert alert-success" role="alert"> <p>Estas dentro!</p> </div>').fadeIn();
      setTimeout(function () {
        document.location.reload();
      }, 2000);
    }
  })


  //random user

  $('#random_user').click(function () {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function (data) {
        console.log(data.results['0']);
        var datosRandom = data.results['0'];

        $('#random_user_box').append(`<img width="100px" src="${datosRandom.picture.large}" class="img-fluid rounded-circle">`);
        $('#random_user_box img').addClass('movil-img');
      }
    });
  })

  //slick-slider
  $('.slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow: '<span class="prev-arrow"><img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDE5Ljk4NTJMNS4zNDMyMiAxMS4zMjg0TDE0IDIuNjcxNjVMMTEuMzI4NCAtMS4xNjc3OGUtMDdMLTQuOTUxODJlLTA3IDExLjMyODRMMTEuMzI4NCAyMi42NTY5TDE0IDE5Ljk4NTJaIiBmaWxsPSIjMUIzOTVDIi8+Cjwvc3ZnPgo=" /></span>',
    nextArrow: '<span class="next-arrow"><img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTS04LjczNTgyZS0wNyAyLjY3MTY0TDguNjU2NzggMTEuMzI4NEwtMS4xNjc4MmUtMDcgMTkuOTg1MkwyLjY3MTU2IDIyLjY1NjlMMTQgMTEuMzI4NEwyLjY3MTU2IC0xLjE1NjA5ZS0wNUwtOC43MzU4MmUtMDcgMi42NzE2NFoiIGZpbGw9IiMxQjM5NUMiLz4KPC9zdmc+Cg==" /></span>'
  });

  //drag & drop
  var elementoMovil = $('.movil-img');
  var cajaElementos = $('#drop');
  elementoMovil.draggable();

  cajaElementos.droppable({
    drop: function () {
      console.log('has soltado algo dentro del area');
      elementoMovil.animate({
        paddingLeft: '30px',
        paddingTop: '40px',
        borderRadius: '50px',
        width: '0px',
        height: '0px'
      });
    }
  });

  //slector de tema
  var theme = $('#theme')

  $('#to_green').click(function(){
    theme.attr('href', 'green.css')
  });

  $('#to_default').click(function(){
    theme.attr('href', 'style.css')
  });


});