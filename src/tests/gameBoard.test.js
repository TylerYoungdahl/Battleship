import GameBoard from "../modules/gameBoard";

test("Gameboard is 10x10", () => {
  const board1 = new GameBoard();

  board1.generateBoard();

  expect(board1.board.length).toBe(10);

  board1.board.forEach((row) => {
    expect(row.length).toBe(10);
  });
});

test("receiveAttack(0, 0) on computer board", () => {
  const gameBoard = new GameBoard();

  gameBoard.generateBoard();
  gameBoard.receiveAttack(0, 0);

  expect(gameBoard.board[0][0].miss).toBe(true);
  expect(gameBoard.board[0][0].empty).toBe(false);
});
