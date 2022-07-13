import { gameBoardFactory } from "./gameboard";
import { playerFactory } from "./player";

test("Successful human attacks to AI will be recorded to human object", () => {
  const player = playerFactory("human");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dingy1", "horizontal", [4, 3]);

  player.attack(enemyBoard, [4,3]);

  expect(enemyBoard.attackedSpaces).toStrictEqual([[4,3]]);
  expect(player.successfulAttacks).toStrictEqual([4,3]);

});
