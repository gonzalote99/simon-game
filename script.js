var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var useClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if(!started) {
    $("#level-title").text("level" + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  useClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(useClickedPattern.length -1);
});
function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === useClickedPattern[currentLevel]) {
    if(useClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();

      }, 1000);
    }
  } else {
    playSound.src = "raw.githubusercontent.com/shsarv/Simon-Game/tree/master/sounds/wrong.mp3";
    $("body").addClass("game-over");
    $("#level-title").text("game over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    },200);
    startOver();
  }
}

function nextSequence() {
  useClickedPattern = [];
  level++;
  $("#level-title").text("level" + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#", randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed"); 
  }, 100);
}
function playSound() {
  var audio = new Audio("raw.githubusercontent.com/shsarv/Simon-Game/tree/master/sounds");
  audio.play();
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

