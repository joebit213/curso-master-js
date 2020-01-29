$(document).ready(function(){

  //mover elemento por la pagina
  $('.elemento').draggable()

  // Redimencionar
  $('.elemento').resizable()

  //Seleccionar elementos y ordenar elementos
  //$('.lista-seleccionable').selectable()
  $('.lista-seleccionable').sortable({
    update: function(e, ui){
      console.log('ah cambiado la lista')
    }
  })

  //Drop
  $('#elemento-movil').draggable()
  $('#area').droppable({
    drop: function() {
      console.log('has soltado algo dentro del area')
    }
  })

  //Efectos
  $('#mostrar').click(function(){
    //$('.caja-efectos').fadeToggle()
    $('.caja-efectos').toggle('blink')
  })

  //Tooltop
  //$(document).tooltip()

  //Dialog
  $('#lanzar_popup').click(function() {
    $('#popup').dialog()
  })

  //Datepicker
  $('#calendario').datepicker()

  // Tabs
  $('#tab').tabs()

})