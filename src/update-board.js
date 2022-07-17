// Read a player's board and use it to update display

const updateBoard = function readBoardAndUpdateDisplay(board, name) {
  const owner = name;

  const hitLocations = board.showHitLocations();

  const missedLocations = board.missedLocations;

  const sunkLocations = board.showSunkLocations();

  const displayUpdates = function displayHitsMissesAndSunks() {
    displayHits();
    displayMisses();
    displaySunk();
  };

  const displayHits = function iterateThroughHitsAndUpdateDOM() {
    for (let hit of hitLocations) {
      const cells = document.querySelectorAll(`._${hit[0]}_${hit[1]}`);
      cells.forEach((cell) => {
        if (cell.classList.contains(owner)) {
          cell.classList.remove("occupied");
          cell.classList.add("hit");
        }
      });
    }
  };

  const displayMisses = function iterateThroughMisses() {
    for (let miss of missedLocations) {
      const cells = document.querySelectorAll(`._${miss[0]}_${miss[1]}`);
      cells.forEach((cell) => {
        if (cell.classList.contains(owner)) {
          cell.classList.remove("empty");
          cell.classList.add("missed");
        }
      });
    }
  };

  const displaySunk = function iterateThroughSunkLocations() {
    for (let location of sunkLocations) {
      const cells = document.querySelectorAll(
        `._${location[0]}_${location[1]}`
      );
      cells.forEach((cell) => {
        if (cell.classList.contains(owner)) {
          if (cell.classList.contains("hit")) {
            cell.classList.remove("hit");
          }
          cell.classList.add("sunk");
        }
      });
    }
  };
  return {
    owner,
    hitLocations,
    displayUpdates,
    missedLocations,
    sunkLocations,
  };
};

export { updateBoard };
