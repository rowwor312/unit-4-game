// $(document).ready(function(){

var wins = 0;
var loses = 0;
var counter = 0;
var score = 0;

var targetNumber = Math.floor(Math.random() * 102 + 19);
$("#number-to-guess").text(targetNumber);


var crystalValue1 = Math.floor(Math.random() * 12 + 1);
$("#crystalOne").on("click", function() {
  counter += crystalValue1;
    // document.getElementById("score").innerHTML = counter;
    $("#score").text(counter);

      if (counter === targetNumber) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      counter=0;
      // score=0;
      alert("You win!");
      resetGame();
      
     }
     else if (counter > targetNumber) {
     loses++;
     document.getElementById("loses").innerHTML = loses;
      counter=0;
      // score=0;
      alert("You lose!!");
      resetGame();
      
    }
    console.log(crystalValue1);
    console.log(counter);
    console.log(score);
    
 });

 var crystalValue2 = Math.floor(Math.random() * 12 + 1);
 $("#crystalTwo").on("click", function() {
    counter += crystalValue2;
    $("#score").text(counter);
    // document.getElementById("score").innerHTML = counter;
        
      if (counter === targetNumber) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      counter=0;
      // score=0;
      alert("You win!");
      resetGame();
      
     }
     else if (counter > targetNumber) {
      
      loses++;
      document.getElementById("loses").innerHTML = loses;
      counter=0;
      // score=0;
      alert("You lose!!");
      resetGame();
      
    }  
    console.log(crystalValue2);
    console.log(counter);
    console.log(score);
    
  });

  var crystalValue3 = Math.floor(Math.random() * 12 + 1);
  $("#crystalThree").on("click", function() {
    counter += crystalValue3;
    // document.getElementById("score").innerHTML = counter;
    $("#score").text(counter);    
      if (counter === targetNumber) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      counter=0;
      // score=0;
      alert("You win!");
      resetGame();
      
     }
     else if (counter > targetNumber) {
     
      loses++;
      document.getElementById("loses").innerHTML = loses;
      counter=0;
      // score=0;
      alert("You lose!!");
      resetGame();
      
    }  
    console.log(crystalValue3);
    console.log(counter);
    console.log(score);
    
  });

  var crystalValue4 = Math.floor(Math.random() * 12 + 1);
  $("#crystalFour").on("click", function() {
    counter += crystalValue4;
    // document.getElementById("score").innerHTML = counter;
    $("#score").text(counter);

    if (counter === targetNumber) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      counter=0;
      // score=0;
      alert("You win!");
      resetGame();
      
     }
     else if (counter > targetNumber) {
      
      loses++;
      document.getElementById("loses").innerHTML = loses;
      counter=0;
      // score=0;
      alert("You lose!!");
      resetGame();
      
     }
    console.log(crystalValue4);
    console.log(counter);
    console.log(score);
    
  });

  // alert("New score: " + score + " " + "Press Any Crystal");
  
  
  //  Reset Game After Win/Lose
  function resetGame(){
    var targetNumber = Math.floor(Math.random() * 102 + 19);
    $("#number-to-guess").text(targetNumber);
    var score = 0;
    var counter = 0;
    $("#score").text(counter);
    crystalValue1 = Math.floor(Math.random() * 12 + 1);
    crystalValue2 = Math.floor(Math.random() * 12 + 1);
    crystalValue3 = Math.floor(Math.random() * 12 + 1);
    crystalValue4 = Math.floor(Math.random() * 12 + 1);
  }
// });
