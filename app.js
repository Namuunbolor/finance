var uiController = (function () {})();

var financeController = (function () {})();

var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    console.log("Дэлгэцээс өгөдлөө авах хэсэг");
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
    // oruulah ugugdul delgetsees olj awna.
    // olj awsan ugugdluudee sanhuud hadgalna.
    // olj awsan ugugdluudee web deeree tohiroh hesegt gargana.
    // Tusviig tootsoolno
    // etssiin uldegdel tootsoog gargana.
  });

  document.addEventListener("keypress", function (event) {
    if (event.keycode === 13) console.log("enter");
    else console.log("no");
  });
})(uiController, financeController);
