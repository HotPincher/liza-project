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
  // TODO reaname testButton
  if (
    (testCheck1.checked || testCheck2.checked || testCheck3.checked) &&
    (testRadio1.checked || testRadio2.checked || testRadio3.checked)
  ) {
    validateAnswers();
    showResultTest();
  }
  // validateAnswers(q1Answer, q2Answer)
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
    // TODO remove [ index ] later
    answerList.push(element.checked);
  }
  return answerList;
};

const highlightAnswer = (element, highlightType, inputType) => {
  // highlightType = correct / success / wrong / cross
  //  check if highlightType have correct value
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
    // check if both of forms have at least one answer
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
  // console.info('#q1 check');
  for (const [index, answer] of q1Answer.entries()) {
    // console.log(index, answer);
    const response = checkAnswer(
      (given_answer = answer),
      (correct_answer = correctAswers["q1"][index])
    );
    // console.log(response);
    highlightAnswer(
      (element = answerMapQ1[index]),
      (highlightType = `${response}`),
      (inputType = "checkbox")
    );
  }
  // console.info('#q2 check');
  for (const [index, answer] of q2Answer.entries()) {
    // console.log(index, answer);
    const response = checkAnswer(
      (given_answer = answer),
      (correct_answer = correctAswers["q2"][index])
    );
    // console.log(response);
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
let resultTextOne = document.querySelector("#results_text_one");
//переменная со второй строкой текста в блоке с результатами
let resultTextTwo = document.querySelector("#results_text_two");
//переменная с третьей строкой текста в блоке с результатами
let resultTextThree = document.querySelector("#results_text_three");

// //функция, которая скрывает кнопку Проверить и открывает кнопку Пересдать
const hideButton = function () {
  testButton.classList.add("button__hidden");
  testRetake.classList.remove("button__hidden");
};

const showButton = function () {
  testButton.classList.remove("button__hidden");
  testRetake.classList.add("button__hidden");
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
  } else {
    testButton.classList.add("button__hidden");
    testRetake.classList.remove("button__hidden");
    testRetake.classList.remove("content__button_retake-success");
    testRetake.classList.add("content__button_retake-wrong");
    results.classList.add("results__red");
    resultsTitle.textContent = "33%";
    resultTextOne.textContent =
      "К сожалению, вы не набрали проходной результат.";
    resultTextTwo.textContent = "Нажмите «Пересдать», чтобы попробовать снова.";

    resultTextThree.remove();
    // resultTextTwo.textContent = 'К сожалению, вы не набрали проходной результат.';
    // resultTextThree.textContent = 'Нажмите «Пересдать», чтобы попробовать снова.';
    hideButton();
  }
}

//переменные с текстом окна завершения курса
let completedCourseSection = document.querySelector("#block-result");
let completedCourseSubtitle = completedCourseSection.querySelector(
  ".completed-course__subtitle"
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
//переменная с блоком основного контента
let mainContentSection = document.querySelector("#block-main");

//переменная с блоком основного контента
let buttonForward = document.querySelector("#button_forward");

//функция скрывающая сексии с результатами и основного контента и показывающее результирующее окно курса
function hideResultsShowCompleted() {
  results.classList.add("hidden");
  mainContentSection.classList.add("hidden");
  completedCourseSection.classList.remove("hidden");
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
    !video.classList.contains("hidden")
  ) {
    aboutTest.classList.remove("hidden");
    video.classList.add("hidden");
    updateBreadCrumps();
    btnMvdDisabled();
    testBlock.classList.add('hidden');
  }
  if (results.classList.contains("results__red")) {
    hideResultsShowCompleted();
    updateBreadCrumps();
    btnLableChange();
  } else if (results.classList.contains("results__green")) {
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

//Изменение иконок и цвета пунков меню

const titles = document.querySelectorAll(".content__title");
const course = document.querySelectorAll(".breadcrumbs__link");

const arrTitles = [...titles];

// Преобразую NodeList в массив, ищу элемент, чей текст совпадает с текстом в основном блоке,
//меняю его цвет и создаю новый массив от начала до этого элемента

const arrCoursesAll = [...optionsItem];
let arrCoursesCompleted;

//Функция изменения цвета и иконок пунктов содержания при загрузке и нажатии на кнопку "вперед"

function resetOptionColorIcon() {

  arrCoursesAll.forEach(function (item) {
    const optionItemCurrent = item.closest("ul").dataset.target;
    let activeItem;

    arrTitles.forEach(function (el) {
      if (
        item.lastElementChild.textContent == el.textContent &&
        optionItemCurrent === course[2].dataset.path &&
        !el.closest("div").parentElement.classList.contains("hidden")
      ) {

        changeOptionColor(item);
        activeItem = arrCoursesAll.indexOf(item);
        arrCoursesCompleted = arrCoursesAll.slice(0, activeItem);
        arrCoursesCompleted.forEach(function (item) {
          changeIcon(item)
        })

      } if (
        item.lastElementChild.textContent === "Тест" &&
        el.textContent === "Курс завершен" &&
        optionItemCurrent === course[2].dataset.path &&
        !el.closest("section").classList.contains("hidden")
      ) {
        changeIcon(item);
        activeItem = arrCoursesAll.indexOf(item);
        arrCoursesCompleted = arrCoursesAll.slice(0, activeItem);
      }

    });
  });

}
resetOptionColorIcon()

frowardButton.addEventListener("click", resetOptionColorIcon);
buttonBack.addEventListener("click", resetOptionColorIcon);

//Функция изменения цвета у текущей темы
function changeOptionColor(el) {
  const icon = el.firstElementChild.childNodes[1];
  const optionText = el.childNodes[3];
  optionText.classList.add("sidebar-content__option_active");
  icon.style.fill = "#F06000";
}

//Функция смены иконки пройденной темы
function changeIcon(el) {
  const icon = el.childNodes[1];
  const optionText = el.childNodes[3];
  const iconNew = document.createElement("img");
  iconNew.src = "./images/icon-green.svg";
  iconNew.alt = "Иконка";
  icon.replaceWith(iconNew);
  optionText.classList.remove("sidebar-content__option_active");
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
  aboutTest.classList.add("hidden");
}
// открыть блок "тест"
function openTest() {
  testBlock.classList.remove("hidden");
}
// слушатель кнопки "начать тест" в блоке "о тесте"
cardButton.addEventListener("click", startTest);
// ф-я при нажатии на кнопку "начать тест" в блоке "о тесте"
function startTest() {
  // закрыть о тесте
  closeAboutTest();
  // открыть тест
  openTest();
}
// слушатель для кнопки "вернуться к тесту"
buttonReturnToTheTest.addEventListener("click", returnToTheTest);
// ф-я "вернуться к тесту"
function returnToTheTest() {
  cardButton.classList.remove("hidden");
  buttonReturnToTheTest.classList.add("hidden");
  mainContentSection.classList.remove("hidden");
  aboutTest.classList.add("hidden");
  if (results.classList.contains("results__green")||results.classList.contains("results__red")) {
    btnMvdActive()
  }
}

// Логика для страницы "О тесте (посмотреть результаты)"
// открыть блок "о тесте"
function openAboutTest() {
  aboutTest.classList.remove("hidden");
}
// погасить кнопку "начать тест" в блоке "о тесте"
function hideStartTestButton() {
  cardButton.classList.add("hidden");
}
// активировать кнопку-ссылку "вернуться к тесту"
function showReturnToTheTestButton() {
  buttonReturnToTheTest.classList.remove("hidden");
}

function showTheClause() {
  openAboutTest();
  hideStartTestButton();
  showReturnToTheTestButton();
}

const testDescription = document.querySelector("#AboutTest");

testDescription.addEventListener("click", () => {
  showTheClause();
  mainContentSection.classList.add("hidden");
  btnMvdDisabled();
});
