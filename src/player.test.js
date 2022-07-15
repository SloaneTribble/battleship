import { gameBoardFactory } from "./gameboard";
import { playerFactory } from "./player";

test("Successful human attacks to AI will be recorded to human object", () => {
  const player = playerFactory("human");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dingy", "horizontal", [4, 3]);

  player.attack(enemyBoard, [4, 3]);

  expect(enemyBoard.attackedSpaces).toStrictEqual([[4, 3]]);

  expect(player.successfulAttacks).toStrictEqual([[4, 3]]);
});

test("Failed human attacks to AI will be recorded to human object", () => {
  const player = playerFactory("human");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dingy", "horizontal", [0, 0]);

  player.attack(enemyBoard, [4, 3]);

  expect(enemyBoard.attackedSpaces).toStrictEqual([[4, 3]]);

  expect(player.missedAttacks).toStrictEqual([[4, 3]]);
});

test("Valid attacks by human against AI will return a useful message", () => {
  const player = playerFactory("human");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dingy", "horizontal", [4, 3]);

  const hit = player.attack(enemyBoard, [4, 3]);

  expect(hit).toBe("dingy has been hit");

  const miss = player.attack(enemyBoard, [0, 0]);

  expect(miss).toBe("miss");
});

test("Invalid attacks by human against AI will return a useful message", () => {
  const player = playerFactory("human");

  const enemyBoard = gameBoardFactory();

  enemyBoard.placeShip("dingy", "horizontal", [4, 3]);

  player.attack(enemyBoard, [0, 0]);

  const invalidAttack = player.attack(enemyBoard, [0, 0]);

  expect(invalidAttack).toBe("cannot attack same spot twice");
});

test("AI attacks against human will be recorded to AI object", () => {
  const AI = playerFactory("AI");

  const humanBoard = gameBoardFactory();

  humanBoard.placeShip("dingy", "vertical", [2,2]);

  AI.attack(humanBoard, "auto");

  expect(humanBoard.attackedSpaces.length).toBe(1);

  AI.attack(humanBoard, "auto");

  expect(humanBoard.attackedSpaces.length).toBe(2);
});

test("If AI has no spaces to attack, a useful message will be returned",()=>{
  const AI = playerFactory("AI");

  const humanBoard = gameBoardFactory();

  humanBoard.placeShip("dingy", "vertical", [2,2]);

  for(let i = 0; i < 257; i++){
    AI.attack(humanBoard, "auto");
  }
  expect(humanBoard.attackedSpaces.length).toBe(256);

  expect(AI.attack(humanBoard, "auto")).toBe("No available spaces");
});
