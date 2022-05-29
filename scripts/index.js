const cardList = document.querySelector(".card-list");
const cardTemplate = document.querySelector("#cardTemplate");

const createCard = card => {
	const cardTemplateElement = cardTemplate.content.querySelector(".card-list__base").cloneNode(true);
	const cardImage = cardTemplateElement.querySelector(".card-list__image");
	const cardHeading = cardTemplateElement.querySelector(".card-list__heading");
	const cardTier = cardTemplateElement.querySelector(".card-list__tier");
	const cardInfo = cardTemplateElement.querySelector(".card-list__info");
	const cardLesson = cardTemplateElement.querySelector("#lessons");
	const cardTime = cardTemplateElement.querySelector("#time");
	const cardButtonType = cardTemplateElement.querySelector(".card-list__button");
	cardHeading.textContent = card.name;
	cardImage.src = card.link;
	cardImage.alt = card.name;
	cardTier.textContent = card.tier;
	cardInfo.textContent = card.info;
	cardLesson.textContent = card.lessons;
	cardTime.textContent = card.time;
	cardButtonType.innerText = card.button;
	cardTemplateElement.classList.add(card.tier);
	cardTemplateElement.dataset.card = card.tier;
	cardTemplateElement.setAttribute("data-status", `${card.status}`);
	cardButtonType.setAttribute("value", `${card.button}`);

	if (card.button === "Записаться") {
		cardButtonType.classList.add("button_color_white");
		cardButtonType.addEventListener("click", evt => {
			evt.target
				.closest(".card-list__button")
				.classList.remove("button_color_white");
			evt.target.classList.add("button_color_orange");
			evt.target.closest(".card-list__button").textContent = "Продолжить";
			cardTemplateElement.dataset.status = "Вы записаны";
		});
	}	else if (card.button === "Продолжить") {
		cardButtonType.classList.add("button_color_orange");
	} else if (card.button === "Пройден") {
		cardButtonType.classList.add("button_disabled");
		cardButtonType.setAttribute("disabled", "disabled");
	}

	return cardTemplateElement;
};

const addCard = (link, name, tier, info, lessons, time) => {
	const cardCaller = createCard(link, name, tier, info, lessons, time);
	cardList.append(cardCaller);
};

initialCards.forEach(addCard);