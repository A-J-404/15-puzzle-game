var counter = 0
var count = document.getElementById("counter")

function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
//Use nested loops to access each cell of the 4x4 grid
for (var row=1;row<=4;row++) { //For each row of the 4x4 grid
   for (var column=1;column<=4;column++) { //For each column in this row
  
    var row2=Math.floor(Math.random()*4 + 1); //Pick a random row from 1 to 4
    var column2=Math.floor(Math.random()*4 + 1); //Pick a random column from 1 to 4
     
    swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
  } 
} 
}

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="tile-16") { 
       //Checking if white tile on the right
       if (column<4) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile tile-16") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile tile-16") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile tile-16") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<4) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile tile-16") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
}

//For timer//
var span = document.getElementsByTagName('span')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('new-game'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    span.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    span.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}



