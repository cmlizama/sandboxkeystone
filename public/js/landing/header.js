$(function() {
	// var $bodyContainer = $('#body');
	// var setBodyHeight = function () {
	// 	$windowHeight = $(window).height();
	// 	$bodyContainer.css({'height':$windowHeight});
	// }
	// setBodyHeight();

	var slides=$('.slide');
	var setHeight = function (){
		var windowHeight=$(window).height();
		$(slides).height(windowHeight);
		$(slides).width('auto');
	}
	var setCenter = function (){
		var windowCenterX=($(window).width()/2);
		var windowCenterY=($(window).height()/2);
		$('.story-slide .downlink, .back-to-top').css('left',windowCenterX-33.5);
	}
	setHeight();
	setCenter();


	$(window).resize(function(){
		setHeight();
		setCenter();
	});

	// $('.home-page').css('opacity',1);
	// $('.intro-logo').fadeIn(500)
	// ;$('#home .more').fadeIn(500);
	$(slides).css("background-size","cover");
});