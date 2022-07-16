import { gameBoardFactory } from "./gameboard";

import { playerFactory } from "./player";

import { shipFactory } from "./ship";

// Eventually need to find a way to allow player to position ships

const newGame = function createPlayersAndGameBoards() {
  const userBoard = gameBoardFactory();

  userBoard.placeShip("dinghy", "vertical", [0, 0]);
  userBoard.placeShip("dinghy2", "vertical", [1, 0]);
  userBoard.placeShip("submarine", "vertical", [2, 0]);
  userBoard.placeShip("battleship", "vertical", [3, 0]);
  userBoard.placeShip("carrier", "vertical", [4, 0]);

  const aiBoard = gameBoardFactory();

  aiBoard.placeShip("dinghy", "vertical", [0, 0]);
  aiBoard.placeShip("dinghy2", "vertical", [1, 0]);
  aiBoard.placeShip("submarine", "vertical", [2, 0]);
  aiBoard.placeShip("battleship", "vertical", [3, 0]);
  aiBoard.placeShip("carrier", "vertical", [4, 0]);
};
