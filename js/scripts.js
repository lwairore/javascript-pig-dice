    //business logic


    var rollDice = function () {
        return Math.floor(6 * Math.random()) + 1;
    }



    function Player(turn) {
        this.roll = 0;
        this.temporaryScore = 0;
        this.cumulativeScore = 0;
        this.turn = turn;
        this.playerName;
    }

    // checking for 1
    Player.prototype.rollOne = function () {
        if (this.roll === 1) {
            this.temporaryScore = 0;
            alert("Oops you rolled a 1! Your turn is over!")
            // this.changeturn();
        } else {
            this.temporaryScore += this.roll;
        }
    }

    // hold
    Player.prototype.hold = function () {
        this.cumulativeScore += this.temporaryScore;
        this.temporaryScore = 0;
        // this.changeturn();
        alert("Wise choice!");
    }

    // changing turn
    Player.prototype.changeturn = function () {
        if (this.roll === 1) {
            this.turn = false;
        } else {
            this.turn = true;
        }
    }
    // check for 100
    Player.prototype.winnerCheck = function () {
        if (this.cumulativeScore >= 100) {
            alert("You are the winner!");
        }
    }

    // User Interface
    $(document).ready(function () {
        player1 = new Player(true);
        player2 = new Player(false);
        $("button#player1-roll").click(function (event) {
            player1.roll = rollDice();
            $("#die-roll-1").text(player1.roll);
            player1.rollOne();
            $("#round-total-1").text(player1.temporaryScore);
        });

        $("button#player2-roll").click(function (event) {
            player2.roll = rollDice();
            $("#die-roll-2").text(player2.roll);
            player2.rollOne();
            $("#round-total-2").text(player2.temporaryScore);
        });

        $("button#player1-hold").click(function (event) {
            player1.hold();
            $("#total-score-1").text(player1.cumulativeScore);
            $("#round-total-1").empty();
            $("#die-roll-1").empty();
            player1.winnerCheck();
        });

        $("button#player2-hold").click(function (event) {
            player2.hold();
            $("#total-score-2").text(player2.cumulativeScore);
            $("#round-total-2").empty();
            $("#die-roll-2").empty();
            player2.winnerCheck();
        });

    });
