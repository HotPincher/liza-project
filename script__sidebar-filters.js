const sidebar = document.querySelector(".aside");
const filterList = sidebar.querySelector(".aside__filter-list");
const filterBlock = filterList.querySelectorAll(".aside__filter-block");
const filterBlockHead = document.querySelectorAll(".aside__filter-block-head");
const detailsAcc = document.querySelectorAll(".aside__filter-items");

// Функция добавления активного класса для filterBlock
filterBlockHead.forEach(function(item) {
	item.addEventListener("click", function(evt) {
		evt.stopPropagation();
		item.parentNode.classList.toggle("aside__filter-block_active");
	});
});

//Функция добавления выбранного элемента фильтра в список под sidebar


