//Business Logic 
var rollDice = function () {
    return Math.floor(6 * Math.floor()) + 1;
}

function Player(turn) {
    this.roll = 0;
    this.temporaryScore = 0;
    this.cumulativeScore = 0;
    this.turn = turn;
    this.playerName;
}

Player.prototype.rollOne = function () {
    if (this.roll === 1) {
        this.temporaryScore = 0;
        alert("Oops you rolled a 1! Your turn is over!")
        // this.changeturn();
    } else {
        this.temporaryScore += this.roll;
    }
}

Player.prototype.hold = function () {
    this.cumulativeScore += this.temporaryScore;
    this.temporaryScore = 0;
    // this.changeturn();
    alert("Wise choice!");
}


