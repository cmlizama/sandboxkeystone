$(function() {

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

		var bodyIsHome = $('#body').hasClass('home');
		var $header = $('#header'),
			$bulletNav = $('.bullet-nav');
		if (bodyIsHome){
			if (scrollTop >= windowHeight) {
				$header.addClass('in');
				$bulletNav.addClass('in');
			} else if (scrollTop < windowHeight) {
				$header.removeClass('in');
				$bulletNav.removeClass('in');
			}
		} else if (!bodyIsHome){
			$header.css({'opacity': 1});
			$header.addClass('in');
			$bulletNav.css({'opacity': 0});
			$bulletNav.removeClass('in');
		}

		var findSlideNumber = function () {
			if (scrollTop !== 0) {
				return Math.floor( scrollTop / windowHeight );
			} else if (scrollTop === 0 ){
				return 0;
			}
		}
		var applyActive = function() {
			$('.scroll').removeClass('active');
			var slideNumber = findSlideNumber();
			$('.bullet-'+ slideNumber).addClass('active')
		}
		applyActive();
	}
	$(".scroll").click(function(event){
		event.preventDefault();
		$('.scroll').removeClass('active');
		$(this).addClass('active');
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	$(".to-next .text").click(function(event){
		event.preventDefault();
		var data = $(this).data();
		var nextBullet = $('.scroll[data-index="' + (data.index+1)+'"]');
		$('.scroll').removeClass('active');
		$(nextBullet).addClass('active');
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	$(".to-top").on('click',function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:0}, 500);
		$('.scroll').removeClass('active');
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