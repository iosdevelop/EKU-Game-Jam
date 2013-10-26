$(document).ready(function() {
	$(window).bind('scroll', function(e) {
		parallax('#grid',.21);
	});
});

function parallax($tag, $speed) {
	var scrollPosition = $(window).scrollTop();
	$($tag).css('top',(0 - (scrollPosition * $speed))+'px' );
}       