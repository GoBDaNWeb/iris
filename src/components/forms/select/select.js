$(document).ready(function () {
	$(".select-selected").click(function(){
		$(this).closest(".select-wrap").toggleClass("--active");
	})
	$(".select-items li").click(function(){
		var currentele = $(this).html();
		$(this).closest(".select-wrap").find(".select-selected li").html(currentele);
		$(this).closest(".select-wrap").removeClass("--active");
	})
	//при клике вне аккордеона закрыть
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".select-wrap").length) {
			$('.select-wrap').removeClass("--active");
		}
		e.stopPropagation();
	});
});