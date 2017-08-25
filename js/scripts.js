// Back-end

// Constructor for Player Object
function Player(name) {
    this.turnScore = 0;
    this.totalScore = 0;
    this.playerName = name;
}

// Random number generator for a rolled dice
// function throwDice() {
//     return Math.floor(6*Math.random())+1;
// }

// Hold 
// Player.prototype.hold = function () {
//     return this.totalScore += this.roll
// }

// Check if roll value is 1
Player.prototype.roll = function() {

    // Random number generator for a rolled dice
    var rolledValue = Math.floor(6*Math.random())+1;

    this.totalScore += rolledValue;
    // When rolledValue is 0 the return is 0
    if(rolledValue === 1) {
        this.totalScore = 0;
        alert("You rolled 1, your turn is over");
    } else {
        this.totalScore = this.totalScore + this.turnScore;
    }

    // Test
    // console.log(this.totalScore);

    return this.totalScore;
}

// Clear input fields
function clearFields() {
    $('input#player1').val("");
    $('input#player2').val("");
}

// Store user inputted name to thse variables
var p1 = " ";
var p2 = " ";

// Front-end
$(document).ready(function () {

    // Play Button 
    $('form#createPlayers').submit(function (event){
        event.preventDefault();

        // Store user input
        var player1InputtedName = $('input#player1').val();
        var player2InputtedName = $('input#player2').val();

        p1 = new Player(player1InputtedName);
        p2 = new Player(player2InputtedName);

        // Test
        // console.log(player1InputtedName);
        // console.log(player2InputtedName);
        // console.log(p1.playerName);
        // console.log(p2.playerName);

        // Display in section 4
        $('#players--showing').toggle();
        $('#player1Name').text(p1.playerName);
        $('#player2Name').text(p2.playerName);

        
        // Player 1 can roll
        $('#rollButton1').click(function (event) {
            event.preventDefault();

            var player1Roll = p1.roll();

            // Test
            // console.log(p1.roll());
            console.log(player1Roll);

            // Display in section 4
            $('#displayPlayer1TotalScore').text(player1Roll);

        });

        // Player 2 can roll
        $('#rollButton2').click(function (event) {
            event.preventDefault();

            var player2Roll = p2.roll();

            // Test
            // console.log(p2.roll());
            console.log(player2Roll);

            // Display in section 4
            $('#displayPlayer2TotalScore').text(player2Roll);

        });

        // // Player 1 can hold
        // $('#holdButton1').click(function (event) {
        //     event.preventDefault();

        //     var player1Hold = p1.hold();

        //     // Test
        //     console.log(player1Hold);
        // });

        // Clear input fields
        clearFields();
    });

});