//create button
//on clicking the button, a time starts and questions are displayed
//make selections on bubble quiz, can only provide 1 answer per question
//when timer expires, results are displayed ( correct answers, incorrect answers, unanswered)
//OR click done button and results are displayed as described above.

    
$(document).ready(function() {
   

    var btfquestions = [{
        question1: "Which song is playing as Marty enters the Cafe 80s in Part II?",
        choices1: ["Billie Jean", "Beat It", "Rock the Casbah", "You Better You Bet"],
        correctAnswer1: 1
    }, {
        question2: "What phrase does the Doc repeat throughout the trilogy?",
        choices2: ["Dax", "Darren", "Dave", "Dixon"],
        correctAnswer2: 3
    }, {
        question3: "What phrase does the Doc repeat throughout the trilogy?",
        choices3: ["My God!", "Sweet Baby Jesus!", "Great Scott!", "By George!"],
        correctAnswer3: 3
    }, {
        question4: "What does Doc pack into his suitcase in case they don't have it in the future?",
        choices4: ["Coffe", "Cotton Underwear", "Radio", "A Gun"],
        correctAnswer4: 1
    }, {
        question5: "What date was George McFly murdered in Back to the Future Part II?",
        choices5: ["March 15, 1973", "March 21, 1971", "March 19, 1972", "March 17, 1974"],
        correctAnswer5: 0
    }];


    $(".quiz").hide();
    $("#results").hide();
    $("#start").click(function() {
        //function for timer
        $(".button").remove();
        //displays questions//
        $(".quiz").show();

        (function() {
            var counter = 31;

            setInterval(function() {
                counter--;
                if (counter >= 0) {
                    span = document.getElementById("timer");
                    span.innerHTML = counter;
                }
                // Display 'counter' wherever you want to display it.
                if (counter === 0) {
                    clearInterval(counter);
                    $("#timer").remove();
                    $(".quiz").remove();
                    $(".done").remove();
                    $("#results").show();
                }

                else {
                    $(".done").click(function() {
                        $("#timer").remove();
                        $(".quiz").remove();
                        $(".done").remove();
                        $("#results").show();
                    });
                }

            }, 1000);

        })();

var answers = ["A","C","B"];
var tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getCorrect(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function getIncorrect(){
    var score = 0;
    for (var i=0; i<tot; i++)
      if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
    return score;
  }

(function returnScore(){
    $(".correct").html("Correct: " + getCorrect());
    $(".incorrect").html("Incorrect: " + getIncorrect());
})();
    

    });
    

});
