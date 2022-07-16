import { gameBoardFactory } from "./gameboard";

import { playerFactory } from "./player";

import { populateBoards } from "./populate-boards";

import { shipFactory } from "./ship";

// Eventually need to find a way to allow player to position ships

const newGame = function createPlayersAndGameBoards() {
  const user = playerFactory("human");

  const userBoard = gameBoardFactory();

  userBoard.placeShip("dinghy", "vertical", [0, 0]);
  userBoard.placeShip("dinghy2", "vertical", [1, 0]);
  userBoard.placeShip("submarine", "vertical", [2, 0]);
  userBoard.placeShip("battleship", "vertical", [3, 0]);
  userBoard.placeShip("carrier", "vertical", [4, 0]);

  populateBoards("user", userBoard);

  const ai = playerFactory("ai");

  const aiBoard = gameBoardFactory();

  aiBoard.placeShip("dinghy", "vertical", [0, 0]);
  aiBoard.placeShip("dinghy2", "vertical", [1, 0]);
  aiBoard.placeShip("submarine", "vertical", [2, 0]);
  aiBoard.placeShip("battleship", "vertical", [3, 0]);
  aiBoard.placeShip("carrier", "vertical", [4, 0]);

  populateBoards("ai", aiBoard);

  user.turn = true;

  const boardCells = document.querySelectorAll(".board-cell");

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      console.log(cell.classList);
      const owner = cell.classList[2];
      console.log(`Owner: ${owner}`);
      const ship = cell.classList[4];
      console.log("Ship" + ship);
      const attack = aiBoard.receiveAttack(cell.classList[0]);
      console.log(attack);

      switch (true) {
        case attack === "miss":
          cell.classList.remove("empty");
          cell.classList.add("missed");

          break;

        case attack.includes("hit"):
          cell.classList.remove("occupied");
          cell.classList.add("hit");

          break;

        case attack.includes("sunk"):
          boardCells.forEach((cell) => {
            console.log(cell.classList[2]);
            console.log(owner);
            console.log(cell.classList[4]);
            console.log(ship);
            if (
              (cell.classList[3] === ship || cell.classList[4] === ship) &&
              cell.classList[2] === owner
            ) {
              cell.classList.remove("hit");
              cell.classList.add("sunk");
            }
          });
      }
    });
  });
};

export { newGame };
