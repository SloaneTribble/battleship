const populateBoards = function displayShips(name, board) {
  for (const [key, value] of Object.entries(board.shipLocations)) {
    for (const coordinate of value) {
      const coordinateString = `_${coordinate[0]}_${coordinate[1]}`;
      const occupiedCells = document.querySelectorAll(`.${coordinateString}`);
      occupiedCells.forEach((cell) => {
        if (cell.classList.contains(name)) {
          cell.classList.remove("empty");
          cell.classList.add("occupied");
        }
      });
    }
  }
};

export { populateBoards };
