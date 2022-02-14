const sidebar = document.querySelector(".aside");
const filterList = sidebar.querySelector(".aside__filter-list");
const filterBlock = filterList.querySelectorAll(".aside__filter-block");
const filterBlockHead = document.querySelectorAll(".aside__filter-block-head");
const detailsAcc = document.querySelectorAll(".aside__filter-items");

// Функция добавления активного класса для filterBlock
filterBlockHead.forEach(function (item) {
	item.addEventListener("click", function (evt) {
		evt.stopPropagation();
		item.parentNode.classList.toggle("aside__filter-block_active");

	});
});

const asideFilter = document.querySelector(".aside");
const checkedItems = document.querySelectorAll(".aside__checkbox-options");
const checkedList = asideFilter.querySelector(".aside__checked-options-list");
const checkedGroupItems = document.querySelectorAll('.aside__checkbox-options_group');
const resetAllBtn = document.querySelector('.aside__reset');

checkedItems.forEach(item => item.addEventListener("click", function () {
	createCheckedItem(item)

}));

resetAllBtn.addEventListener('click', function () {
	checkedGroupItems.forEach(item => item.checked = false);

	while (checkedList.firstChild) {
		checkedList.removeChild(checkedList.firstChild);
	}
})


function createCheckedItem(evt) {
	const checkedItemTemplate = document.querySelector(".checked-item-template").content;
	const checkedItem = checkedItemTemplate.querySelector(".aside__checked-item").cloneNode(true);
	const deselectButton = checkedItem.querySelector(".aside__deselect-button");
	const checkedName = checkedItem.querySelector(".aside__name-checked-option");

	checkedName.textContent = evt.value;

	const itemCollection = checkedList.querySelectorAll(".aside__checked-item");

	const cardBox = document.querySelectorAll('.card-list__base')

	if (evt.checked == true) {
		if (evt.value == 'Активный') {
			checkedGroupItems.forEach(item => item.checked = false);
			evt.checked = true;

			for (let i = 0; i < [...itemCollection].length; i++) {
				const elem = [...itemCollection][i].childNodes[1].childNodes[1].textContent;

				if (elem == 'Не активный') {
					deleteCheckedItem([...itemCollection][i]);
				}
			}
			addCheckedItem(checkedList, checkedItem);
		}

		if (evt.value == 'Не активный') {
			checkedGroupItems.forEach(item => item.checked = false);
			evt.checked = true;

			for (let i = 0; i < [...itemCollection].length; i++) {
				const elem = [...itemCollection][i].childNodes[1].childNodes[1].textContent;

				if (elem == 'Активный') {
					deleteCheckedItem([...itemCollection][i]);
				}
			}
			addCheckedItem(checkedList, checkedItem);
		}

		addCheckedItem(checkedList, checkedItem);

		// const cardBox = document.querySelectorAll('.card-list__base')

		cardBox.forEach(elem => {
			elem.classList.remove('card-list__base_shattered')
		if (!elem.classList.contains(evt.value)) {
			elem.classList.add('card-list__base_shattered')
		}
	});

	}

	if (evt.checked == false) {
		for (let i = 0; i < [...itemCollection].length; i++) {
			let elem = [...itemCollection][i].childNodes[1].childNodes[1].textContent
			if (elem == evt.value) {
				deleteCheckedItem([...itemCollection][i]);
			}
		}
		cardBox.forEach(elem => {
			elem.classList.remove('card-list__base_shattered')

	});
	}

	deselectButton.addEventListener("click", function () {
		deleteCheckedItem(checkedItem);
		evt.checked = false;
	});


}

function addCheckedItem(parent, child) {
	parent.prepend(child);
}

function deleteCheckedItem(element) {
	element.remove();
}
