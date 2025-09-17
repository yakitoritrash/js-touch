const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const markBoard = (index, mark) => {
    if (board[index] === '') {
      board[index] = mark;
    }
  };

  const resetBoard = () => {
    for (let i = 0; i < 9; i++) {
      board[i] = '';
    }
  };

  return {getBoard, markBoard, resetBoard};
})();

const Player = (name, mark) => {
  return { name, mark };
};

const GameController = (function() {
  const player1 = Player('jon', 'X');
  const player2 = Player('steve', 'O');

  let currPlayer = player1;

  const switchPlayer = () => {
    currPlayer = currPlayer === player1 ? player2 : player1;
  }
  let winarr = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  const checkForWinner = () => {
    let currBoard = Gameboard.getBoard();
    for (let i = 0; i < winarr.length; i++) {
      const combination = winarr[i];
      const pos1 = combination[0];
      const pos2 = combination[1];
      const pos3 = combination[2];
      if (currBoard[pos1] == currBoard[pos2] && currBoard[pos2] == currBoard[pos3] && currBoard[pos1] != '') {
        //console.log(`winner: ${currPlayer.name}`);
        DisplayController.displayResult(`winner: ${currPlayer.name}`);
        return;
      }
    }
      if (!currBoard.includes("")) {
        //console.log("It's a tie!");
        DisplayController.displayResult("It's a tie!");
      }
  };

  const playRound = (index) => {
    Gameboard.markBoard(index, currPlayer.mark);
    checkForWinner();

    switchPlayer();

    console.log(Gameboard.getBoard());
    DisplayController.renderBoard();
  };

  return {playRound};
})();

const DisplayController = (function() {
  const container = document.getElementById("container");
  const renderBoard = () => {
    container.innerHTML = "";
    const board = Gameboard.getBoard();
    for (let i = 0; i < board.length; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.textContent = board[i];
      square.addEventListener('click', () => {
        GameController.playRound(i);
      });
      container.appendChild(square);
    }
  };

  const result = document.getElementById("game-result");
  const displayResult = (message) => {
    result.appendChild(message);
  };
  return { renderBoard, displayResult };
})();

DisplayController.renderBoard();
