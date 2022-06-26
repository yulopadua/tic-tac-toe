//Setting up the gameBoard module
let gameBoardModule = (function() {
    let gameBoard = ["X"];
    return {gameBoard};
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

//Setting up the render module for array display to gameboard
let renderArrayToScreenModule = (function() {

    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes[0].textContent = gameBoardModule.gameBoard;
    return {};
})();

let Justin = createPlayer("Justin", 1, "x");
let James = createPlayer("james", 2, "O");

renderArrayToScreenModule;