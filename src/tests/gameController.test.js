import GameController from "../modules/gameController";

test("Player receives attack from computer", () => {
  const game = new GameController();

  game.compTurn();

  const checkAttack = () => {
    return game.player.playerBoard.board.some((row) => {
      return row.some((cell) => cell.hit || cell.miss);
    });
  };

  expect(checkAttack()).toBe(true);
});

test("Player's gameboard receives attack in new game", () => {
  const game = new GameController();

  game.computer.playerBoard.receiveAttack(0, 0);

  expect(game.computer.playerBoard.board[0][0].miss).toBe(true);
});
