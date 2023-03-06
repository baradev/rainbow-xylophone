for (var i = 0; i < document.querySelectorAll(".note").length; i++) {
  document.querySelectorAll(".note")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "c":
      var red = new Audio("sounds/c-tune.wav");
      red.play();
      break;

    case "d":
      var orange = new Audio("sounds/d-tune.wav");
      orange.play();
      break;

    case "e":
      var yellow = new Audio("sounds/e-tune.wav");
      yellow.play();
      break;

    case "f":
      var green = new Audio("sounds/f-tune.wav");
      green.play();
      break;

    case "g":
      var green2 = new Audio("sounds/g-tune.wav");
      green2.play();
      break;

    case "a":
      var blue = new Audio("sounds/a-tune.wav");
      blue.play();
      break;

    case "b":
      var purple = new Audio("sounds/b-tune.wav");
      purple.play();
      break;

    case "2":
      var pink = new Audio("sounds/c2-tune.wav");
      pink.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
