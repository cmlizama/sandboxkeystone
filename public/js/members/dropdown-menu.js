$(function() {
	$('.show-dropdown.member-link').on('click',function(){
			var windowHeight = $(window).height();
			var headerHeight = $('.navbar').height();
			var collapseFlag = $('.navbar-collapse').hasClass('collapse');

			if($('#header').hasClass('dropdown')){
				$('#header').toggleClass('dropdown');
				$('#header').animate({height:headerHeight}, 500);
				$('.bullet-nav').css({'display':'none'});
			} else {
				$('#header').toggleClass('dropdown');
				$('#header').animate({height:windowHeight}, 500);
				$('.bullet-nav').css({'display':'block'});
			}



			// }


	});
});
