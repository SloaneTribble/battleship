const displayBoard = function displayOneBoard() {
  const board = document.createElement("div");
  board.classList.add("board");
  for (let i = 0; i <= 15; i++) {
    const column = document.createElement("div");
    for (let j = 0; j <= 15; j++) {
      const cell = document.createElement("div");
      cell.id = `${i},${j}`;
      column.appendChild(cell);
      cell.classList.add("board-cell");
      cell.textContent = `${i},${j}`;
    }
    board.appendChild(column);
  }
  return board;
};

const displayBoards = function displayTheBoards() {
  const userBoardContainer = document.querySelector(".user-board-container");
  userBoardContainer.appendChild(displayBoard());

  const aiBoardContainer = document.querySelector(".ai-board-container");
  aiBoardContainer.appendChild(displayBoard());
};

export { displayBoards };
