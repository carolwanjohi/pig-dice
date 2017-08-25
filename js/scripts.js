// Back-end

// Constructor for Player Object
function Player(turn) {
    this.turn = turn;
    this.roll = 0;
    this.totalScore = 0;
    this.playerName;
}

// Random number generator
function randomNumberGenerator () {
    return Math.floor(6*Math.ran())+1
}

// Clear input fields
function clearFields() {
    $('input#player1').val("");
    $('input#player2').val("");
}

// Front-end
$(document).ready(function () {

    // Play Button 
    $('form#createPlayers').submit(function (event){
        event.preventDefault();

        // Store user input
        var player1InputtedName = $('input#player1').val();
        var player2InputtedName = $('input#player2').val();


        // Test
        console.log(player1InputtedName);
        console.log(player2InputtedName);

        // Display in section 4
        $('#player1Name').text(player1InputtedName);
        $('#player2Name').text(player2InputtedName);

    });

    // 

});