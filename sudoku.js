var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "53--7----",
    "6--195---",
    "-98----6-",
    "8---6---3",
    "4--8-3--1",
    "7---2---6",
    "-6----28-",
    "---419--5",
    "----8--79"
  ];
var solvedSudoku = [
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
  ];
  window.onload = function() {
    setGame();
  }
  function setGame() {
    for(let i = 1 ;i <= 9;i++) {
        let number =  document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click",selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    //board
    for(let row = 0;row < 9;row++) {
         for(let col = 0;col < 9;col++) {
            let tile = document.createElement("div");
            tile.id = row.toString() + "-" + col.toString();
            if(board[row][col] != "-") {
                tile.innerText = board[row][col];
                tile.classList.add("tile-given");
            }
            if(row == 0) {
                tile.classList.add("top-border");
            }
            if(col == 0) {
                tile.classList.add("left-border");
            }
            if(row == 2 || row ==5 || row ==8) {
                tile.classList.add("bottom-border");
            }
            if(col == 2 || col == 5 || col == 8 ) {
                tile.classList.add("right-border");
            }
            tile.addEventListener("click",selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
         }
    }
  }
  function selectNumber() {
    if(numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
  }
  function selectTile() {
    if(numSelected) {
        if(this.innerText != "") {
            return;
        }
        if(errors > 2) {
            let disp = document.getElementById("errors");
            disp.innerText = "the game is over";
            return;
        }
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        if(numSelected.id == solvedSudoku[r][c] ) {
            this.innerText = numSelected.id;
        } else {
            errors++;
            let disp = document.getElementById("errors");
            disp.innerText = errors + "/3" ;
        }
    }
  }