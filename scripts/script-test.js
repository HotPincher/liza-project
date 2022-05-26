const form = document.querySelector('#form');
const inputs = form.querySelectorAll('.checkbox-block__input');
const icons = form.querySelectorAll('.checkbox-block__icon');
const testText = form.querySelectorAll('.checkbox-block__text');

const checkbox = form.querySelectorAll('.checkbox-block__icon_type_checkbox');
const radio = form.querySelectorAll('.checkbox-block__icon_type_radio');

const info = form.querySelector('.block-test__info');

const bt = form.querySelector('.block-test__bt');
const btReset = form.querySelector('.block-test__bt_type_reset');



form.addEventListener('change', function (e) {
	e.preventDefault();
	let checkboxActive = [];
	let radioActive = [];
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked && inputs[i].type === 'checkbox') {
			checkboxActive.push(inputs[i]);
		}
	}
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked && inputs[i].type === 'radio') {
			radioActive.push(inputs[i]);
		}
	}

	if (checkboxActive.length > 0 && radioActive.length > 0) {
		bt.removeAttribute('disabled');
	} else {
		bt.setAttribute('disabled', 'true');
	}
});



let time = 0;

form.addEventListener('submit', function (e) {
	e.preventDefault();
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked && inputs[i].classList.contains('checkbox-block__input_disabled_true')) {
			icons[i].classList.add('checkbox-block__icon_type_true-check');
			testText[i].classList.add('checkbox-block__text_theme_true');
			time++;

		} if (!(inputs[i].checked) && inputs[i].classList.contains('checkbox-block__input_disabled_true')) {
			icons[i].classList.add('checkbox-block__icon_type_true-uncheck');
		}
		if (inputs[i].checked && inputs[i].classList.contains('checkbox-block__input_disabled_false')) {
			icons[i].classList.add('checkbox-block__icon_type_false-check');
			testText[i].classList.add('checkbox-block__text_theme_false');
		} if (!(inputs[i].checked) && inputs[i].classList.contains('checkbox-block__input_disabled_false')) {
			icons[i].classList.add('checkbox-block__icon_type_false-uncheck');
		} if (inputs[i].checked) {
			inputs[i].checked = false;
			inputs[i].disabled = true;

		}
		if (time > 2) {
			info.classList.add('block-test__info_theme_true');
		} else {
			info.classList.add('block-test__info_theme_false');
		}

		bt.classList.remove('block-test__bt_active');
		btReset.classList.add('block-test__bt_active');
	}
});

btReset.addEventListener('click', function () {
	location.reload();
});

