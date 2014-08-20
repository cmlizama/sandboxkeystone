$(function() {
	console.log('member')
	var resizeTiles = function(){
		var $slideshowImage = $('.slideshow-image').width() +20;

		$('.slideshow-container').width($(window).width());
		$('.slideshow').height(($(window).width()/2)+40);
		$('.slideshow-image').height($slideshowImage);

	}

	var getSlideshowPosition = function(){
		var data = $('.slideshow').attr("data-position")
		return Number(data);
	}

	var setSlideshowPosition =function(direction){
		var currentPosition = getSlideshowPosition();
		var $slideshow = $('.slideshow');
		var newPosition = currentPosition;
		if (direction == 'left'){
			if (currentPosition >0){
				newPosition = currentPosition -1;
			}
			$slideshow.attr("data-position", newPosition);
		} else if (direction == 'right'){
			if (currentPosition <3){
				newPosition = currentPosition +1;
			}
			$slideshow.attr("data-position", newPosition);
		}

	}
	var slideLeft = function(){
		setSlideshowPosition('left');
	}
	var slideRight = function(){
		setSlideshowPosition('right');
	}

	$('.slideshow-left').on('click',function(){
		slideLeft();
	});
	$('.slideshow-right').on('click',function(){
		slideRight();
	});

 	var debounceResizeEvent = _.debounce(resizeTiles,300);
 	resizeTiles();
 	debounceResizeEvent();
	 $(window).resize(function(){
		debounceResizeEvent();
	});
});