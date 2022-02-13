import {initialCards} from './initial-cards.js'

const cardList = document.querySelector('.card-list');
const cardTemplate = document.querySelector('#cardTemplate');
const cardSeparator = document.querySelector('.aside__name-checked-option')



const createCard = card => {
	const cardTemplateElement = cardTemplate.content.querySelector('.card-list__base').cloneNode(true);
	const cardImage = cardTemplateElement.querySelector('.card-list__image');
	const cardHeading = cardTemplateElement.querySelector('.card-list__heading');
	const cardTier = cardTemplateElement.querySelector('.card-list__tier');
	const cardInfo = cardTemplateElement.querySelector('.card-list__info');
	const cardLesson = cardTemplateElement.querySelector('#lessons');
	const cardTime = cardTemplateElement.querySelector('#time');
	cardHeading.textContent = card.name;
	cardImage.src = card.link;
	cardImage.alt = card.name;
	cardTier.textContent = card.tier;
	cardInfo.textContent = card.info;
	cardLesson.textContent = card.lessons;
	cardTime.textContent = card.time;


	return cardTemplateElement;
};

const addCard = (link, name, tier, info, lessons, time) => {
	const cardCaller = createCard(link, name, tier, info, lessons, time)
	cardList.append(cardCaller)
}


initialCards.forEach(addCard)

for (let i = 0; i<initialCards.length; i++) {
	let newArr = []
	if (initialCards[i]['tier'] === cardSeparator.textContent) {
		newArr = initialCards[i]
		addCard(newArr)
	}
}
