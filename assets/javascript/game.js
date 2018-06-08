$(document).ready(function () {

    var targetNumber = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;


    // Here we set the "number-to-guess" header to match the "targetNumber".
    // Eventually this will allow us to change the HTML to match the value in the JavaScript.
    $("#number-to-guess").text(targetNumber);

    var numberOptions

    var wins = 0;
    var losses = 0;

    var numberOptions = [crystal1, crystal2, crystal3, crystal4];

    for (var i = 0; i < numberOptions.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", )

        var increment = numberOptions[Math.round(Math.random())];

        function reset() {
            targetNumber = Math.floor(Math.random() * 101) + 19;
            crystal1 = Math.floor(Math.random() * 12) + 1;
            crystal2 = Math.floor(Math.random() * 12) + 1;
            crystal3 = Math.floor(Math.random() * 12) + 1;
            crystal4 = Math.floor(Math.random() * 12) + 1;
        }

        var counter = 0;

        // Next we create a for loop to create crystals for every numberOption.
        for (var i = 0; i < numberOptions.length; i++) {

            // For each iteration, we will create an imageCrystal
            var imageCrystal = $("<img>");

            // First each crystal will be given the class ".crystal-image".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("crystal-image");

            // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#crystals").append(imageCrystal);
        }

        // This time, our click event applies to every single crystal on the page. Not just one.
        $(".crystal-image").on("click", function () {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);

            counter += crystalValue;


            if (counter === targetNumber) {
                wins++;
                reset();
                // If the numbers match we'll celebrate the user's win.
                alert("You win!");
            }
            else if (counter >= targetNumber) {
                losses++;
                reset();
                alert("You lost!");
            };


        }

