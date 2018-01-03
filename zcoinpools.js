$(window).scroll(function () {
	'use strict';
	
	var pageNavHeight = $('#pageNav').innerHeight();
	var poolListHeight = $('#poolList').innerHeight();
	var bgImageHeight = $('.background').height();
	
    var bgBottomAttachment = poolListHeight - bgImageHeight - 120; 
    var trigger = $(window).scrollTop() - pageNavHeight;

      	if (trigger >= bgBottomAttachment) {
          	$('.background').addClass('bottom');
			$('.background').removeClass('fixed');
      	} else {
          	$('.background').removeClass('bottom');
			$('.background').addClass('fixed');
      	}
});
