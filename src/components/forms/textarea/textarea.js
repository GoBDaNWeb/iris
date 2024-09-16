$(document).ready(function () {
	
	let inputsValidateOther = document.querySelectorAll('.form__field--other');
	inputsValidateOther.forEach(validateOther);
	
	

	function validateOther(inputValidateOther) {
		inputValidateOther.oninput = function () {
			if(inputValidateOther.hasAttribute("required")) {
				let inputMessageOther = inputValidateOther.parentNode.querySelector('.form-message--other');
				inputValidateOther.addEventListener('input', function () {
					if (inputValidateOther.classList.contains('form__field--error')) {
						inputValidateOther.classList.remove('form__field--error');
					}
	
					if (inputValidateOther.value !== '') { // checking the format
						inputValidateOther.classList.add('valid');
						inputMessageOther.style.display = "none";
						inputValidateOther.classList.add("valid");
						inputValidateOther.classList.remove("invalid");
	
					} else if (inputValidateOther.value == '') { // checking for emptiness
						inputValidateOther.classList.add('invalid');
						inputMessageOther.innerHTML = '<div class="form-error">Поле не заполнено</div>';
						inputMessageOther.style.display = "block";
						inputValidateOther.classList.add("invalid");
						inputValidateOther.classList.remove("valid");
	
					}
				});
			}
		}
	}
	/*
	let inputsValidateName = document.querySelectorAll('.form__field--name');
	inputsValidateName.forEach(validateName);

	function validateName(inputValidateName) {
		inputValidateName.oninput = function () {
			let inputMessageName = inputValidateName.parentNode.querySelector('.form-message--name');
			inputValidateName.addEventListener('input', function () {
				if (inputValidateName.classList.contains('form__field--error')) {
					inputValidateName.classList.remove('form__field--error');
				}

				if (inputValidateName.value !== '') { // checking the format
					inputValidateName.classList.add('valid');
					inputMessageName.style.display = "none";
					inputValidateName.classList.add("valid");
					inputValidateName.classList.remove("invalid");

				} else if (inputValidateName.value == '') { // checking for emptiness
					inputValidateName.classList.add('invalid');
					inputMessageName.innerHTML = '<div class="form-error">Поле имя не заполнено</div>';
					inputMessageName.style.display = "block";
					inputValidateName.classList.add("invalid");
					inputValidateName.classList.remove("valid");

				}
			});
		}
	}
	*/
});