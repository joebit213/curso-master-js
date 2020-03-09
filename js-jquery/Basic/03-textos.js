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


  $('#tabs li a').click(function(){
    var t = $(this).attr('id');
  
    if($(this).hasClass('inactive')){ //this is the start of our condition 
      $('#tabs li a').addClass('inactive');           
      $(this).removeClass('inactive');
  
      $('.container').hide();
      $('#'+ t + 'C').fadeIn('slow');
   }
  });


}