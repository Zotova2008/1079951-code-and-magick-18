'use strict';

(function () {
  // Получение случайного элемента из массива
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    },
    onFireChange: function (color) {
      return color;
    }
  };

  var wizardElement = document.querySelector('.setup-player');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardCoatColors = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];

  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(wizardCoatColors);
    var wizardCoatInput = wizardElement.querySelector('input[name="coat-color"]');
    wizardCoatElement.style.fill = newColor;
    wizardCoatInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var wizardEyesColors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];

  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(wizardEyesColors);
    var wizardEyesInput = wizardElement.querySelector('input[name="eyes-color"]');
    wizardEyesElement.style.fill = newColor;
    wizardEyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  var wizardFireElement = document.querySelector('.setup-fireball-wrap');
  var wizardFireColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  wizardFireElement.addEventListener('click', function () {
    var newColor = getRandomElement(wizardFireColors);
    var wizardFireInput = wizardFireElement.querySelector('input[name="fireball-color"]');
    wizardFireElement.style.background = newColor;
    wizardFireInput.value = newColor;
    wizard.onFireChange(newColor);
  });

  window.wizard = wizard;
})();
