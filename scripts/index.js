import {initialCards} from './initial-cards.js'

const cardList = document.querySelector('.card-list');
const cardTemplate = document.querySelector('#cardTemplate');



const createCard = card => {
	const cardTemplateElement = cardTemplate.content.querySelector('.card-list__base').cloneNode(true);
	const cardImage = cardTemplateElement.querySelector('.card-list__image');
	const cardHeading = cardTemplateElement.querySelector('.card-list__heading');
	const cardTier = cardTemplateElement.querySelector('.card-list__tier');
	const cardInfo = cardTemplateElement.querySelector('.card-list__info');
	const cardLesson = cardTemplateElement.querySelector('#lessons');
	const cardTime = cardTemplateElement.querySelector('#time');
	const cardButtonType = cardTemplateElement.querySelector('.card-list__button')
	cardHeading.textContent = card.name;
	cardImage.src = card.link;
	cardImage.alt = card.name;
	cardTier.textContent = card.tier;
	cardInfo.textContent = card.info;
	cardLesson.textContent = card.lessons;
	cardTime.textContent = card.time;
	cardButtonType.innerText = card.button;
	cardTemplateElement.setAttribute('data-m', `${card.status}`)
	cardButtonType.setAttribute('value', `${card.button}`)

	if (card.button === 'Записаться') {
		cardButtonType.classList.add('card-list__button_initiate')
	} else if (card.button === 'Пройден') {
		cardButtonType.classList.add('card-list__button_disable')
		cardButtonType.setAttribute('disabled', 'disabled')
	}

	cardTemplateElement.classList.add(card.tier);

	return cardTemplateElement;
};

const addCard = (link, name, tier, info, lessons, time) => {
	const cardCaller = createCard(link, name, tier, info, lessons, time)
	cardList.append(cardCaller)
}

initialCards.forEach(addCard)
