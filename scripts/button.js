const actionPanel = document.querySelector('.action-panel');
const btnReturned = actionPanel.querySelector('.button-test_returned');
const btnMoved = actionPanel.querySelector('.button-test_moved');
const btnArrowRight = btnMoved.querySelector('#button__arrow_right');
const cmplCourse = document.querySelector('.completed-course');
const ButtonText = document.querySelector('.button-test__text');

function btnMvdActive() {
  btnMoved.removeAttribute('disabled');
  btnMoved.classList.remove('button-test_moved_disabled');
  btnArrowRight.src = "./images/arrow-right.svg";
}

function btnMvdDisabled() {
  btnArrowRight.src = "./images/arrow-right-disabled.svg";
  btnMoved.setAttribute('disabled', true);
  btnMoved.classList.add('button-test_moved_disabled');
}

function btnLableChange() {
  ButtonText.textContent = 'Завершить';
  btnArrowRight.src = ''
  btnArrowRight.alt = ''
}

function visibleCard(card) {
  card.classList.remove('content_hidden')
}

function hiddenCard(card) {
  card.classList.add('content_hidden')
}

const buttonBack = document.querySelector('#button_back')

buttonBack.addEventListener('click', () => {
  if (!aboutTest.classList.contains('content_hidden')) {
    video.classList.remove('content_hidden')
    aboutTest.classList.add('content_hidden')
    btnMvdActive()
    updateBreadCrumps()
  }
  if (!testBlock.classList.contains('content_hidden')) {
    testBlock.classList.add('content_hidden')
    aboutTest.classList.remove('content_hidden')
    updateBreadCrumps()
    btnMvdDisabled()
  }
  if (!buttonReturnToTheTest.classList.contains('content__link-button_hidden')) {
    aboutTest.classList.add('content_hidden')
    video.classList.add('content_hidden')
    testBlock.classList.remove('content_hidden')
    updateBreadCrumps()
    btnMvdDisabled()
    returnToTheTest()
    if (results.classList.contains("results__green")) {
      btnMvdActive()
    }
    if (results.classList.contains("results__red")) {
      video.classList.add('content_hidden')
      aboutTest.classList.add('content_hidden')
      updateBreadCrumps()
      btnMvdDisabled()
    }
  }

  if (!completedCourseSection.classList.contains('content_hidden') &&
  completedCourseSubtitle.textContent !== 'Сожалеем') {
    testBlock.classList.remove('content_hidden')
    completedCourseSection.classList.add('content_hidden')
    updateBreadCrumps()
    document.querySelector(".breadcrumbs > ul > li:nth-child(3)").style.display = 'flex'
    ButtonText.textContent = 'Далее';
    btnArrowRight.src = "./images/arrow-right.svg";
    btnArrowRight.alt = "Стрелка вправо"
  }

  if (!completedCourseSection.classList.contains('content_hidden') &&
   completedCourseSubtitle.textContent === 'Сожалеем') {
    testBlock.classList.remove('content_hidden')
    completedCourseSection.classList.add('content_hidden')
    video.classList.add('content_hidden')
    updateBreadCrumps()
    document.querySelector(".breadcrumbs > ul > li:nth-child(3)").style.display = 'flex'
    ButtonText.textContent = 'Далее';
    btnArrowRight.src = "./images/arrow-right.svg";
    btnArrowRight.alt = "Стрелка вправо"
  }
  resetOptionColorIconBackwards()
})

btnMoved.addEventListener('click', () => {
  if ((btnMoved.textContent === 'Завершить') && (completedCourseSection.classList.contains('content_hidden')) === false) {
    window.location.href = 'index.html'
  }
})

