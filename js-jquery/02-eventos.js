$(document).ready(function(){

  //mousOver y mouseOut
 // let box = $('#box')

  // box.mouseover(function(){
  //   $(this).css('background','red')
  // })

  // box.mouseout(function(){
  //   $(this).css('background','green')
  // })

  // function rojo() {$(this).css('background', 'red')}
  // function verde() {$(this).css('background', 'green')}

  // //hover
  // box.hover(rojo, verde)

  // //click, doble click
  // box.click(function(){
  //   $(this).css('background', 'blue')
  // })

  // box.dblclick(function(){
  //   $(this).css('background', 'pink')
  // })

  //Focus y blur
  let nombre = $('#nombre')
  let datos = $('#datos')

  nombre.focus(function(){
    $(this).css('border', '2px solid red')
  
    datos.show()
  })

  nombre.blur(function(){
    $(this).css('border', '1px solid #ccc')
    datos.text($(this).val())
  })

  //Mousedown y mouseup
  datos.mousedown(function(){
    $(this).css('border-color', 'gray')
  })

  datos.mouseup(function(){
    $(this).css('border-color', 'black')
  })

  //Mouse move

  $(document).mousemove(function(){
    $('body').css('cursor', 'none')
    var sigueme = $('#sigueme')
    //console.log('eje x', event.clientX)
    //console.log('eje y', event.clientY)
    sigueme.css('left', event.clientX)
            .css('top',  event.clientY)
  })


}) 