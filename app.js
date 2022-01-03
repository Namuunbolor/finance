var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: "add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiController, financeController) {
  var DOM = uiController.getDOMstrings();

  var ctrlAddItem = function () {
    // oruulah ugugdul delgetsees olj awna.
    console.log(uiController.getInput());
    // olj awsan ugugdluudee sanhuud hadgalna.
    // olj awsan ugugdluudee web deeree tohiroh hesegt gargana.
    // Tusviig tootsoolno
    // etssiin uldegdel tootsoog gargana.
  };
  document.querySelector(DOM.addBtn).addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keycode === 13) console.log("enter");
    else console.log("no");
  });
})(uiController, financeController);
