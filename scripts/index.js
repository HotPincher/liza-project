import {initialCards} from './initial-cards.js'

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
