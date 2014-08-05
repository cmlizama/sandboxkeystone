$(function() {
	console.log('member')
	var resizeTiles = function(){
		$('.slideshow-container').width($(window).width());
	 	// $('.slideshow').height($('.slideshow-image').width());
	}
 	var debounceResizeEvent = _.debounce(resizeTiles,300);
 	resizeTiles();
 	debounceResizeEvent();
	 $(window).resize(function(){
		debounceResizeEvent();
	});
});