$(document).ready(function () {

    var currentScore = 0;
    var targetNumber = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    var wins = 0;
    var losses = 0;

    function startGame() {

        currentScore = 0;

        // Sets a random target number between 19 and 120
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

        crystal1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        // Change the current score and target number
        $("#currentScore").html(currentScore);
        $("#targetNumber").html(targetNumber);

        console.log("------------------------------")
        console.log("Target number: " + targetNumber);
        console.log("Crystal 1: " + crystal1 + " | Crystal 2: " + crystal2 + " | Crystal 3: " + crystal3 + " | Crystal 4: " + crystal4);
        console.log("------------------------------")

    }

    // Change currentScore 
    

    function scoreCheck() {
        $("#currentScore").html(currentScore);
        if (currentScore === targetNumber) {
            alert ("Nice, you won!");
            wins++;

            // Change win count in html
            $("#win").html(wins);

            // Reset
            startGame();
        } 
        else if (currentScore > targetNumber) {
            alert ("Sorry, you lost!");
            losses++;

            // Change loss count in html
            $("#loss").html(losses);

            // Reset
            startGame();
        }
    }


    // Start Game
    startGame();

    // Click functions
    $("#crystal1").on("click", function() {
        currentScore = currentScore + crystal1;
        console.log("Your score: " + currentScore);
        scoreCheck();
    });

    $("#crystal2").click(function() {
        currentScore = currentScore + crystal2;
        console.log("Your score: " + currentScore);
        scoreCheck();
    });

    $("#crystal3").click(function() {
        currentScore = currentScore + crystal3;
        console.log("Your score: " + currentScore);
        scoreCheck();
    });

    $("#crystal4").click(function() {
        currentScore = currentScore + crystal4;
        console.log("Your score: " + currentScore);
        scoreCheck();
    });

})


   