const form = document.querySelector('#form');
const inputs = form.querySelectorAll('.checkbox__options');
const icons = form.querySelectorAll('.checkbox__pseudo');
const testText = form.querySelectorAll('.checkbox__label');
const items = form.querySelectorAll('.block-test__form-items');

const checkbox = form.querySelectorAll('.checkbox__pseudo_type_checkbox');
const radio = form.querySelectorAll('.checkbox__pseudo_type_radio');
const bt = form.querySelector('#btResult');
const btReset = form.querySelector('.block-test__bt_type_reset');
const btNext = document.querySelector('#btNext');


form.addEventListener('change', function (e) {
  e.preventDefault();
  let checkboxActive = [];
  let radioActive = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked && inputs[i].type === 'checkbox') {
      checkboxActive.push(inputs[i]);
    }
  }
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked && inputs[i].type === 'radio') {
      radioActive.push(inputs[i]);
    }
  }

  if (checkboxActive.length > 0 && radioActive.length > 0) {
    bt.removeAttribute('disabled');
    bt.classList.remove('button_disabled');
  } else {
    bt.setAttribute('disabled', 'true');
  }
});



let time = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked && inputs[i].classList.contains('checkbox__options_disabled_true')) {
      icons[i].classList.add('checkbox__pseudo_type_true-check');
      testText[i].classList.add('checkbox__label_theme_true');
      time++;

    } if (!(inputs[i].checked) && inputs[i].classList.contains('checkbox__options_disabled_true')) {
      icons[i].classList.add('checkbox__pseudo_type_true-uncheck');
    }
    if (inputs[i].checked && inputs[i].classList.contains('checkbox__options_disabled_false')) {
      icons[i].classList.add('checkbox__pseudo_type_false-check');
      testText[i].classList.add('checkbox__label_theme_false');
    } if (!(inputs[i].checked) && inputs[i].classList.contains('checkbox__options_disabled_false')) {
      icons[i].classList.add('checkbox__pseudo_type_false-uncheck');
    } if (inputs[i].checked) {
      inputs[i].checked = false;
      inputs[i].disabled = true;

    }

  }
  if (time > 2) {
    bt.insertAdjacentHTML('beforebegin', `
		<section class="test-result test-result_color_green">
			<div aria-label="Результат" class="test-result__result">83%</div>
				<div class="test-result__container">
					<p class="test-result__paragraph-indent">Oтличный результат!</p>
					<p class="test-result__paragraph-indent">Нажите «Далее» чтобы продолжить.</p> Если считаете, что сможете
					лучше, нажмите «Пересдать».
					В случае если результат будет хуже, засчитается наивысший результат.
				</div>
		</section>
		`);
    btNext.classList.remove('button_disabled');
    btReset.classList.add('button_color_white');
  } else {
    bt.insertAdjacentHTML('beforebegin', `
		<section class="test-result test-result_color_red">
			<div aria-label="Результат" class="test-result__result">33%</div>
				<div class="test-result__container">
					<p class="test-result__paragraph-indent">К сожалению, вы не набрали проходной результат.</p> Нажмите
					«Пересдать», чтобы попробовать снова.
			</div>
		</section>
		`);
    btReset.classList.add('button_color_orange');
  }

  bt.classList.add('block-test__bt_active');
  btReset.classList.remove('block-test__bt_active');
});



btReset.addEventListener('click', function () {
  location.reload();
});
