'use strict';
(function () {
  var form = window.dialog.userDialog.querySelector('.setup-wizard-form');

  var coatColor;
  var eyesColor;
  var fireColor;

  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    if (wizard.colorFireball === fireColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), window.dialog.closePopup, window.backend.errorHandler);
  });

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.wizard.onFireChange = window.debounce(function (color) {
    fireColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.dialog.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  window.backend.load(successHandler, window.backend.errorHandler);
})();
