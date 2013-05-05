$(document).ready(function() {

	$(window).bind('scroll', function(e) {
		parallaxScroll();
	});

	function parallaxScroll() {
		var scrolledY = $(window).scrollTop();
		$('#first').css('background-position', 'center -'+((scrolledY*0.3))+'px');
		//$('#second').css('background-position', 'center -'+((scrolledY*0.2))+'px');
		$('#logo').css('top', '-'+((scrolledY*0.4))+'px');
		$('#photo').css('top', '-'+((scrolledY*0.8))+'px');
		$('#box').css('top', '-'+((scrolledY*0.4))+'px');
		$('#end').css('top', '-'+((scrolledY*0.4))+'px');
	}

});