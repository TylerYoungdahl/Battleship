import GameBoard from "../modules/gameBoard";

test("Gameboard is 10x10", () => {
  const board1 = new GameBoard();

  board1.generateBoard();

  expect(board1.board.length).toBe(10);

  board1.board.forEach((row) => {
    expect(row.length).toBe(10);
  });
});
