// Back-end

// Store user inputted name to thse variables
var p1 = " ";
var p2 = " ";

// Constructor for Player Object
function Player(active) {
    this.totalScore = 0;
    this.active = active;
    this.playerName;
}

// Check if roll value is 1
Player.prototype.roll = function() {

    // Random number generator for a rolled dice
    var rolledValue = Math.floor(6*Math.random())+1;

    // When rolledValue is 1 the return is 0
    if(rolledValue === 1) {
        // Revert total score to 0
        this.totalScore = 0;

        this.active = false;

        // Display alert message
        alert(this.playerName + " rolled 1, your turn is over");
    } else {

        this.active = true;

        // Add the rolled valueto the total score
        this.totalScore += rolledValue;
    }

    // Test
    // console.log(rolledValue);
    // console.log(this.totalScore);

    return rolledValue;
}

// Hold 
Player.prototype.hold = function() {

    this.active = false;
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

// Switch players
// function switchPlayer(activePlayer) {
//     if(this.active === true) {
//         console.log("p1 is active");
//         this.active = false;
//     } else {
//         console.log("p2 is active");
//         this.active = false;
//     }
//     return p1.active;
// }

// Player.prototype.switchPlayer = function() {
//     if (this.active === true) {
//         this.active = false;
//         console.log("p1 is active");
//     } else {
//         this.active = true;
//         console.log("p2 is active");
//     }
//     return this.active
// }

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

        p1 = new Player(true);
        p2 = new Player(false);

        p1.playerName = player1InputtedName;
        p2.playerName = player2InputtedName;

        // Test
        // console.log(player1InputtedName);
        // console.log(player2InputtedName);
        // console.log(p1.playerName);
        // console.log(p2.playerName);
        console.log(p1.active + " initial p1");
        console.log(p2.active + " initial p2");

        // Display in section 4
        $('#players--showing').show();
        $('.hideMe').hide();
        $('#player1Name').text(p1.playerName);
        $('#player2Name').text(p2.playerName);

        
        // Player 1 can roll
        $('#rollButton1').click(function (event) {
            event.preventDefault();

            // Test
            // console.log(p1.roll());
            // console.log(player1Roll);
            // console.log(checkPlayer1);
            // console.log(rolledValue);
            // console.log(p1.totalScore);
            // console.log(p1.switchPlayer());

            // Display in section 4
            $('#displayPlayer1RollScore').text(p1.roll());
            $('#displayPlayer1TotalScore').text(p1.totalScore);

            // Test
            // Check active value
            console.log(p1.active + " not initial p1");


            // Check player 1 total score
            p1.checkForWinner();

        });

        // Player 2 can roll
        $('#rollButton2').click(function (event) {
            event.preventDefault();

            // Test
            // console.log(p2.roll());
            // console.log(player2Roll);
            // console.log(checkPlayer2);
            // console.log(p2.totalScore);
            // console.log(p2.switchPlayer());

            // // Display in section 4
            $('#displayPlayer2RollScore').text(p2.roll());
            $('#displayPlayer2TotalScore').text(p2.totalScore);

            // Test
            // Check active value
            console.log(p2.active + " not initial p2");

            // Check player 1 total score
            p2.checkForWinner();

        });

        // Player 1 can hold
        $('#holdButton1').click(function (event) {
            event.preventDefault();

            // Hold for player 1
            p1.hold();        

            // Test
            // console.log(p1.hold());
            // Check active value
            console.log(p1.active + " stop p1");
        });

        // Player 2 can hold
        $('#holdButton2').click(function (event) {
            event.preventDefault();

            // Hold for player 2
            p2.hold();

            // Test
            // console.log(p2.hold());

            // Check active value
            console.log(p2.active + " stop p2");  
        });

        // Clear input fields
        clearFields();
    });
    
});