const actionPanel = document.querySelector('.action-panel');
const btnReturned = actionPanel.querySelector('.button-test_returned');
const btnMoved = actionPanel.querySelector('.button-test_moved');
const btnArrowRight = btnMoved.querySelector('#button__arrow_right');
const cmplCourse = document.querySelector('.completed-course');
const ButtonText = document.querySelector('.button-test__text');
// Функция для активной кнопки, при ДОСТАТОЧНОМ количестве балов
function btnMvdActive() {
  btnMoved.removeAttribute('disabled');
  btnMoved.classList.remove('button-test_moved_disabled');
  btnArrowRight.src = "./images/arrow-right.svg";
}

// Функция для не активной кнопки, при НЕ ДОСТАТОЧНОМ количестве балов
function btnMvdDisabled() {
  btnArrowRight.src = "./images/arrow-right-disabled.svg";
  btnMoved.setAttribute('disabled', true);
  btnMoved.classList.add('button-test_moved_disabled');
}

// Функция для замены Далее/Завершить
function btnLableChange() {
  ButtonText.textContent = 'Завершить';
  btnArrowRight.src = ''
  btnArrowRight.alt = ''
}

// Функция, которая будет менять класс карточки, чтобы она стала НЕ ВИДИМОЙ
function visibleCard(card) {
  card.classList.add('visible')
  card.classList.remove('hidden')
}

// Функция, которая будет менять класс карточкии, чтобы она стала ВИДИМОЙ
function hiddenCard(card) {
  card.classList.add('hidden')
  card.classList.remove('visible')
}


const buttonBack = document.querySelector('#button_back')

buttonBack.addEventListener('click', () => {
  if (!aboutTest.classList.contains('hidden')) {
    video.classList.remove('hidden')
    aboutTest.classList.add('hidden')
    btnMvdActive()
    updateBreadCrumps()
  }
  if (!testBlock.classList.contains('hidden')) {
    testBlock.classList.add('hidden')
    aboutTest.classList.remove('hidden')
    updateBreadCrumps()
    btnMvdDisabled()
  }
  // if (results.classList.contains("results__green")) {
  //   testBlock.classList.add('hidden')
  //   aboutTest.classList.remove('hidden')
  //   updateBreadCrumps()
  //   btnMvdDisabled()
  // }
  if (!buttonReturnToTheTest.classList.contains('hidden')) {
    aboutTest.classList.add('hidden')
    video.classList.add('hidden')
    testBlock.classList.remove('hidden')
    updateBreadCrumps()
    btnMvdDisabled()
    returnToTheTest()
    if (results.classList.contains("results__green")) {
      btnMvdActive()
    }
  }
  if (!completedCourseSection.classList.contains('hidden')) {
    testBlock.classList.remove('hidden')
    completedCourseSection.classList.add('hidden')
    updateBreadCrumps()
    document.querySelector(".breadcrumbs > ul > li:nth-child(3)").style.display = 'block'
    ButtonText.textContent = 'Далее';
    btnArrowRight.src = "./images/arrow-right.svg";
    btnArrowRight.alt = "Стрелка вправо"
  }
  resetOptionColorIconBackwards()
})

btnMoved.addEventListener('click', () => {
  if ((btnMoved.textContent === 'Завершить')&&(completedCourseSection.classList.contains('hidden')) === false) {
    window.location.href='index.html'
  }
})
