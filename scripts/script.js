// Нужна логика для неверного ответа с красным окном + чтоб кнопка пересдать отправляла в начало теста (сбрасывала форму)
const testCheck1 = document.querySelector("#checkbox_1");
const testCheck2 = document.querySelector("#checkbox_2");
const testCheck3 = document.querySelector("#checkbox_3");
const testRadio1 = document.querySelector("#radio_1");
const testRadio2 = document.querySelector("#radio_2");
const testRadio3 = document.querySelector("#radio_3");
const testButton = document.querySelector(".content__button");
const testRetake = document.querySelector("#retakeTestButton");
const checkboxLabelFirst = document.querySelector("#checkboxLabelFirst");
const checkboxLabelSecond = document.querySelector("#checkboxLabelSecond");
const checkboxLabelThird = document.querySelector("#checkboxLabelThird");
const radioLabelFirst = document.querySelector("#radioLabelFirst");
const radioLabelSecond = document.querySelector("#radioLabelSecond");
const radioLabelThird = document.querySelector("#radioLabelThird");
const results = document.querySelector("#results");

testButton.addEventListener("click", () => {
  if (
    (testCheck1.checked || testCheck2.checked || testCheck3.checked) &&
    (testRadio1.checked || testRadio2.checked || testRadio3.checked)
  ) {
    validateAnswers();
    showResultTest();
  }
});

const showResult = () => {
  testButton.classList.toggle("content__button_active");
};

correctAswers = {
  q1: [1, 1, 1],
  q2: [0, 1, 0],
};

const collectAnswers = (form) => {
  const answerList = [];

  for (const [index, element] of Array.from(form).entries()) {
    answerList.push(element.checked);
  }
  return answerList;
};

const highlightAnswer = (element, highlightType, inputType) => {
  if (inputType === "checkbox") {
    const validTypes = ["success", "correct"];
    if (validTypes.includes(highlightType)) {
      const className = `checkbox__label-${highlightType}`;
      element.classList.add(className);
      element.classList.remove("checkbox__label");
    } else {
      console.warn(`Wrong highlightType ${highlightType}`);
    }
  }
  if (inputType === "radio") {
    const validTypes = [
      "success-answer",
      "cross-answer",
      "correct-answer",
      "wrong-answer",
    ];
    if (validTypes.includes(highlightType)) {
      const className = `radio__label-${highlightType}`;
      element.classList.add(className);
      element.classList.remove("radio__label");
    } else {
      console.warn(`Wrong highlightType ${highlightType}`);
    }
  }
};
answerMapQ1 = {
  0: checkboxLabelFirst,
  1: checkboxLabelSecond,
  2: checkboxLabelThird,
};
answerMapQ2 = {
  0: radioLabelFirst,
  1: radioLabelSecond,
  2: radioLabelThird,
};

function ifCurrect() {
  const q1Answer = collectAnswers(document.forms["testFirst"]);
  const q2Answer = collectAnswers(document.forms["testSecond"]);
  for (let i = 0; i < document.forms["testSecond"].elements.length; i++) {
    if (
      q1Answer.some((x) => x) &&
      document.forms["testSecond"].elements[i].checked
    ) {
      showResult();
    }
  }
}

const checkAnswer = (given_answer, correct_answer) => {
  // correct success wrong cross
  if (correct_answer) {
    if (given_answer) return "success";
    else return "correct";
  } else if (!correct_answer) {
    if (!given_answer) return "cross";
    else return "wrong";
  }
};

