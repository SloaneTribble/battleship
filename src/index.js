import "./style.css";

import { displayBoards } from "./display-boards";

import { newGame } from "./game-loop";

displayBoards();

const boardCells = document.querySelectorAll(".board-cell");

boardCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    console.log(cell.classList[0]);
  });
});

newGame();
