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
	cardHeading.textContent = card.name;
	cardImage.src = card.link;
	cardImage.alt = card.name;
	cardTier.textContent = card.tier;
	cardInfo.textContent = card.info;
	cardLesson.textContent = card.lessons;
	cardTime.textContent = card.time;
	cardTemplateElement.classList.add(card.tier)

	return cardTemplateElement;
};

const addCard = (link, name, tier, info, lessons, time) => {
	const cardCaller = createCard(link, name, tier, info, lessons, time)
	cardList.append(cardCaller)
}


initialCards.forEach(addCard)

// const cardSeparator = document.querySelectorAll('.aside__name-checked-option')

// 	for (let i = 0; i<initialCards.length; i++) {
// 		let newArr = []
// 		if (initialCards[i]['tier'] === cardSeparator.textContent) {
// 			newArr = initialCards[i]
// 			console.log(newArr)
// 		}
// 	}
// 	console.log(cardSeparator)


// const cardSorterBox = document.querySelectorAll('.card-list__base')
// const cardTierList = document.querySelector('#tier-list')

// cardTierList.addEventListener('click', evt => {
// 	// if (evt.target.tagName == 'INPUT') return fault;

// 	let itemSorter = evt.target.closest('.aside__filter-item').dataset.f
// 	// console.log(itemSorter)
// 	cardSorterBox.forEach(elem => {

// 	if (!elem.classList.contains(itemSorter)) {
// 		elem.classList.add('card-list__base_shattered')
// 	}
// });
// })
