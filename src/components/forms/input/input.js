
$(document).ready(function () {


	$('.input').on('input', function() {
		let inputMessage = $(this).siblings('.form-message-fild');
		let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		let hasError = false;
		let rule = ''
		
		

		if($(this).attr('type') === 'tel') {
			if ($(this).val().length != 18 && $(this).val().length != 0) { 
				hasError = true;
				rule = 'tel';
			}else{
				hasError = false;
			}
			
		}
		if($(this).attr('type') === 'email') {
			if (!emailPattern.test($(this).val()) && $(this).val().length > 0) { 
				hasError = true;
				rule = 'email'
			} else {
				hasError = false;
			}
		}
		if($(this).attr('required')) {
			if (!$(this).val()) { 
				hasError = true;
				rule = 'required'
			}
		}

		if(typeof hasError !== false) {
			if(rule == 'tel' || rule == 'email') {
				$(this).addClass('invalid');
				inputMessage.html('<div class="form-error">Поле не соответствует формату</div>');
				inputMessage.css('display', 'block');
				$(this).removeClass("valid");
			} else if (rule == 'required') {
				$(this).addClass('invalid');
				inputMessage.html('<div class="form-error">Поле не заполнено</div>');
				inputMessage.css('display', 'block');
				$(this).removeClass("valid");
			} else {
				$(this).addClass('valid');
				inputMessage.css('display', 'none');
				$(this).removeClass("invalid");
			}
		} else {
			$(this).addClass('valid');
			inputMessage.css('display', 'none');
			$(this).removeClass("invalid");
		}
	});

	//jquery класс active для input
	$('.input').on('input', function() {
		if ($(this).val() .length >= 1) {
			$(this).addClass('active');

		} else {
			$(this).removeClass('active');
		}
	});

	//маска телеофна
	var selector = document.querySelectorAll('[type="tel"]');
	Inputmask({"mask": "+7 (999) 999-99-99"}).mask(selector);

});





	