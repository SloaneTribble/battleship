import { gameBoardFactory } from "./gameboard";
import { playerFactory } from "./player";

test("Successful human attacks to AI will be recorded to human object", () => {
  const player = playerFactory("human");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dingy", "horizontal", [4, 3]);

  player.attack(enemyBoard, [4,3]);

  expect(enemyBoard.getAttackedSpaces()).toStrictEqual([[4,3]]);

  expect(player.getSuccessfulAttacks()).toStrictEqual([[4,3]]);

});
