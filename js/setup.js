'use strict';

var userSetting = document.querySelector('.setup');
var userOther = document.querySelector('.setup-similar');

userSetting.classList.remove('hidden');
userOther.classList.remove('hidden');

// Находим контейнер, куда вставлять разметку из шаблона
var userOtherList = document.querySelector('.setup-similar-list');
// Находим сам шаблон и в нем нужную разметку
var userOtherTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// Характеристики случайных магов
var WIZZARD_NUMBERS = 4;
var WIZZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var randomWizzard = [];

// Расчет случайного индекса
var getRandomIndex = function (array) {
  return array[Math.floor(Math.random() * (array.length))];
};

// Отрисовка случайного мага
var getSittingWizzard = function () {
  for (var i = 0; i < WIZZARD_NUMBERS; i++) {
    randomWizzard.push({
      name: getRandomIndex(WIZZARD_NAMES) + ' ' + getRandomIndex(WIZZARD_SURNAMES),
      coatColor: getRandomIndex(WIZZARD_COAT),
      eyesColor: getRandomIndex(WIZZARD_EYES),
    });
  }
  return randomWizzard;
};

var wizards = getSittingWizzard();

// Отрисовка мага случайными данными
var renderWizard = function (wizard) {
  var wizardElement = userOtherTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Создаем разметку для блога "Похожие персонажи"
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

userOtherList.appendChild(fragment);

// Открытие и закрытие блока настроек
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Цвет мантии.setup - wizard.wizard - coat должен обновляться по нажатию на неё.Цвет мантии задаётся через изменение инлайнового CSS - свойства fill для элемента.Цвет должен сменяться произвольным образом на один из следующих цветов:
// 1. находим в разметке блок цвета мантии, цвет глаз, цвет фаербола
var wizardSetting = document.querySelector('.setup-player');
var wizardCoat = wizardSetting.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = wizardSetting.querySelector('.setup-wizard .wizard-eyes');
var wizardFire = wizardSetting.querySelector('.setup-fireball-wrap');

var wizardCoatArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesArray = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFireArray = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

wizardCoat.addEventListener('click', function () {
  var render = getRandomIndex(wizardCoatArray);
  var wizardCoatInput = wizardSetting.querySelector('input[name="coat-color"]');
  wizardCoat.style.fill = render;
  wizardCoatInput.value = render;
});
wizardEyes.addEventListener('click', function () {
  var render = getRandomIndex(wizardEyesArray);
  var wizardEyesInput = wizardSetting.querySelector('input[name="eyes-color"]');
  wizardEyes.style.fill = render;
  wizardEyesInput.value = render;
});
wizardFire.addEventListener('click', function () {
  var render = getRandomIndex(wizardFireArray);
  var wizardFireInput = wizardFire.querySelector('input[name="fireball-color"]');
  wizardFire.style.background = render;
  wizardFireInput.value = render;
});
