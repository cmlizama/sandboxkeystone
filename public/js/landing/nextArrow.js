$(function() {
	var $nextArrow = $('.nextArrow'),
		$nextArrowDefault = $('.nextArrow.default-arrow'),
		$nextArrowHover = $('.nextArrow.hover-arrow');
	$nextArrow.on('mouseenter',function(){
		$nextArrowDefault.css({'display':'none'});
		$nextArrowHover.css({'display':'block'});
	});
	$nextArrow.on('mouseleave',function(){
		$nextArrowHover.css({'display':'none'});
		$nextArrowDefault.css({'display':'block'});
	});

});