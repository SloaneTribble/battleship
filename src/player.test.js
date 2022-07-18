import { gameBoardFactory } from "./gameboard";
import { playerFactory } from "./player";

test("Valid attacks by human against AI will return a useful message", () => {
  const player = playerFactory("human");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dinghy", "horizontal", [4, 3]);

  const hit = player.attack(enemyBoard, [4, 3]);

  expect(hit).toBe("dinghy has been hit");

  const miss = player.attack(enemyBoard, [0, 0]);

  expect(miss).toBe("miss");
});

test("Invalid attacks by human against AI will return a useful message", () => {
  const player = playerFactory("human");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dinghy", "horizontal", [4, 3]);

  player.attack(enemyBoard, [0, 0]);

  const invalidAttack = player.attack(enemyBoard, [0, 0]);

  expect(invalidAttack).toBe("cannot attack same spot twice");
});

test("AI attacks against human will be recorded to AI object", () => {
  const AI = playerFactory("AI");

  const humanBoard = gameBoardFactory();

  humanBoard.placeShip("dinghy", "vertical", [2, 2]);

  AI.attack(humanBoard, "auto");

  expect(humanBoard.attackedSpaces.length).toBe(1);

  AI.attack(humanBoard, "auto");

  expect(humanBoard.attackedSpaces.length).toBe(2);
});

test.skip("If AI has no spaces to attack, a useful message will be returned", () => {
  const AI = playerFactory("AI");

  const humanBoard = gameBoardFactory();

  humanBoard.placeShip("dinghy", "vertical", [2, 2]);

  for (let i = 0; i < 1000; i++) {
    AI.attack(humanBoard, "auto");
  }
  expect(humanBoard.attackedSpaces.length).toBe(256);

  expect(AI.attack(humanBoard, "auto")).toBe("No available spaces");
});

test("Successful attacks will add several new potential attacks to player object", () => {
  const player = playerFactory("user");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dinghy", "horizontal", [4, 3]);

  const hit = player.attack(enemyBoard, [4, 3]);

  expect(hit).toBe("dinghy has been hit");

  expect(player.potentialAttacks).toStrictEqual([
    [3, 3],
    [5, 3],
    [4, 4],
    [4, 2],
  ]);
});

test("Auto generating an attack when potentialAttacks has elements will properly use the first element", () => {
  const player = playerFactory("user");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dinghy", "horizontal", [4, 3]);

  const hit = player.attack(enemyBoard, [4, 3]);

  expect(hit).toBe("dinghy has been hit");

  expect(player.potentialAttacks).toStrictEqual([
    [3, 3],
    [5, 3],
    [4, 4],
    [4, 2],
  ]);

  player.attack(enemyBoard, "auto");

  expect(player.potentialAttacks.length).toBe(3);

  player.attack(enemyBoard, "auto");

  expect(player.potentialAttacks.length).toBe(2);
});

test("Successful attacks near board's edge will not generate out of bound coordinates", () => {
  const player = playerFactory("user");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dinghy", "vertical", [11, 10]);

  const hit = player.attack(enemyBoard, [11, 11]);

  expect(hit).toBe("dinghy has been hit");

  expect(player.potentialAttacks).toStrictEqual([[10,11], [11,10]]);
});
