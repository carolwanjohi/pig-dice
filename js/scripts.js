// Back-end

// Constructor for Player Object
function Player(turn) {
    this.turn = turn;
    this.roll = 0;
    this.totalScore = 0;
    this.playerName;
}

// Random number generator
function throwDice() {
    return Math.floor(6*Math.random())+1;
}

// Check if roll value is 1
Player.prototype.rollOne = function() {
    if(this.roll === 1) {
        this.totalScore = 0;
    } else {
        this.totalScore += this.roll;
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

        p1 = new Player(true);
        p2 = new Player(false);

        p1.playerName = player1InputtedName;
        p2.playerName = player2InputtedName;

        // Test
        // console.log(player1InputtedName);
        // console.log(player2InputtedName);
        // console.log(p1.playerName);
        // console.log(p2.playerName);

        // Display in section 4
        $('#player1Name').text(p1.playerName);
        $('#player2Name').text(p2.playerName);

        
        // Player 1 can roll
        $('#rollButton1').click(function (event) {
            event.preventDefault();
            p1.roll = throwDice();
            console.log(p1.roll)
            $('#displayPlayer1Score').text(p1.roll);
        });
        
    });

    // Clear input fields
    clearFields();

});