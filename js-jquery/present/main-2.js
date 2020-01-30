$(document).ready(function() {

  //Variables globales
  let btnLogin = $('#open_login'),
      btnLogout = $('#logout')

  let loginInput = $('#user_input'),
      headerWelcomeText = $('#welcome p'),
      userBox = $('#user'),
      userName = $('#user_input'),
      btnSaveUser = $('#user_save'),
      userInStorage = localStorage.getItem('user_name')

  let theme = $('#theme'),
      btnThemeDefault = $('#to_default'),
      btnThemeGreen = $('#to_green')

  let draggableElement = $('.movil-img'),
      droppableBox = $('#drop')

  let btnGetPosts = $('#random_post')


  //Muestra el input para login
    $('#login').hide()

    btnLogin.click(function() {
      $('#login').slideToggle();
    })

  //Evento keyup -- inserto lo que tengo en mi input de login en un div existente en el dom
    loginInput.keyup(function() {
      userBox.html(userName.val())
    })

  //Validador de login
    btnSaveUser.click(function() {
      //verifico si el input de login esta vacio o no
      if (userName.val() == '') {
        $('.login-error').show().fadeIn()
        setTimeout(function () {
          $('.login-error').fadeOut();
        }, 2000);
  
      } else {
        $('.login-succes').show().fadeIn()
        setTimeout(function () {
          document.location.reload();
        }, 2000);
      }
    })

  //Login falso -- guarda el valor del input (nombre del usuario) en el localstorage
    $('#login form').submit(function(e) {
      e.preventDefault();
      localStorage.setItem('user_name', userName.val())
    })

  //Logout falso -- borra todo lo guardado del localstorage
    btnLogout.click(function() {
      localStorage.clear();
      setTimeout(function () {
        document.location.reload();
      }, 200);
    })

  //Actualiza el estado de bienvenida del header
    //si no hay usuario guardado en el localstorage, el texto del header cambia
    if (userInStorage == null) {
      headerWelcomeText.html('Con login, el nombre que registres se guardara en el localStorage')
    } else {
      btnLogin.hide();
      btnLogout.show()
      headerWelcomeText.html('Con logout, se borrara el nombre registrado del localStorage');
      //se muestra el nombre del usuario una vez logeado
      userBox.html('Bienvenido! ' + userInStorage)
    }

  //Selector de tema -- cambia mediante los atributos el archivo css para el layout
    btnThemeGreen.click(function() {
      theme.attr('href', 'green.css')
    })

    btnThemeDefault.click(function() {
      theme.attr('href', 'style.css')
    })

  //Slick-slider -- configuracion del slider con el plugin slick
    $('.slick-slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<span class="prev-arrow"><img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDE5Ljk4NTJMNS4zNDMyMiAxMS4zMjg0TDE0IDIuNjcxNjVMMTEuMzI4NCAtMS4xNjc3OGUtMDdMLTQuOTUxODJlLTA3IDExLjMyODRMMTEuMzI4NCAyMi42NTY5TDE0IDE5Ljk4NTJaIiBmaWxsPSIjMUIzOTVDIi8+Cjwvc3ZnPgo=" /></span>',
      nextArrow: '<span class="next-arrow"><img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTS04LjczNTgyZS0wNyAyLjY3MTY0TDguNjU2NzggMTEuMzI4NEwtMS4xNjc4MmUtMDcgMTkuOTg1MkwyLjY3MTU2IDIyLjY1NjlMMTQgMTEuMzI4NEwyLjY3MTU2IC0xLjE1NjA5ZS0wNUwtOC43MzU4MmUtMDcgMi42NzE2NFoiIGZpbGw9IiMxQjM5NUMiLz4KPC9zdmc+Cg==" /></span>'
    });

  //Drag & Drop -- draggable es un metodo para poder manipular un elemento del DOM  
  //                                                & 
  //               droppable es un metodo para saber si un elemento del DOM entra dentro de ESTE elemento

    draggableElement.draggable();

    droppableBox.droppable({
      drop: function() {
        //si drop detecta un
        draggableElement.animate({
          paddingLeft: '30px',
          paddingTop: '40px',
          borderRadius: '50px',
          width: '0px',
          height: '0px'
        })
      }
    })


  //Consumir data mediante FETCH
    btnGetPosts.click(function() {
      $('.spinner').show()
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => new Promise(resolve => {
        setTimeout(() => {
          const dataSlice = data.slice(0, 10);
          dataSlice.forEach((i) => {
            $('#random_posts_box').append(`
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${i.title}</h5>
                    <p class="card-text">${i.body}</p>
                  </div>
                </div>
            `);
          });
          $('.spinner').hide()
        }, 2000)
      }))
      .catch(err => {
        console.log(err);
        $('.fetch-error').show()
        $('.spinner').hide()
      })
    })

  //Sortable list
    $('.lista-seleccionable').sortable({
      cursor: 'move',
      update: function() {
        var listArray = [];
        $('li', '.lista-seleccionable').each(function(count) {
          listArray[count] = $(this).text();
        });
  
        var listaOrdenada = listArray.toString();
        localStorage.setItem('listaOrdenada', listaOrdenada)
      }
    })
    
});