const validateAnswers = () => {
  const q1Answer = collectAnswers(document.forms["testFirst"]);
  const q2Answer = collectAnswers(document.forms["testSecond"]);
  for (const [index, answer] of q1Answer.entries()) {
    const response = checkAnswer(
      (given_answer = answer),
      (correct_answer = correctAswers["q1"][index])
    );
    highlightAnswer(
      (element = answerMapQ1[index]),
      (highlightType = `${response}`),
      (inputType = "checkbox")
    );
  }
  for (const [index, answer] of q2Answer.entries()) {
    const response = checkAnswer(
      (given_answer = answer),
      (correct_answer = correctAswers["q2"][index])
    );
    highlightAnswer(
      (element = answerMapQ2[index]),
      (highlightType = `${response}-answer`),
      (inputType = "radio")
    );
  }
};
//переменная с текстом % результата
let resultsTitle = document.querySelector(".results__title");
//переменная с первой строкой текста "Отличный результат!" в блоке с результатами
let resultTextOne = document.querySelector(".results__text_one");
//переменная со второй строкой текста в блоке с результатами
let resultTextTwo = document.querySelector(".results__text_two");
//переменная с третьей строкой текста в блоке с результатами
let resultTextThree = document.querySelector(".results__text_three");

// //функция, которая скрывает кнопку Проверить и открывает кнопку Пересдать
const hideButton = function () {
  testButton.classList.add("content__button_hidden");
  testRetake.classList.remove("content__button_hidden");
};

const showButton = function () {
  testButton.classList.remove("content__button_hidden");
  testRetake.classList.add("content__button_hidden");
};
function showResultTest() {
  let x = document.forms["testFirst"]["checkbox1"].checked;
  let y = document.forms["testFirst"]["checkbox2"].checked;
  let z = document.forms["testFirst"]["checkbox3"].checked;
  let rad2 = document.forms["testSecond"].elements[1].checked;
  if (((x && y && z) || (x && y) || (x && z) || (y && z)) && rad2) {
    results.classList.add("results__green");
    hideButton();
    testRetake.classList.add("content__button_retake-success");
    testRetake.classList.remove("content__button_retake-wrong");
    btnMvdActive();
    testRetake.disabled = true;
    resultsTitle.textContent = "83%";
    resultTextOne.textContent = "Отличный результат!";
    resultTextTwo.textContent = "Нажите «Далее» чтобы продолжить.";
    resultTextThree.textContent = "Если считаете, что сможете лучше, нажмите «Пересдать». В случае если результат будет хуже, засчитается наивысший результат.";
  } else {
    testButton.classList.add("content__button_hidden");
    testRetake.classList.remove("content__button_hidden");
    testRetake.classList.remove("content__button_retake-success");
    testRetake.classList.add("content__button_retake-wrong");
    results.classList.add("results__red");
    resultsTitle.textContent = "33%";
    resultTextOne.textContent =
      "К сожалению, вы не набрали проходной результат.";
    resultTextTwo.textContent = "Нажмите «Пересдать», чтобы попробовать снова.";
    resultTextThree.textContent = ""
    hideButton();
  }
}

//переменные с текстом окна завершения курса
let completedCourseSection = document.querySelector("#block-result");
let completedCourseSubtitle = completedCourseSection.querySelector(
  ".content__subtitle"
);
let completedCourseTextOne = completedCourseSection.querySelector(
  "#completed-course_text_one"
);
let completedCourseTextTwo = completedCourseSection.querySelector(
  "#completed-course_text_two"
);
let completedCourseTextThree = completedCourseSection.querySelector(
  "#completed-course_text_three"
);
let mainContentSection = document.querySelector("#block-main");
let buttonForward = document.querySelector("#button_forward");

//функция скрывающая сексии с результатами и основного контента и показывающее результирующее окно курса
function hideResultsShowCompleted() {
  results.classList.add("content_hidden");
  mainContentSection.classList.add("content_hidden");
  completedCourseSection.classList.remove("content_hidden");
}

