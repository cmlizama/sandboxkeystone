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

	var monitorScrollTop = function () {
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= windowHeight) {
			$('#header').addClass('in');
			$('.bullet-nav').addClass('in');
		} else if (scrollTop < windowHeight) {
			$('#header').removeClass('in');
			$('.bullet-nav').removeClass('in');
		}
	}

	$(".scroll").click(function(event){
		event.preventDefault();
		$('.scroll').removeClass('active');
		$(this).addClass('active');
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	setHeight();
	setCenter();
	monitorScrollTop();


	$(window).resize(function(){
		setHeight();
		setCenter();
		monitorScrollTop();
	});

	$(window).scroll(function(){
		monitorScrollTop();
	});



	// $('.home-page').css('opacity',1);
	// $('.intro-logo').fadeIn(500)
	// ;$('#home .more').fadeIn(500);
	$(slides).css("background-size","cover");
});