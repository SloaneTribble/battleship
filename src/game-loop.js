import { gameBoardFactory } from "./gameboard";

import { playerFactory } from "./player";

import { populateBoards } from "./populate-boards";

import { updateBoard } from "./update-board";

// Eventually need to find a way to allow player to position ships

const newGame = function createPlayersAndGameBoards() {
  const user = playerFactory("human");

  const userBoard = gameBoardFactory("user");

  userBoard.placeShip("dinghy", "vertical", [0, 0]);
  userBoard.placeShip("dinghy2", "horizontal", [8, 4]);
  userBoard.placeShip("submarine", "vertical", [2, 0]);
  userBoard.placeShip("battleship", "vertical", [3, 0]);
  userBoard.placeShip("carrier", "vertical", [4, 0]);

  populateBoards("user", userBoard);

  const ai = playerFactory("ai");

  const aiBoard = gameBoardFactory("ai");

  let placed = aiBoard.autoPlace("dinghy");
  console.log(placed);

  placed = aiBoard.autoPlace("dinghy2");
  console.log(placed);

  placed = aiBoard.autoPlace("submarine");
  console.log(placed);

  placed = aiBoard.autoPlace("battleship");
  console.log(placed);

  placed = aiBoard.autoPlace("carrier");
  console.log(placed);

  populateBoards("ai", aiBoard);

  let updatedBoard = updateBoard(aiBoard, "ai");

  user.turn = true;

  const boardCells = document.querySelectorAll(".board-cell");

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const coordinates = cell.classList[0];

      user.attack(aiBoard, coordinates);
      updatedBoard = updateBoard(aiBoard, "ai");

      updatedBoard.displayUpdates();

      let aiSunk = aiBoard.checkGame();
      console.log(aiSunk);

      if (aiSunk) {
        console.log("You win");
        return;
      }

      let aiAttack = ai.attack(userBoard, "auto");
      console.log(aiAttack);
      updatedBoard = updateBoard(userBoard, "user");
      updatedBoard.displayUpdates();

      let userSunk = userBoard.checkGame();

      if (userSunk) {
        console.log("AI wins");
        return;
      }
    });
  });
};

export { newGame };
