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

    var q1 = "C";
    var q2 = "B";
    var correctCounter = 0;

    function correct(qNum, choice) {
    
        if (qNum == "q1" && choice == "C") {
            correctCounter += 1;
            console.log("correct");
        }

        if (qNum == "q2" && choice == "B") {
            correctCounter += 1;
        }
    }

    $(".quiz").hide();
    $("#results").hide();
    $("#start").click(function() {
        //function for timer
        $(".button").remove();
        //displays questions//
        $(".quiz").show();

        (function() {
            var counter = 19999;

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
                        clearInterval(timer);
                        $("#timer").remove();
                        $(".quiz").remove();
                        $(".done").remove();
                        for(var i = 0; i < 0; i++){
                            $("li") 
                        }

                        //for loop
                        //grab list of children id from quiz, grab selected radio button
                        //loop through array, each time call correct();
                        $("#results").show();
                    $(".correct").append("Correct: " + correctCounter);
                    });
                }

            }, 1000);

        })();
    });
    

});
