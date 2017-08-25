// Back-end

// Constructor for Player Object
function Player(name) {
    this.totalScore = 0;
    this.playerName = name;
}

// Check if roll value is 1
Player.prototype.roll = function() {

    // Random number generator for a rolled dice
    var rolledValue = Math.floor(6*Math.random())+1;

    // this.totalScore += rolledValue;
    // When rolledValue is 0 the return is 0
    if(rolledValue === 1) {
        this.totalScore = 0;
        alert("You rolled 1, your turn is over");
    } else {
        this.totalScore += rolledValue;
    }

    // Test
    // console.log(rolledValue);
    // console.log(this.totalScore);

    return rolledValue;
}

// Hold 
Player.prototype.hold = function() {
    // console.log(this.totalScore);
    alert(this.playerName + " has held, switch to your opponent");
    return this.totalScore;
}

// Check for the winner
Player.prototype.checkForWinner = function() {
    if (this.totalScore >= 100) {
        return alert(this.playerName + " wins! Game Over!")
    }
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

            // Check player 1 total score
            var checkPlayer1 = p1.checkForWinner();

            // p1.turnScore = rolledValue;

            // Test
            // console.log(p1.roll());
            // console.log(player1Roll);
            // console.log(checkPlayer1);
            // console.log(rolledValue);
            // console.log(p1.totalScore);

            // Display in section 4
            // $('displayPlayer1RollScore').text(rolledValue);
            $('#displayPlayer1TotalScore').text(p1.totalScore);

        });

        // Player 2 can roll
        $('#rollButton2').click(function (event) {
            event.preventDefault();

            var player2Roll = p2.roll();

            // Check player 2 total score
            var checkPlayer2 = p2.checkForWinner();

            // Test
            // console.log(p2.roll());
            // console.log(player2Roll);
            // console.log(checkPlayer2);
            // console.log(p2.totalScore);

            // Display in section 4
            $('#displayPlayer2TotalScore').text(p2.totalScore);

        });

        // Player 1 can hold
        $('#holdButton1').click(function (event) {
            event.preventDefault();

            // Hold for player 1
            var player1Hold = p1.hold();

            // Test
            // console.log(player1Hold);
        });

        // Player 2 can hold
        $('#holdButton2').click(function (event) {
            event.preventDefault();

            // Hold for player 2
            var player2Hold = p2.hold();

            // Test
            // console.log(player2Hold);
        });

        // Clear input fields
        clearFields();
    });

});