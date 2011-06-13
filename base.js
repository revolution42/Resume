$("#main a").click(function(event){
	event.preventDefault();
	var fullUrl = this.href;

	//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
	var parts = fullUrl.split("#");
	var trgt = parts[1];

	//get the top offset of the target anchor
	var target_offset = $("#"+trgt).offset();
	var target_left = target_offset.left;

	$(".container .scroll").css('overflow', 'hidden');
	
	//goto that anchor by setting the body scroll top to anchor top
	
	$(".container .scroll").attr('scrollTop', 0);
	
	$('html, body').animate({scrollLeft:target_left, scrollTop: 0}, 500, function()
	{
		$(".container .scroll").css('overflow', 'auto');
	});
});



$(".container nav a").click(function(event){
	event.preventDefault();
	var fullUrl = this.href;

	//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
	var parts = fullUrl.split("#");
	var trgt = parts[1];

	//get the top offset of the target anchor
	var target_offset = $("#"+trgt).position();
	
	var target_top = target_offset.top + $("#"+trgt).parents('.scroll').scrollTop();

	//goto that anchor by setting the body scroll top to anchor top
	$(".container .scroll").animate({scrollTop:target_top}, 500);
});
