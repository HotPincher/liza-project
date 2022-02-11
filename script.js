import {initialCards} from './initial-cards.js'

const profileForms = document.querySelectorAll('.personal-info__form');
const profileInputs = document.querySelectorAll('.personal-info__input');
const profileSubmitBtns = document.querySelectorAll('.personal-info__button-submit')

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


const cardList = document.querySelector('.card-list');

// рендер карточек
const createCard = card => {
	const cardTemplate = document.querySelector('#cardTemplate');
	const cardTemplateElement = cardTemplate.content.querySelector('.card-list__base').cloneNode(true);
	const image = cardTemplateElement.querySelector('.card-list__image');
	const head = cardTemplateElement.querySelector('.card-list__heading');
	const tier = cardTemplateElement.querySelector('.card-list__tier');
	const info = cardTemplateElement.querySelector('.card-list__info');
	const less = cardTemplateElement.querySelector('#lessons');
	const time = cardTemplateElement.querySelector('#time');
	head.textContent = card.name;
	image.src = card.link;
	image.alt = card.name;
	tier.textContent = card.tier;
	info.textContent = card.info;
	less.textContent = card.lessons;
	time.textContent = card.time;
	return cardTemplateElement;
	};

// Добавляем карточки
	const createdCards = initialCards.map(card => createCard(card));
  	cardList.append(...createdCards);
