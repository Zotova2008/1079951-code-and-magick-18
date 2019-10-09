'use strict';
(function () {
  var userSetting = document.querySelector('.setup');
  var userOther = document.querySelector('.setup-similar');

  userSetting.classList.remove('hidden');
  userOther.classList.remove('hidden');

  var userOtherList = document.querySelector('.setup-similar-list');
  var userOtherTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var WIZZARD_NUMBERS = 4;
  var WIZZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var randomWizzard = [];

  var getRandomIndex = function (array) {
    return array[Math.floor(Math.random() * (array.length))];
  };

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

  var renderWizard = function (wizard) {
    var wizardElement = userOtherTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  userOtherList.appendChild(fragment);

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
})();
