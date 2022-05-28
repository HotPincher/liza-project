const actionPanel = document.querySelector('.action-panel');
const btnReturned = actionPanel.querySelector('.button_returned');
const btnMoved = actionPanel.querySelector('.button_moved');
const btnArrowRight = btnMoved.querySelector('#button__arrow_right');
const cmplCourse = document.querySelector('.completed-course');

// Функция для активной кнопки, при ДОСТАТОЧНОМ количестве балов
function btnMvdActive() {
  btnMoved.removeAttribute('disabled');
  btnMoved.classList.remove('button_moved_disabled');
  btnArrowRight.src = "./images/arrow-right.svg";
}

// Функция для не активной кнопки, при НЕ ДОСТАТОЧНОМ количестве балов
function btnMvdDisabled() {
  btnArrowRight.src = "./images/arrow-right-disabled.svg";
  btnMoved.setAttribute('disabled', true);
  btnMoved.classList.add('button_moved_disabled');
}

// Функция для замены Далее/Завершить
function btnLableChange() {
  btnMoved.textContent = 'Завершить';
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
  if (aboutTest.classList.contains('content')&&(!aboutTest.classList.contains('hidden'))) {
    video.classList.remove('hidden')
    aboutTest.classList.add('hidden')
    btnMvdActive()
    updateBreadCrumps()
  }
  if (testBlock.classList.contains('content')&&(!testBlock.classList.contains('hidden'))) {
    testBlock.classList.add('hidden')
    aboutTest.classList.remove('hidden')
    updateBreadCrumps()
    btnMvdDisabled()
  }
  if (buttonReturnToTheTest.classList.contains('hidden') === false) {
    aboutTest.classList.add('hidden')
    video.classList.add('hidden')
    testBlock.classList.remove('hidden')
    updateBreadCrumps()
    btnMvdDisabled()
    if (results.classList.contains("results__green")||results.classList.contains("results__red")) {
      btnMvdActive()
    }
  }
  if (completedCourseSection.classList.contains('hidden') === false) {
    testBlock.classList.remove('hidden')
    completedCourseSection.classList.add('hidden')
    updateBreadCrumps()
    document.querySelector(".breadcrumbs > ul > li:nth-child(3)").style.display = 'block'
    btnMoved.textContent = 'Далее';
    resetOptionColorIcon()
  }
})
