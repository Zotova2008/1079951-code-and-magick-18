'use strict';
(function () {
  var userOtherList = document.querySelector('.setup-similar-list');
  var userOtherTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardSetting = document.querySelector('.setup-player');
  var wizardCoat = wizardSetting.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = wizardSetting.querySelector('.setup-wizard .wizard-eyes');
  var wizardFire = wizardSetting.querySelector('.setup-fireball-wrap');

  var wizardCoatArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyesArray = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardFireArray = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var form = window.dialog.userDialog.querySelector('.setup-wizard-form');

  var getRandomIndex = function (array) {
    return array[Math.floor(Math.random() * (array.length))];
  };

  var getSittingWizzard = function (wizard, element) {
    element.querySelector('.setup-similar-label').textContent = wizard.name;
    element.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return element;
  };

  var addWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      var wizardElement = userOtherTemplate.cloneNode(true);
      wizardElement = getSittingWizzard(wizards[i], wizardElement);
      fragment.appendChild(wizardElement);
    }
    userOtherList.appendChild(fragment);
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), window.dialog.closePopup, window.backend.errorHandler);
  });

  window.dialog.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  window.backend.load(addWizards, window.backend.errorHandler);

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
