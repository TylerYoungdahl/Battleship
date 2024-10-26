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
