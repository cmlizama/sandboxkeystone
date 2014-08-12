$(function() {

	var setPromoDimensions = function (){
		var windowHeight=$(window).height(),
			windowWidth=$(window).width(),
			promoWidth = windowWidth/6,
			promoHeight = promoWidth * 2.12;
		$('.promo').css({'height': promoHeight, 'width': promoWidth});
		var setPromoMargins = function(){
			var promoMarginTop = (windowHeight/2)-(promoHeight/2) -25,
				promoMarginSide =windowWidth/20;
			$('#left-promo').css({'margin-left': promoMarginSide, 'margin-top': promoMarginTop});
			$('#right-promo').css({'margin-right': promoMarginSide, 'margin-top': promoMarginTop});
		}
		setPromoMargins();
	}


	var positionLogo = function(){
		var windowHeight=$(window).height(),
			windowWidth=$(window).width(),
			logoWidth = windowWidth*.55,
			logoHeight = logoWidth * (3/4),
			logoLeft = (windowWidth/2)-(logoWidth/2),
			logoTop = ((windowHeight) /2)-(logoHeight/2); // -75 px for header and footer
		$('#logo-center').css({'height': logoHeight, 'width': logoWidth});
	}
	setPromoDimensions();
	positionLogo();

	$(window).resize(function(){
		setPromoDimensions();
		positionLogo();
	});

	$(window).scroll(function(){
		setPromoDimensions();
		positionLogo();
	});
});
