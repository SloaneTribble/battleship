import { gameBoardFactory, format } from "./gameboard";

import { playerFactory } from "./player";

import { populateBoards } from "./populate-boards";

import { updateBoard } from "./update-board";

// Eventually need to find a way to allow player to position ships

const newGame = function createPlayersAndGameBoards() {
  const user = playerFactory("human");

  const userBoard = gameBoardFactory("user");

  populateBoards("user", userBoard);

  const ai = playerFactory("ai");

  const aiBoard = gameBoardFactory("ai");

  let placed = aiBoard.autoPlace("dinghy");

  placed = aiBoard.autoPlace("dinghy2");

  placed = aiBoard.autoPlace("submarine");

  placed = aiBoard.autoPlace("battleship");

  placed = aiBoard.autoPlace("carrier");

  populateBoards("ai", aiBoard);

  let updatedBoard = updateBoard(aiBoard, "ai");

  user.turn = true;

  let gameOver = false;

  const alignment = "vertical";

  const boardCells = document.querySelectorAll(".board-cell");

  const shipList = ["dinghy", "dinghy2", "submarine", "battleship", "carrier"];
  const lengthList = [2, 2, 3, 4, 5, 5];

  let setup = true;

  let battle = false;

  const alignmentButton = document.querySelector(".alignment");

  alignmentButton.addEventListener("click", () => {
    let text = alignmentButton.textContent;

    text === "horizontal"
      ? (alignmentButton.textContent = "vertical")
      : (alignmentButton.textContent = "horizontal");
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (
        setup === false ||
        cell.classList.contains("ai") ||
        gameOver === true
      ) {
        return;
      }
      const coordinates = format(cell.classList[0]);
      const activeShip = shipList[0];

      let placed = userBoard.placeShip(
        activeShip,
        alignmentButton.textContent,
        coordinates
      );
      if (placed === "Out of bounds" || placed === "Ships cannot overlap") {
        console.log(placed);
        return;
      }
      console.log(placed);
      populateBoards("user", userBoard);
      shipList.shift();
      lengthList.shift();

      if (shipList.length === 0) {
        setup = false;
      }
    });
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      if (gameOver === true) {
        return;
      }
      if (setup === true && cell.classList.contains("ai")) {
        return;
      }
      if (setup === false) {
        return;
      }
      // Convert cell to array form, expand, convert arrays back to cell form

      const activeCells = getCellPreview(cell, alignment, lengthList[0]);
      cell.classList.add("hover");

      for (let cell of activeCells) {
        let next = document.querySelector(`.${cell}`);
        next.classList.add("hover");
      }
    });
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("mouseleave", () => {
      if (gameOver === true) {
        return;
      }
      if (setup === false) {
        return;
      }
      // Convert cell to array form, expand, convert arrays back to cell form
      const activeCells = getCellPreview(cell, alignment, lengthList[0]);
      cell.classList.remove("hover");

      for (let cell of activeCells) {
        let next = document.querySelector(`.${cell}`);
        next.classList.remove("hover");
      }
    });
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (gameOver === true) {
        return;
      }
      if (setup === true) {
        return;
      }

      if (setup === false && battle === false) {
        battle = true;
        console.log("Let the battle begin!");
        boardCells.forEach((cell) => {
          // Clean up display
          if (cell.classList.contains("hover")) {
            cell.classList.remove("hover");
          }
        });
        return;
      }

      const coordinates = cell.classList[0];

      let userAttack = user.attack(aiBoard, coordinates);
      console.log(userAttack);

      // Don't count invalid attacks;
      if (userAttack.includes("twice")) {
        return;
      }
      updatedBoard = updateBoard(aiBoard, "ai");

      updatedBoard.displayUpdates();

      let aiSunk = aiBoard.checkGame();
      console.log(aiSunk);

      if (aiSunk) {
        console.log("You win");
        gameOver = true;
        return;
      }

      let aiAttack = ai.attack(userBoard, "auto");
      console.log(aiAttack);
      updatedBoard = updateBoard(userBoard, "user");
      updatedBoard.displayUpdates();

      let userSunk = userBoard.checkGame();

      if (userSunk) {
        console.log("AI wins");
        gameOver = true;
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

const getCellPreview = function getPotentialCellCoords(
  cell,
  alignment,
  length
) {
  const activeCells = [];
  const alignmentButton = document.querySelector(".alignment");
  let alignmentText = alignmentButton.textContent;
  if (alignmentText === "horizontal") {
    const start = format(cell.classList[0]);
    for (let i = start[0]; i < start[0] + length; i++) {
      let nextCell = [];
      let x = i;
      let y = start[1];
      nextCell.push(x);
      nextCell.push(y);
      nextCell = deformat(nextCell);
      activeCells.push(nextCell);
    }
  } else if (alignmentText === "vertical") {
    const start = format(cell.classList[0]);
    for (let i = start[1]; i < start[1] + length; i++) {
      let nextCell = [];
      let x = start[0];
      let y = i;
      nextCell.push(x);
      nextCell.push(y);
      nextCell = deformat(nextCell);
      activeCells.push(nextCell);
    }
  }
  return activeCells;
};
