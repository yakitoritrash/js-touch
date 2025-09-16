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

  let currBoard = Gameboard.getBoard();
  const checkForWinner = () => {
    for (let i = 0; i < winarr.length; i++) {
      const combination = winarr[i];
      const pos1 = combination[0];
      const pos2 = combination[1];
      const pos3 = combination[2];
      if (currBoard[pos1] == currBoard[pos2] && currBoard[pos2] == currBoard[pos3] && currBoard[pos1] != '') {
        console.log(`winner: ${currPlayer.name}`);
        return;
      }
    }
      if (!currBoard.includes("")) {
        console.log("It's a tie!");
      }
  };

  const playRound = (index) => {
    Gameboard.markBoard(index, currPlayer.mark);
    checkForWinner();

    switchPlayer();

    console.log(Gameboard.getBoard());
  }

  return {playRound};
})();
