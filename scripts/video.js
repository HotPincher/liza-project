function elementRangeHandler(evt) {
	const val = evt.target.value;
	document.getElementById("style-" + evt.target.id).textContent =
		'#' + evt.target.id + '[type="range"]::-webkit-slider-runnable-track{ background: -webkit-linear-gradient(left, #FF6600 0%, #FF6600 ' + val + '%, #9397A3 ' + val + '%, #9397A3 100%);}';
}

function elementPlayHandler(evt) {
	evt.target.classList.toggle('media-player__pause');
}
const elementPlay = document.querySelector('.media-player__play');
elementPlay.addEventListener('click', elementPlayHandler);

const elementRange = document.querySelectorAll('.media-player__range[type="range"]');

function initElement(element) {
	const st = document.createElement('style');
	st.id = "style-" + element.id;
	let value = element.value;
	st.textContent = '#' + element.id + '[type="range"]::-webkit-slider-runnable-track{ background: -webkit-linear-gradient(left, #FF6600 0%, #FF6600 ' + value + '%, #9397A3 ' + value + '%, #9397A3 100%);}';
	document.head.appendChild(st);
}

elementRange.forEach(element => {
	initElement(element);
	element.addEventListener('change', elementRangeHandler);
});
