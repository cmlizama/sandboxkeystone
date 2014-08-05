$(function() {
	var triggerDropdown = function(){
		var windowHeight = $(window).height();
		var headerHeight = $('.navbar').height();

		if($('#membersDropdown').hasClass('in')){
			$('#header').animate({height:headerHeight}, 300);
			$('.bullet-nav').toggleClass('in');
		} else {
			$('#header').animate({height:'100%'}, 300);
			$('.bullet-nav').toggleClass('in');
		}
	}
	$('.show-dropdown.member-link').on('click',function(){
		triggerDropdown();
	});
});
