$(document).ready(function(){

  reloadLinks()

  $('#add_button').removeAttr('disabled').click(function(){
    $('#menu').prepend('<li><a href="' + $('#add_link').val() + '"></a></li>')
    $('#add_link').val('')
    reloadLinks()
  })
  
  console.log($('a').legnth)

})

function reloadLinks() {
  $('a').each(function(i){
    console.log($(this).attr('href'))
    var enlace = $(this).attr('href')

    $(this).attr('target', '_blank')

    $(this).text(enlace)
  })
}