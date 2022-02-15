
const profileInputs = document.querySelectorAll('.personal-info__input');
const profileSubmitBtns = document.querySelectorAll('.personal-info__button-submit')

const dateMask = IMask(
	document.querySelector('#form-birth'),
	{
		mask: Date,
		min: new Date(1900, 0, 1),
		max: new Date(2100, 0, 1),
		lazy: false
	});

var numberMask = IMask(
	document.querySelector('#form-phone'),
	{
		mask: Number,
		min: 0,
		max: 1000000000000000,
		thousandsSeparator: ' '
	});


function disableRemove(elem) {
	elem.removeAttribute('disabled');
}

function disableAdd(elem) {
	elem.setAttribute('disabled', 'disabled');
}

function submitForm() {
	profileInputs.forEach(item => {

		if (item.value.length !== 0) {
			item.textContent = item.value;
		}
	});
}

profileInputs.forEach(item => {
	item.oninput = function () {
		let parentForm = item.closest('form');
		const profileSubmitBtn = parentForm.querySelector('.personal-info__button-submit');

		disableRemove(profileSubmitBtn);
	}
});


profileSubmitBtns.forEach(button => button.addEventListener('click', () => {
	submitForm();
	disableAdd(button);
}));
