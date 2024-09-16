
$(document).ready(function () {
	//magnific-popup
	$('.popup-button').magnificPopup({
		type: 'inline',
		preloader: false,
		removalDelay: 500,
		preloader: false,
		modal: false,
		fixedContentPos: true,
		fixedBgPos: false,
		closeOnBgClick: true,
		showCloseBtn: false,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
				//setTimeout(close, 1000);
			}
		},
		
	});
	
	$('.popup-modal-close').on( "click", function() {
		$.magnificPopup.close();
	});
		

});
