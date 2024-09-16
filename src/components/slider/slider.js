$(document).ready(function () {
	var helpers = {
		addZeros: function (n) {
			return n < 10 ? '0' + n : '' + n
		}
	}

	function sliderNewInit() {
		var $slider = $('.slider-new')
		$slider.each(function () {
			var $sliderParent = $(this).parent()
			$(this).slick({
				slidesToShow: 4,
				swipeToSlide: true,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				prevArrow: $('.slider-new-button .slick-prev'),
				nextArrow: $('.slider-new-button .slick-next'),
				responsive: [
					{
						breakpoint: 768,
						settings: {
							variableWidth: true,
							slidesToShow: 1,
							dots: true,
							arrows: false
						}
					}
				]
			})
		})
	}

	sliderNewInit()

	function sliderNewsInit() {
		var $slider = $('.slider-news')
		$slider.each(function () {
			var $sliderParent = $(this).parent()
			$(this).slick({
				slidesToShow: 3,
				swipeToSlide: true,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				prevArrow: $('.slider-news-button .slick-prev'),
				nextArrow: $('.slider-news-button .slick-next'),
				responsive: [
					{
						breakpoint: 768,
						settings: {
							variableWidth: true,
							slidesToShow: 1,
							dots: true,
							arrows: false
						}
					}
				]
			})
		})
	}

	sliderNewsInit()

	function sliderAdvantageInit() {
		var $slider = $('.slider-advantage')
		$slider.each(function () {
			var $sliderParent = $(this).parent()
			$(this).slick({
				slidesToShow: 1,
				variableWidth: true,
				swipeToSlide: true,
				//slidesToScroll: 1,
				arrows: false,
				dots: true,
				lazyLoad: 'progressive',
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							variableWidth: false
						}
					},

					{
						breakpoint: 768,
						settings: {
							variableWidth: false,
							slidesToShow: 1,
							dots: true,
							arrows: false
						}
					}
				]
			})
		})
	}

	sliderAdvantageInit()

	function sliderReviewsInit() {
		var $slider = $('.slider-reviews')
		$slider.each(function () {
			var $sliderParent = $(this).parent()
			$(this).slick({
				slidesToShow: 2,
				swipeToSlide: true,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				prevArrow: $('.slider-reviews-button .slick-prev'),
				nextArrow: $('.slider-reviews-button .slick-next'),
				responsive: [
					{
						breakpoint: 768,
						settings: {
							// variableWidth: true,
							slidesToShow: 1,
							dots: true,
							arrows: false
						}
					}
				]
			})
		})
	}

	sliderReviewsInit()
})
