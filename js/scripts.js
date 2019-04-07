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

