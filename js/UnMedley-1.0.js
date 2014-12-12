$(document).ready(function(){
	calcLayout();
	MedleyShiv();
	var throttledResize = _.throttle(calcLayout, 100);
	$(window).resize(throttledResize);
});

function calcLayout(){
	// calculate cover height
	var $bgheight=$(window).height();
	$('#cover').css('height', $bgheight*.9+'px');
}

function MedleyShiv(){
	$('.beforeAd').insertBefore('.row-ad:first');
}