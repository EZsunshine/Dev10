function validateItems() {
  var startingBet = document.forms["luckySevens"]["startingBet"].value;
  if (num == "") {
    alert("Must fill in a number.")
    document.forms["luckySevens"]["startingBet"].parentElement.className = "form-group has-error";
    document.forms["luckySevens"]["startingBet"].focus();
    return false;
  }
  if (num <= 0) {
    alert("Starting bet must be greater than 0.")
    document.forms["luckySevens"]["startingBet"].parentElement.className = "form-group has-error";
    document.forms["luckySevens"]["startingBet"].focus();
    return false;
  }
}



function luckySevens() {
    validateItems();
    var stBet = document.getElementById("startingBet").value;
    var money = stBet;
    var rolls = 0;
    var diceSum;
    var highestWinning = 0;
    var rollsAtMax = 0;

    if (money <= 0) {
        alert("Starting bet must be greater than 0.");
    }
    else {
      while (money > 0) {
        rolls++;
        dice1 = Math.floor(Math.random()*6)+1;
        dice2 = Math.floor(Math.random()*6)+1;
        diceSum = dice1 + dice2;

          if(diceSum != 7){
          money = money -1;
          }
          else {
            money = money + 4;
            if (money > highestWinning) {
            highestWinning = money;
            rollsAtMax = rolls;
            }
          }
      }
    }

   document.getElementById("results").style.display = "block";
   document.getElementById("playButton").innerText = "Play Again";
   document.getElementById("startingBet").innerText = stBet;
   document.getElementById("totalRolls").innerText = rolls;
   document.getElementById("highestAmountWon").innerText = highestWinning;
   document.getElementById("rollCountAtHighestAmountWon").innerText = rollsAtMax;
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