//функция, которая меняет текст в сексии окна окончании курса при негативном результате
function showPositiveTextCompletedResult() {
  completedCourseSubtitle.textContent = "Поздравляем!";
  completedCourseTextOne.textContent =
    "Вы успешно завершили курс «Кинологическое направление».";
  completedCourseTextTwo.textContent =
    "Теперь вы можете участвовать в поисково-спасательных мероприятиях со своей собакой.";
}
const video = document.querySelector("#block-video");
//показывает окно завершения курса
buttonForward.addEventListener("click", function () {
  if (
    video.classList.contains("content") &&
    !video.classList.contains("content_hidden")
  ) {
    aboutTest.classList.remove("content_hidden");
    video.classList.add("content_hidden");
    updateBreadCrumps();
    btnMvdDisabled();
    testBlock.classList.add("content_hidden");

  }
  if (results.classList.contains("results__red")&&(testBlock.classList.contains("content_hidden")===false)) {
    hideResultsShowCompleted();
    updateBreadCrumps();
    btnLableChange();
  } else if (results.classList.contains("results__green")&&(testBlock.classList.contains("content_hidden")===false)) {
    completedCourseTextThree.remove();
    hideResultsShowCompleted();
    showPositiveTextCompletedResult();
    updateBreadCrumps();
    btnLableChange();
  } else {
    console.log("Пройдите тест!");
  }
});

testRetake.addEventListener("click", function () {
  testButton.classList.remove("content__button_active");
  results.classList.remove("results__green");
  results.classList.remove("results__red");
  checkboxLabelFirst.classList.remove("checkbox__label-success");
  checkboxLabelFirst.classList.remove("checkbox__label-correct");
  checkboxLabelFirst.classList.add("checkbox__label");
  checkboxLabelSecond.classList.remove("checkbox__label-success");
  checkboxLabelSecond.classList.remove("checkbox__label-correct");
  checkboxLabelSecond.classList.add("checkbox__label");
  checkboxLabelThird.classList.remove("checkbox__label-success");
  checkboxLabelThird.classList.remove("checkbox__label-correct");
  checkboxLabelThird.classList.add("checkbox__label");
  radioLabelFirst.classList.remove("radio__label-success-answer");
  radioLabelFirst.classList.remove("radio__label-correct-answer");
  radioLabelFirst.classList.remove("radio__label-cross-answer");
  radioLabelFirst.classList.remove("radio__label-wrong-answer");
  radioLabelFirst.classList.add("radio__label");
  radioLabelSecond.classList.remove("radio__label-success-answer");
  radioLabelSecond.classList.remove("radio__label-correct-answer");
  radioLabelSecond.classList.remove("radio__label-cross-answer");
  radioLabelSecond.classList.remove("radio__label-wrong-answer");
  radioLabelSecond.classList.add("radio__label");
  radioLabelThird.classList.remove("radio__label-success-answer");
  radioLabelThird.classList.remove("radio__label-correct-answer");
  radioLabelThird.classList.remove("radio__label-cross-answer");
  radioLabelThird.classList.remove("radio__label-wrong-answer");
  radioLabelThird.classList.add("radio__label");
  document.forms["testFirst"].reset();
  document.forms["testSecond"].reset();
  showButton();
});

// SideBar //

const iconDropDown = document.querySelectorAll(".sidebar-content__item-icon");
const optionsDropDown = document.querySelectorAll(".sidebar-content__options");
const optionsBox = document.querySelectorAll(".sidebar-content__options");
const dropDownTriggerIcon = document.querySelectorAll(
  ".sidebar-content__item-icon"
);
const dropDownTriggerText = document.querySelectorAll(".sidebar-content__item");
const optionsItem = document.querySelectorAll(".sidebar-content__link");
const course = document.querySelectorAll(".breadcrumbs__link");

//Открытие содержания при клике на иконку
function openOptionsTriggerIcon(el) {
  const options = el.currentTarget.dataset.path;
  optionsBox.forEach(function () {
    const dropDown = document.querySelector(`[data-target=${options}]`);
    dropDown.classList.toggle("sidebar-content__options_active");
    el.target.classList.toggle("sidebar-content__item-icon_active");
  });
}

dropDownTriggerIcon.forEach(function (item) {
  item.addEventListener("click", openOptionsTriggerIcon);
});

