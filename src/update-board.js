// Read a player's board and use it to update display

const updateBoard = function readBoardAndUpdateDisplay(board, name) {
  const owner = name;

  const hitLocations = board.showHitLocations();

  const showHits = function experimental() {
    return this.hitLocations;
  };

  const missedLocations = board.missedLocations;

  const sunkLocations = board.showSunkLocations();

  const displayHits = function iterateThroughHitsAndUpdateDOM() {
    for (let hit of this.hitLocations) {
      const cells = document.querySelectorAll(`._${hit[0]}_${hit[1]}`);
      cells.forEach((cell) => {
        if (cell.classList.contains(owner)) {
          cell.classList.remove("occupied");
          cell.classList.add("hit");
        }
      });
    }
  };
  return {
    owner,
    hitLocations,
    displayHits,
    showHits,
    missedLocations,
    sunkLocations,
  };
};

export { updateBoard };
