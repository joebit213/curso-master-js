$(document).ready(function() {
  //Declarar variables reutilizables
  // var input = $("#nombre");
  // var contenido = $("#contenido");

  // //Evento keyup
  // input.keyup(function() {
  //   console.log(input.val()); //verificamos en consola
  //   contenido.html(input.val()); //agregamos en contenido

  //   //Podemos verificar si está vacio el input
  //   if (input.val() === "") {
  //     contenido.html("Estoy esperando...");
  //   }
  // });


  // $('img').attr('src', 'https://www.dw.com/image/48228796_303.jpg')


  $('#formulario').submit(function(e){
    e.preventDefault()
    var nombre =  $('#nombre').val()
    console.log(nombre)
  })

});