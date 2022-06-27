//Setting up the player factory function
let createPlayer = (playerName, playerNumber, assignedXO) => {

        for (let i = 0; i < 4; i++) {

            if (gameBoardModule.playerArray.length >= 6) {
                gameBoardModule.makePlayerMove();
                break;
            } else if (gameBoardModule.playerArray.length == 0) {
                let playerName = prompt("What is your first name?");

                if (playerName == "" || playerName == null) {
                    alert("Sorry, name cannot be black!");
                    continue;
                }

                let playerNumber = 1;
                let assignedXO = "X";
                alert("You are player 1, and your assigned letter is X!");
                gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);

            } else if (gameBoardModule.playerArray.length !==0) {
                let playerName = prompt("What is your first name?");

                if (playerName == "" || playerName == null) {
                    alert("Sorry, name cannot be black!");
                    continue;
                }

                let playerNumber = 2;
                let assignedXO = "O";
                alert("You are player 2, and your assigned letter is O!");
                gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            }
        }
};

//Setting up the gameBoard module
let gameBoardModule = (function() {
    let gameBoard = [];
    let playerArray = [];

    let makePlayerMove = () => {
        if (playerArray.length == 6 && gameBoard.length < 9) {
            if (gameBoard.length == 0) {
                alert("Player 1, please make a move");
                gameBoard.push(playerArray[2]);
            } else if (gameBoard[gameBoard.length - 1] == "X") {
                alert("Player 2, please make a move");
                gameBoard.push(playerArray[5]);
            } else if (gameBoard[gameBoard.length - 1] == "O") {
                alert("Player 1, please make a move");
                gameBoard.push(playerArray[2]);
            }
        }
    }

    return {gameBoard, playerArray, makePlayerMove};
})();

//Setting up the displayController module
let displayControllerModule = (function() {
    const makeMove = document.querySelectorAll(".game-board-button");

    //Start indexing and looping through each button node
    let index = 0;
    makeMove.forEach(makeMoves => {
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArrayToScreen);

        function renderArrayToScreen() {
            const gridBoxes = document.querySelectorAll(".grid-box");

            //Start indexing and looping through each grid box
            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                //Render clicked play on the correct grid box and display
                if (gridBox.getAttribute("data-linked-button") == makeMoves.getAttribute("data-linked-button")) {
                    gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
                }
            index++;
            })

        gameBoardModule.makePlayerMove();
        }
    index++;
    })

    //Listen for click to start the game
    const startGameButton = document.querySelector(".start-game-button");
    startGameButton.addEventListener("click", createPlayer);

    return {};
})();

//Setting up the render module for array display to gameboard
let renderArrayToScreenModule = (function() {

    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.textContent = gameBoardModule.gameBoard;
    return {};
})();

renderArrayToScreenModule;