
$(document).ready(function () {
	// вывести название файла
	$('.form-edit-account .input-file').change(function(){
		let customTxt = $(this).closest('.form-field').find('.file-text')
		let textReset = $(this).closest('.form-field').find('.file-text').data('text')
		if ($(this).val()) {
			customTxt.html($(this).val().match(
				/[\/\\]([\w\d\s\.\-\(\)]+)$/
			)[1]);
		} else {
			customTxt.html(textReset);
			
		}
	});
	// клик на кнопку добавить файл
	$('.form-edit-account .button-file').click(function(){
		let realFileBtn = $(this).closest('.form-field').find('.input-file')
		realFileBtn.click();
	});
	// клик на кнопку отмена
	$('.form-edit-account .reset-file').click(function(){
		let customTxt = $(this).closest('.form-field').find('.file-text')
		let textReset = $(this).closest('.form-field').find('.file-text').data('text')
		let realFileBtn = $(this).closest('.form-field').find('.input-file')
		customTxt.html(textReset);
		realFileBtn.val();
	});

	// вывести название файла
	$('.form-partners .input-file').change(function(){
		let customTxt = $(this).closest('.form-field').find('.file-text')
		let textReset = $(this).closest('.form-field').find('.file-text').data('text')

		if ($(this).val()) {
			customTxt.html($(this).val().match(
				/[\/\\]([\w\d\s\.\-\(\)]+)$/
			)[1]);
			$(this).closest('.form-field').find('.button-text').addClass('--hide');
		} else {
			customTxt.html(textReset);
			$(this).closest('.form-field').find('.button-text').removeClass('--hide');
		}
	});
	// клик на кнопку добавить файл
	$('.form-partners .button-file').click(function(){
		let realFileBtn = $(this).closest('.form-field').find('.input-file')
		realFileBtn.click();
	});
	// клик на кнопку отмена
	$('.form-partners .reset-file').click(function(){
		let customTxt = $(this).closest('.form-field').find('.file-text')
		let textReset = $(this).closest('.form-field').find('.file-text').data('text')
		let realFileBtn = $(this).closest('.form-field').find('.input-file')
		customTxt.html(textReset);
		realFileBtn.val();
	});
});




