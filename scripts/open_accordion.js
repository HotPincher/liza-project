const filterBlockHead = document.querySelectorAll(".accordion__header");

filterBlockHead.forEach(item => {
	item.addEventListener("click", function (evt) {
		evt.stopPropagation();
		item.querySelector('.accordion__toggler').classList.toggle('accordion__toggler_active');
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
});
