$(document).ready(function(){
	$('.tabs').tabs();
	$('.inner-left .image a').prettyPhoto();

});
$('.tabs ul li').click(function(){
		$('.tabs ul li').removeClass('active');
		$(this).addClass('active').css('border','none');
});