var totalButtons = document.querySelectorAll(".drum").length;

function AudioObject(name, key) {
  this.audio = new Audio("sounds/" + name + ".mp3");
  this.key = key;
}

for (var i = 0; i < totalButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    makeSound(key);
    makeAnimation(key);
  });

  document.addEventListener("keydown", function(event) {
    makeSound(event.key)
  });

}

function makeAnimation(key) {

  var activeButtonClass = document.querySelector("."+key).classList;
  activeButtonClass.add("pressed");

  setTimeout(function() {
    activeButtonClass.remove("pressed");
  },100);

}

function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new AudioObject("tom-1", "w");
      audio.audio.play();
      break;

    case "a":
      var audio = new AudioObject("tom-2", "a");
      audio.audio.play();
      break;

    case "s":
      var audio = new AudioObject("tom-3", "s");
      audio.audio.play();
      break;

    case "d":
      var audio = new AudioObject("tom-4", "d");
      audio.audio.play();
      break;

    case "j":
      var audio = new AudioObject("snare", "j");
      audio.audio.play();
      break;

    case "k":
      var audio = new AudioObject("crash", "k");
      audio.audio.play();
      break;

    case "l":
      var audio = new AudioObject("kick-bass", "l");
      audio.audio.play();
      break;

    default:
  }
}
