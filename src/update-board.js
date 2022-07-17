// Read a player's board and use it to update display

const updateBoard = function readBoardAndUpdateDisplay(board) {
  const hitLocations = board.showHitLocations();

  const sunkLocations = board.showSunkLocations();

  return { hitLocations, sunkLocations };
};

export { updateBoard };
