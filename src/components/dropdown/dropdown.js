$(document).ready(function () {

	// моб. открываем drop элемент
	$('.dropbtn').each(function () {
		
		$(this).click(function(){
			var dataDropContent = $(this).attr('data-content');
			var dropDownContent = $('.dropdown');
			dropDownContent.filter("[data-content='" + dataDropContent + "']").addClass('--active')
			$('body').addClass('no-scroll')
		});
		
	});
	$('.dropbtn-small').each(function () {
		$(this).click(function(){
			var dataDropContent = $(this).attr('data-content');
			var dropDownContent = $('.dropdown');
			dropDownContent.filter("[data-content='" + dataDropContent + "']").toggleClass('--active')
		});
	});

	// моб. закрываем drop элемент
	$('.close-dropbtn').each(function () {
		
		$(this).click(function(){
			$(this).parent().removeClass('--active')
			$('body').removeClass('no-scroll')
		});
		
	});

	//закрываем мобильное меню при клике ну пункт меню
	$('.dropdown .top-menu a').on('click', function() {
		$('.dropdown').removeClass('--active')
		$('body').removeClass('no-scroll');
		$('.dropdown-bg').css('display', 'none');
	});

	//закрываем выбор языка при клике ну пункт меню
	$('.dropdown .select-lang__list a').on('click', function() {
		$('.dropdown').removeClass('--active')
		$('body').removeClass('no-scroll');
		//$('.dropdown-bg').css('display', 'none');
	});
	//закрываем выбор языка при клике вне его
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".select-lang-wrap ").length) {
			$('.select-lang-wrap .dropdown').removeClass("--active");
		}
		e.stopPropagation();
	});

});