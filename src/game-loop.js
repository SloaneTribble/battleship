import { gameBoardFactory, format } from "./gameboard";

import { playerFactory } from "./player";

import { populateBoards } from "./populate-boards";

import { updateBoard } from "./update-board";

const newGame = function createPlayersAndGameBoards() {
  const user = playerFactory("human");

  const userBoard = gameBoardFactory("user");

  populateBoards("user", userBoard);

  const ai = playerFactory("ai");

  const aiBoard = gameBoardFactory("ai");

  aiBoard.autoPlace("dinghy");

  aiBoard.autoPlace("skipper");

  aiBoard.autoPlace("submarine");

  aiBoard.autoPlace("battleship");

  aiBoard.autoPlace("carrier");

  populateBoards("ai", aiBoard);

  let updatedBoard = updateBoard(aiBoard, "ai");

  let gameOver = false;

  const alignment = "vertical";

  const boardCells = document.querySelectorAll(".board-cell");

  const shipList = ["dinghy", "skipper", "submarine", "battleship", "carrier"];
  const lengthList = [2, 2, 3, 4, 5, 5];

  let setup = true;

  let battle = false;

  const alignmentButton = document.querySelector(".alignment");

  const messageContainer = document.querySelector(".message-container");

  const delay = 1000;

  messageContainer.textContent = `The ${shipList[0]} shall now be placed.`;

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

      let nextShip = shipList[1];

      messageContainer.textContent = `The ${nextShip} shall now be placed.`;

      let placed = userBoard.placeShip(
        activeShip,
        alignmentButton.textContent,
        coordinates
      );
      if (placed === "Out of bounds" || placed === "Ships cannot overlap") {
        messageContainer.textContent =
          "Make sure ships are within boundaries and don't overlap";
        return;
      }

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
        messageContainer.textContent = "Let the battle begin!";
        boardCells.forEach((cell) => {
          // Clean up display
          if (cell.classList.contains("hover")) {
            cell.classList.remove("hover");
          }
        });
        return;
      }

      const coordinates = cell.classList[0];
      let cellOwner = cell.classList[2];

      if (cellOwner === "user") {
        messageContainer.textContent = "One shall not strike their own waters!";
        return;
      }
      let userAttack = user.attack(aiBoard, coordinates);
      if (userAttack.includes("struck")) {
        messageContainer.textContent = `Ye have stricken a ship!`;
      }

      if (userAttack.includes("sunk")) {
        messageContainer.textContent = `Ye have sunk Barbosa's prized ${userAttack[1]}!`;
      }

      if (userAttack.includes("miss")) {
        messageContainer.textContent =
          "Alas, ye have stricken only the blue...";
      }

      // Don't count invalid attacks;
      if (userAttack.includes("twice")) {
        messageContainer.textContent =
          "The same spot shall not be attacked twice.";
        return;
      }
      updatedBoard = updateBoard(aiBoard, "ai");

      updatedBoard.displayUpdates();

      let aiSunk = aiBoard.checkGame();
      console.log(aiSunk);

      if (aiSunk) {
        messageContainer.textContent =
          "At last, Barbosa shall terrorize the world's oceans no longer.";
        gameOver = true;
        return;
      }

      setTimeout(function () {
        let aiAttack = ai.attack(userBoard, "auto");
        if (aiAttack.includes("struck") || aiAttack.includes("sunk")) {
          messageContainer.textContent = `Barbosa has ${aiAttack[0]} your ${aiAttack[1]}!`;
        } else {
          messageContainer.textContent = `Ye have evaded Barbosa's cruel hand for now.`;
        }
        updatedBoard = updateBoard(userBoard, "user");
        updatedBoard.displayUpdates();

        let userSunk = userBoard.checkGame();

        if (userSunk) {
          messageContainer.textContent = "Alas, Cap'n Barbosa wins again!";
          gameOver = true;
          return;
        }
      }, delay);
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
