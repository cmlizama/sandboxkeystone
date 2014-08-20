$(function() {
	
	var slides=$('.slide');
	var slideNonMain = $('.slide-non-main');
	var footer = $('.footer');
	var header = $('#header');
	console.log('page hit')
	var setHeight = function (){
		var windowHeight=$(window).height();
		$(slides).height(windowHeight);
		$(slides).width('auto');

	}
	var setHeightNonMain = function (){
		var windowHeight=$(window).height();
		var headerHeight = header.height();
		var footerHeight = footer.height();
		var idealHeight = windowHeight-headerHeight-footerHeight;
		if (slideNonMain.height() < idealHeight){
			$(slideNonMain).height(idealHeight);
		}
		$(slideNonMain).width('100%');

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
				// $header.addClass('in');
				$bulletNav.addClass('in');
			} else if (scrollTop < windowHeight) {
				// $header.removeClass('in');
				$bulletNav.removeClass('in');
			}
		} else if (!bodyIsHome){
			// $header.css({'opacity': 1});
			// $header.addClass('in');
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
	$(".to-next a").click(function(event){
		event.preventDefault();
		var data = $(this).data();
		if (data.index == 'splash'){
			var windowHeight = $(window).height();
			$('.scroll').removeClass('active');
			$('.scroll[data-index="1"]').addClass('active');
			$('html,body').animate({scrollTop:windowHeight}, 500);
		} else {
			var nextBullet = $('.scroll[data-index="' + (data.index+1)+'"]');
			$('.scroll').removeClass('active');
			$(nextBullet).addClass('active');
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		}

	});

	var toTopOfPage = function(){
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var pagePlace = Math.round(scrollTop/windowHeight);
		var flooredPlace = windowHeight* pagePlace;
		if (pagePlace == 0){
			$('.scroll').removeClass('active');
			$('html,body').animate({scrollTop:0}, 500);
		} else {
			var nextBullet = $('.scroll[data-index="' + (pagePlace)+'"]');
			$('.scroll').removeClass('active');
			$(nextBullet).addClass('active');
			$('html,body').animate({scrollTop:flooredPlace}, 500);
		}
	}
	var debounceTopOfPage = _.debounce(toTopOfPage,500);

	$(".to-top").on('click',function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:0}, 500);
		$('.scroll').removeClass('active');
	});

	setHeight();
	setHeightNonMain();
	setCenter();
	monitorScrollTop();


	$(window).resize(function(){
		setHeight();
		setHeightNonMain();
		setCenter();
		monitorScrollTop();
		debounceTopOfPage();
	});

	$(window).scroll(function(){
		monitorScrollTop();
	});



	// $('.home-page').css('opacity',1);
	// $('.intro-logo').fadeIn(500)
	// ;$('#home .more').fadeIn(500);
	$(slides).css("background-size","cover");
});