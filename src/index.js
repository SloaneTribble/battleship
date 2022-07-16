import "./style.css";

import { displayBoards } from "./display-boards";

displayBoards();

const boardCells = document.querySelectorAll(".board-cell");

boardCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    console.log(cell.id);
    console.log(cell.classList[1]);
  });
});
