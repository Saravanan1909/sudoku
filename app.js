const board = document.getElementById('sudoku-board');

function createBoard() {
    for(let row = 0;row < 9;row++) {
        for(let col = 0;col < 9;col++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            cell.className = 'sudoku-cell';
            if(col == 2 || col == 5 || col == 8) {
              cell.classList.add('border-right');
            }
            board.appendChild(cell);

        }
    }
} 
const samplePuzzle = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    // Add rows as needed to complete the sample puzzle
  ];
  
  function fillBoard(puzzle) {
    const cells = document.querySelectorAll('.sudoku-cell');
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const value = puzzle[row][col];
        const index = row * 9 + col;
        if (value) {
          cells[index].value = value;
          cells[index].disabled = true; // Prevent editing of preset numbers
        }
      }
    }
  }
  
  // Initialize the board and fill it with the sample puzzle
  createBoard();
  fillBoard(samplePuzzle);