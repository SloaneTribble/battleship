import { gameBoardFactory, format } from "./gameboard";

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

  let alignment = "vertical";

  const boardCells = document.querySelectorAll(".board-cell");

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const coordinates = format(cell.classList[0]);
      let placed = userBoard.placeShip("dinghy", alignment, coordinates);
      console.log(placed);
      populateBoards("user", userBoard);
    });
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      // Convert cell to array form, expand, convert arrays back to cell form
      const activeCells = getCellPreview(cell, alignment);
      cell.classList.add("hover");

      for (let cell of activeCells) {
        let next = document.querySelector(`.${cell}`);
        next.classList.add("hover");
      }
    });
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("mouseleave", () => {
      // Convert cell to array form, expand, convert arrays back to cell form
      const activeCells = getCellPreview(cell, alignment);
      cell.classList.remove("hover");

      for (let cell of activeCells) {
        let next = document.querySelector(`.${cell}`);
        next.classList.remove("hover");
      }
    });
  });

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

const deformat = function convertArrayToCellFormat(array) {
  const cell = `_${array[0]}_${array[1]}`;
  return cell;
};

const getCellPreview = function getPotentialCellCoords(cell, alignment) {
  const activeCells = [];
  if (alignment === "horizontal") {
    const start = format(cell.classList[0]);
    for (let i = start[0]; i < start[0] + 3; i++) {
      let nextCell = [];
      let x = i;
      let y = start[1];
      nextCell.push(x);
      nextCell.push(y);
      nextCell = deformat(nextCell);
      activeCells.push(nextCell);
    }
  } else if (alignment === "vertical") {
    const start = format(cell.classList[0]);
    for (let i = start[1]; i < start[1] + 3; i++) {
      let nextCell = [];
      let x = start[0];
      let y = i;
      nextCell.push(x);
      nextCell.push(y);
      nextCell = deformat(nextCell);
      activeCells.push(nextCell);
    }

    return activeCells;
  }
};