//Открытие содежания при клике на название темы
function openOptionsTriggerText(el) {
  const icon = el.target.nextElementSibling;
  const options = el.currentTarget.dataset.path;
  optionsBox.forEach(function () {
    const dropDown = document.querySelector(`[data-target=${options}]`);
    icon.classList.toggle("sidebar-content__item-icon_active");
    dropDown.classList.toggle("sidebar-content__options_active");
  });
}

dropDownTriggerText.forEach(function (item) {
  item.addEventListener("click", openOptionsTriggerText);
});

//Изменение иконок и цвета пунков содержания


// Преобразую NodeList из подпунктов содержания в массив, ищу элемент, чей текст
//совпадает с текстом в основном блоке,
//меняю его цвет и создаю новый массив от начала до этого элемента, а также от текущего
//элемента до конца

const arrCoursesAll = [...optionsItem];
let arrCoursesCompleted;
let arrCoursesNonCompleted;

//Функция изменения цвета и иконок пунктов содержания при загрузке и нажатии на кнопку "вперед"
function resetOptionColorIconForward() {

  arrCoursesAll.forEach(function (item) {
    const optionItemCurrent = item.closest("ul").dataset.target;
    let activeItem;
    if (
      item.lastElementChild.textContent == linkCurrent.textContent &&
      optionItemCurrent === course[2].dataset.path
    ) {
      highlightCurrentOption(item);
      activeItem = arrCoursesAll.indexOf(item);
      arrCoursesCompleted = arrCoursesAll.slice(0, activeItem);
      arrCoursesCompleted.forEach(function (item) {
        changeIconGreen(item)
      })
    }
    if (
      item.lastElementChild.textContent === "Тест" &&
      linkCurrent.textContent === "Курс завершен" &&
      optionItemCurrent === course[2].dataset.path
    ) {
      changeIconGreen(item);
    }
  });
}

resetOptionColorIconForward()

//Функция изменения цвета иконок и пунктов содержания при загрузке и нажатии на кнопку "назад"

function resetOptionColorIconBackwards() {
  arrCoursesAll.forEach(function (item) {
    const optionItemCurrent = item.closest("ul").dataset.target;
    let activeItem;
    let prevItem;
    if (
      item.lastElementChild.textContent == linkCurrent.textContent &&
      optionItemCurrent === course[2].dataset.path
    ) {
      highlightCurrentOption(item);
      activeItem = arrCoursesAll.indexOf(item);
      prevItem = activeItem - 1;

      arrCoursesCompleted = arrCoursesAll.slice(0, prevItem);
      arrCoursesCompleted.forEach(function (item) {
        changeIconGreen(item)
      })

      arrCoursesNonCompleted = arrCoursesAll.slice(activeItem + 1);
      arrCoursesNonCompleted.forEach(function (item) {
        resetOption(item)
      })
    }
  });
}

frowardButton.addEventListener("click", resetOptionColorIconForward);


//Функция изменения цвета у текущего пункта содержания
//При добавлении страниц необходимо будет добавитить соответствующие условия

function highlightCurrentOption(el) {
  const icon = el.firstElementChild;
  const optionText = el.childNodes[3];
  optionText.classList.add("sidebar-content__option_active");

  if (optionText.textContent === "Тест") {
    icon.classList.add("sidebar-content__option-icon_test_active")
  }
  if (optionText.textContent === "Видео") {
    icon.classList.add("sidebar-content__option-icon_video_active")
  }

}

//Функция возврата пункта меню к белой теме при нажатии на кнопку "назад".
//При добавлении страниц необходимо будет добавитить соответствующие условия

function resetOption(el) {
  const icon = el.firstElementChild;
  const optionText = el.childNodes[3];
  optionText.classList.remove("sidebar-content__option_active");
  if (optionText.textContent === "Тест") {
    icon.classList.remove("sidebar-content__option-icon_test_active")
    icon.classList.remove("sidebar-content__option-icon_completed")
    icon.classList.add("sidebar-content__option-icon_test")
  }
}

