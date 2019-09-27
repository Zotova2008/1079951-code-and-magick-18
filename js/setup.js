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

var wizards = getSittingWizzard(WIZZARD_NUMBERS);

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
