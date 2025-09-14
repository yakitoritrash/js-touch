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

  const playRound = (index) => {
    Gameboard.getBoard();
    Gameboard.markBoard(currPlayer, mark);
  }
})();
