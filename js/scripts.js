// Back-end

// Store user inputted names to these variables
var p1 = " ";
var p2 = " ";

// Constructor for Player Object
function Player(name, active, diceRoll, totalScore) {
    this.playerName = name;
    this.active = active;
    this.diceRoll = 0;
    this.totalScore = 0;
}

// Switch players
function switchPlayer() {
    if (p1.active === true && p2.active === false) {

        $('.player1Console').children().prop('disabled', false);
        $('.player1Console').removeClass('disableGamingArea');
        $('.player2Console').children().prop('disabled', true);
        $('.player2Console').addClass('disableGamingArea');

        // Test
        // console.log('I am groot');

    } else {

        $('.player1Console').children().prop('disabled', true);
        $('.player1Console').addClass('disableGamingArea');
        $('.player2Console').children().prop('disabled', false);
        $('.player2Console').removeClass('disableGamingArea');

        // Test
        // console.log('I am NOT groot');

    }

}


// Check if roll value is 1
Player.prototype.roll = function() {

    // Random number generator for a rolled dice
    var rolledValue = Math.floor(6*Math.random())+1;

    // Assign random value to diceRoll
    this.diceRoll = rolledValue;

    // When rolledValue is 1 the return is 0
    if(rolledValue === 1) {

        // Revert total score to 0
        this.totalScore = 0;

        // Set dice roll value to 1
        this.diceRoll = 1;

        // Disable player console   

        if (this.active === p1.active) {

            p1.active = false;
            p2.active = true;
            $('.player1Console').children().prop('disabled', true);
            $('.player1Console').addClass('disableGamingArea');
            $('.player2Console').children().prop('disabled', false);
            $('.player2Console').removeClass('disableGamingArea');
            console.log('I am groot');

        } else if (this.active === p2.active) {

            p1.active = true;
            p2.active = false;
            $('.player1Console').children().prop('disabled', false);
            $('.player1Console').removeClass('disableGamingArea');
            $('.player2Console').children().prop('disabled', true);
            $('.player2Console').addClass('disableGamingArea');
            console.log('I am NOT groot');

        } else {

            console.log('Does not compute');

        }

        // Display alert message
        return alert(this.playerName + " rolled 1, your turn is over");

    } else {

        // Add the rolled value to the total score
        this.totalScore += rolledValue;
    }

    // Test
    // console.log(this.diceRoll);
    // console.log(this.totalScore);

    return this.diceRoll;
}

// Hold 
Player.prototype.hold = function() {

    switchPlayer();
    alert(this.playerName + " has held, switch to your opponent");

    // Test  
    // console.log(this.totalScore);

    return this.totalScore;
}

// Check for the winner
Player.prototype.checkForWinner = function() {
    if (this.totalScore >= 100) {
        return alert(this.playerName + " wins! Game Over!");
    }
}

// Clear input fields
function clearFields() {
    $('input#player1').val("");
    $('input#player2').val("");
}


// Front-end

$(document).ready(function () {
        
    // Click on rules header to show the rules
    $('.rulesHeader').click(function () {
      $('.hideMe').toggle();  
    });

    // Play Button 
    $('form#createPlayers').submit(function (event){
        event.preventDefault();

        // Store user input
        var player1InputtedName = $('input#player1').val();
        var player2InputtedName = $('input#player2').val();

        p1 = new Player(player1InputtedName);
        p2 = new Player(player1InputtedName);

        p1.playerName = player1InputtedName;
        p2.playerName = player2InputtedName;

        // Test
        // console.log(player1InputtedName);
        // console.log(player2InputtedName);
        // console.log(p1.playerName);
        // console.log(p2.playerName);

        // Display in section 4
        $('#players--showing').show();
        $('.hideMe').hide();
        $('form#createPlayers').hide();
        $('#player1Name').text(p1.playerName);
        $('#player2Name').text(p2.playerName);

        
        // Player 1 can roll
        $('#rollButton1').click(function (event) {
            event.preventDefault();

            p1.active = true;
            p2.active = false;
            p1.roll();

            // Test
            // console.log(p1.roll());
            // console.log(p1.diceRoll);
            // console.log(p1.totalScore);

            // Display in section 4
            $('#displayPlayer1RollScore').text(p1.diceRoll);
            $('#displayPlayer1TotalScore').text(p1.totalScore);

            // Check player 1 total score
            p1.checkForWinner();

        });

        // Player 2 can roll
        $('#rollButton2').click(function (event) {
            event.preventDefault();

            p2.active = true;
            p1.active = false;
            p2.roll();

            // Test
            // console.log(p2.roll());
            // console.log(p2.diceRoll);
            // console.log(p2.totalScore);

            // // Display in section 4
            $('#displayPlayer2RollScore').text(p2.diceRoll);
            $('#displayPlayer2TotalScore').text(p2.totalScore);

            // Check player 1 total score
            p2.checkForWinner();

        });

        // Player 1 can hold
        $('#holdButton1').click(function (event) {
            event.preventDefault();

            p1.active = false;
            p2.active = true;

            // Hold for player 1
            p1.hold();        

            // Test
            // console.log(p1.hold());

            // Display in section 4
            $('#displayPlayer1RollScore').text(0);
        });

        // Player 2 can hold
        $('#holdButton2').click(function (event) {
            event.preventDefault();

            p1.active = true;
            p2.active = false;

            // Hold for player 2
            p2.hold();

            // Test
            // console.log(p2.hold());

            // Display in section 4
            $('#displayPlayer2RollScore').text(0);
        });

        // Clear input fields
        clearFields();
    });
    
});



