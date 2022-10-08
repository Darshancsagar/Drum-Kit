var numberOfDrumButtons = document.querySelectorAll(".drum").length;

foot= document.getElementById("footer");

let message="changed successfully"



for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
   

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      foot.innerHTML="Where words fail, music speaks";
       
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      foot.innerHTML="Music is like a dream. One that I cannot hear";
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      foot.innerHTML="One good thing about music, when it hits you, you feel no pain";
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      foot.innerHTML="Music is like a dream. One that I cannot hear";
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      foot.innerHTML="Music is like a dream. One that I cannot hear";
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      foot.innerHTML="Music is like a dream. One that I cannot hear";
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      foot.innerHTML="Music is like a dream. One that I cannot hear";
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