//Функция смены иконки пройденной темы
//При добавлении страниц необходимо будет добавитить соответствующие условия

function changeIconGreen(el) {
  const icon = el.childNodes[1];
  const optionText = el.childNodes[3];
  icon.classList.add("sidebar-content__option-icon_completed")
  optionText.classList.remove("sidebar-content__option_active");
  if (optionText.textContent === "Тест") {
    icon.classList.remove("sidebar-content__option-icon_test")
    icon.classList.remove("sidebar-content__option-icon_test_active")
  }
  if (optionText.textContent === "Видео") {
    icon.classList.remove("sidebar-content__option-icon_video")
    icon.classList.remove("sidebar-content__option-icon_video_active")
  }
  if (optionText.textContent === "Вебинар") {
    icon.classList.remove("sidebar-content__option-icon_web")
    icon.classList.remove("sidebar-content__option-icon_web_active")
  }
  if (optionText.textContent === "Урок"
    || optionText.textContent === "Дрессировка поисково-спасательных собак") {
    icon.classList.remove("sidebar-content__option-icon_lesson")
  }
  if (
    el.lastElementChild.textContent === "Тест" &&
    linkCurrent.textContent === "Курс завершен"
  ) {
    icon.classList.remove("sidebar-content__option-icon_test_active")
    icon.classList.add("sidebar-content__option-icon_completed")
  }
}

// Логика для страницы №2 о тесте
// блок "о тесте"
const aboutTest = document.getElementById("block-about");
// кнопка "начать тест" в блоке "о тесте"
const cardButton = aboutTest.querySelector(".content__start-button");
// блок "тест"
const testBlock = document.getElementById("block-main");
// кнопка "вернуться к тесту" в блоке "о тесте"
const buttonReturnToTheTest = aboutTest.querySelector(".content__link-button");
// закрыть блок "о тесте"
function closeAboutTest() {
  aboutTest.classList.add("content_hidden");
}
// открыть блок "тест"
function openTest() {
  testBlock.classList.remove("content_hidden");
}
// слушатель кнопки "начать тест" в блоке "о тесте"
cardButton.addEventListener("click", () => {
  startTest();
});
// ф-я при нажатии на кнопку "начать тест" в блоке "о тесте"
function startTest() {
  // закрыть о тесте
  closeAboutTest();
  // открыть тест
  openTest();
  if (results.classList.contains("results__green")) {
    btnMvdActive()
  }
}
// слушатель для кнопки "вернуться к тесту"
buttonReturnToTheTest.addEventListener("click", returnToTheTest);
// ф-я "вернуться к тесту"
function returnToTheTest() {
  cardButton.classList.remove("content__link-button_hidden");
  buttonReturnToTheTest.classList.add("content__link-button_hidden");
  mainContentSection.classList.remove("content_hidden");
  aboutTest.classList.add("content_hidden");
  if (results.classList.contains("results__green")) {
    btnMvdActive()
  }
}

// Логика для страницы "О тесте (посмотреть результаты)"
// открыть блок "о тесте"
function openAboutTest() {
  aboutTest.classList.remove("content_hidden");
}
// погасить кнопку "начать тест" в блоке "о тесте"
function hideStartTestButton() {
  cardButton.classList.add("content__link-button_hidden");
}
// активировать кнопку-ссылку "вернуться к тесту"
function showReturnToTheTestButton() {
  buttonReturnToTheTest.classList.remove("content__link-button_hidden");
}

function showTheClause() {
  openAboutTest();
  hideStartTestButton();
  showReturnToTheTestButton();
}

const testDescription = document.querySelector("#AboutTest");

testDescription.addEventListener("click", () => {
  showTheClause();
  mainContentSection.classList.add("content_hidden");
  btnMvdDisabled();
});
