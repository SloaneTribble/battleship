const displayBoard = function displayOneBoard(owner) {
  const board = document.createElement("div");
  board.classList.add("board");
  for (let i = 0; i <= 11; i++) {
    const column = document.createElement("div");
    for (let j = 0; j <= 11; j++) {
      const cell = document.createElement("div");
      const coordinates = `_${i}_${j}`;
      column.appendChild(cell);
      cell.classList.add(coordinates);
      cell.classList.add("board-cell");
      cell.classList.add(`${owner}`);
      cell.classList.add("empty");
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

const refreshBoards = function clearAndPopulateAgain() {
  const userBoardContainer = document.querySelector(".user-board-container");

  while (userBoardContainer.firstChild) {
    userBoardContainer.removeChild(userBoardContainer.firstChild);
  }
  userBoardContainer.appendChild(displayBoard("user"));

  const aiBoardContainer = document.querySelector(".ai-board-container");
  aiBoardContainer.removeChild(aiBoardContainer.firstChild);

  while (aiBoardContainer.firstChild) {
    aiBoardContainer.removeChild(aiBoardContainer.firstChild);
  }
  aiBoardContainer.appendChild(displayBoard("ai"));
};

export { displayBoards, refreshBoards };
