//Setting up the gameBoard module
let gameBoardModule = (function() {
    let gameBoard = [];
    return {};
})();

//Setting up the displayController module
let displayControllerModule = (function() {
    let testF = () => {
        return {testF};
    }
})();

//Setting up the player factory function
let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => {
        playerName;
    }
    return {getPlayerName, playerName, playerNumber, assignedXO};
};

let Justin = createPlayer("Justin", 1, "x");
let James = createPlayer("james", 2, "O");