$(function() {
	var oTop = $('#counter').offset().top - window.innerHeight;
    $(window).scroll(function(){

 		var pTop = $('body').scrollTop();
    	console.log( pTop + ' - ' + oTop );
 		if( pTop > oTop ){
     		start_count();
 		}
	});
});

function start_count(){
  $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
}
