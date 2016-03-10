$(function(){
	$('.menu-icon').bind('mousedown',function(){
		$(this).find('div').removeClass('initial-state');
		$(this).toggleClass('active');		
	})
})