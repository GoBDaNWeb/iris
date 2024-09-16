
$(document).ready(function () {
	function scrollToDiv(element, navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
				scrollTop: totalScroll
		}, 500);
	}

	$('.show-item').click(function(){
	
		if (!$(this).hasClass("--active")){
			$(this).addClass('--active')
			$(this).prev(".hidden-item").addClass('--show'); //все открываются

			
			//$(this).closest('.js--acc').addClass('active').siblings().removeClass('active'); // открыт только один
		} else {
			$(this).removeClass('--active')
			$(this).prev(".hidden-item").removeClass('--show'); //все открываются
			//прокрутка к верху экрана после закрытия 
			
			var elWrapped = $(this).prev(".hidden-item");
			scrollToDiv(elWrapped, 100);

			return false;
		}
		
	});

	$(".hidden-text-small__limiter").each(function() {
		let th = $(this);
		console.log(th.prop('scrollHeight'));
		console.log(th.height())
		if (th.prop('scrollHeight') <= th.height()) {
			th.next(".hidden-text-small__button").hide();
            th.find(".hidden-text-small__bottom").hide();
		} 
	});

    $('.hidden-text-small__button').click(function(){

		if (!$(this).hasClass("--active")){
			$(this).addClass('--active')
			$(this).closest('.hidden-text-small').addClass('--show'); //все открываются

			
			//$(this).closest('.js--acc').addClass('active').siblings().removeClass('active'); // открыт только один
		} else {
			$(this).removeClass('--active')
			$(this).closest('.hidden-text-small').removeClass('--show'); //все открываются
			//прокрутка к верху экрана после закрытия 
			
            var elWrapped = $(this).closest('.hidden-text-small');
            scrollToDiv(elWrapped, 100);
        
            return false;
		}
		
	});
	
});
