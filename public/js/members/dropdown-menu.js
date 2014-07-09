$(function() {

	var minWidth = 100;
	var defaultMargin = 10;
	var preferredWidth = 220;
	var numberOfColumns = 4;
	$member = $('.member');
	$memberImage = $('.member img');


	var initMemberSize = function(){
		$member.css({'min-width':minWidth, 'width':preferredWidth, 'height': 'auto'});
		$memberImage.css({'width':'100%', 'height':'100%'});
	}

	var resizeMember = function (){

		var dropdownHeight = $('#membersDropdown').height();
		var dropdownWidth = $('#membersDropdown').width();

		var newWidth = dropdownWidth / numberOfColumns;
		var newWidthMinusMargin = newWidth - (2* defaultMargin);
		if (newWidthMinusMargin <= 100){
			newWidth = dropdownWidth / 2;
			newWidthMinusMargin = newWidth - (2* defaultMargin);
		}
		$member.css({'width':newWidthMinusMargin});
	}

	initMemberSize();
	resizeMember();
	// var throttleResizeMember = _.throttle(resizeMember, 200);

	$('#members').on('click', function(){

		var $membersDropdown = $('#membersDropdown');

		var membersDropdownActive = $membersDropdown.hasClass('active');
		var windowHeight = $(window).height(),
			dropDownHeight = windowHeight - 50;

		if (!membersDropdownActive){
			$membersDropdown.css({'height': dropDownHeight });
			// setTimeout(function() {
			// 	$membersDropdown.css({'display': 'block'});
			// }, 300);

		} else {
			$membersDropdown.css({'height': 0});
			// setTimeout(function() {
			// 	$membersDropdown.css({'display': 'none'});
			// }, 300);

		}

		$membersDropdown.toggleClass('active');
	});

	$(window).resize(function(){
		resizeMember();
		// throttleResizeMember();
	});


});
