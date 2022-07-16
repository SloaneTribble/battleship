const displayBoard = function displayOneBoard(owner) {
  const board = document.createElement("div");
  board.classList.add("board");
  for (let i = 0; i <= 15; i++) {
    const column = document.createElement("div");
    for (let j = 0; j <= 15; j++) {
      const cell = document.createElement("div");
      const coordinates = `_${i}_${j}`;
      column.appendChild(cell);
      cell.classList.add(coordinates);
      cell.classList.add("board-cell");
      cell.classList.add(`${owner}`);
      cell.classList.add("empty");
      cell.textContent = `_${i}_${j}`;
    }
    board.appendChild(column);
  }
  return board;
};

const displayBoards = function displayTheBoards() {
  const userBoardContainer = document.querySelector(".user-board-container");
  userBoardContainer.appendChild(displayBoard("user"));

  const aiBoardContainer = document.querySelector(".ai-board-container");
  aiBoardContainer.appendChild(displayBoard("ai"));
};

export { displayBoards };
