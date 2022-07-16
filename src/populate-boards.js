const populateBoards = function displayShips(name, board) {
  for (const [key, value] of Object.entries(board.shipLocations)) {
    for (const coordinate of value) {
      console.log(coordinate);
      const coordinateString = `_${coordinate[0]}_${coordinate[1]}`;
      console.log(coordinateString);
      const occupiedCells = document.querySelectorAll(`.${coordinateString}`);
      occupiedCells.forEach((cell) => {
        console.log(cell);
        if (cell.classList.contains(name)) {
          cell.classList.remove("empty");
          cell.classList.add("occupied");
        }
      });
    }
  }
};

export { populateBoards };
