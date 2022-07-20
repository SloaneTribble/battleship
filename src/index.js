import "./style.css";

import { displayBoards, refreshBoards } from "./display-boards";

import { newGame } from "./game-loop";

displayBoards();

newGame();

const newGameButton = document.querySelector(".new-game");

newGameButton.addEventListener("click", () => {
  refreshBoards();
  newGame();
});

const alignmentButton = document.querySelector(".alignment");

alignmentButton.addEventListener(
  "click",
  () => {
    let text = alignmentButton.textContent;

    text === "Horizontal"
      ? (alignmentButton.textContent = "Vertical")
      : (alignmentButton.textContent = "Horizontal");
  },
  0
);
