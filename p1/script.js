let app = new Vue({
    el: '#app',
    data: {
        'player': [],
        'computer': [] 

    }
}),

function computer () {
    var computer = Math.random();
    if (computer < 0.34) {
        computerPick = "Rock";
    } else if (computer < 0.67) {
        computerPick = "Paper";
    } else {
        computerPick = "Scissors";
}
}



function winner() {
  var userPick = this.id;
  console.log("You: " + userPick);
  console.log("Computer: " + computerPick);
  var result = game(userPick, computerPick);
  console.log(game(userPick, computerPick));
  function game(pickU, pickC) {
    if (pickU === pickC) {
      return "It's a tie!";
    } else if (pickU === "Rock") {
      if (pickC === "Scissors") {
        return "You Win!";
      } else {
        return "You Lose!";
      }
    } else if (pickU === "Paper") {
      if (pickC === "Rock") {
        return "You Win!";
      } else {
        return "You Lose!";
      }
    } else if (pickU === "Scissors") {
      if (pickC === "Paper") {
        return "You Win!";
      } else {
        return "You Lose!";
      }
    }
  }
  alert(
    "You picked: " +
      userPick +
      "    " +
      " Computer picked: " +
      computerPick +
      "   " +
      result
  );
}
