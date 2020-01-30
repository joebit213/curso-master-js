$(document).ready(function(){
  
  //selector de id
  let rojo = $('#rojo').css('background','red')
                        .css('color', 'white')


  //selectores de clases

  var miClase = $('.zebra').css('padding', '5px')

  $('.sin-borde').click(function(){
    console.log('click')
    $(this).addClass('zebra')
  })

  //selectores de etiqueta
  let parrafos = $('p').css('cursor', 'pointer')

  parrafos.click(function(){
    var that = $(this);
    if(!that.hasClass('grande')){
      that.addClass('grande')
    }
    else{
      that.removeClass('grande')
    }
  });


  //selectores de atributo
  $('[title="google"]').css('background', '#ccc')
  $('[title="youtube"]').css('background', 'red')


  //otros
  //$('p, a').addClass('margen-superior')

  let busqueda = $('#box').find('.resaltado')

  console.log(busqueda)


})

