
import './input/input'
import './select/select'
import './file/file'




$(document).ready(function () {

	// вывести название файла

	$('.input').on('input', function() {
		$(this).closest('.form').find('[type="reset"]').removeAttr('disabled')
		$(this).closest('.form').find('.form-reset').removeClass('disabled')
	});
	$('[type="radio"]').on('change', function() {
		$(this).closest('.form').find('[type="reset"]').removeAttr('disabled')
		$(this).closest('.form').find('.form-reset').removeClass('disabled')
	});
	$('[type="file"]').on('change', function() {
		$(this).closest('.form').find('[type="reset"]').removeAttr('disabled')
		$(this).closest('.form').find('.form-reset').removeClass('disabled')
	});
	$('[type="checkbox"]').on('change', function() {
		$(this).closest('.form').find('[type="reset"]').removeAttr('disabled')
		$(this).closest('.form').find('.form-reset').removeClass('disabled')
	});
});



