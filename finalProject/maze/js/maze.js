var canvas;
var context;
var lvl = 1;
var timer;

var x;
var y;

function setupGame() {
  canvas = document.getElementById("mazeCanvas");
  context = canvas.getContext("2d");

  drawMaze("media/lvl1.png");
};


function drawMaze(mazeFile) {
    clearTimeout(timer);

    context.clearRect(0, 0, canvas.width, canvas.height);

    var imgMaze = new Image();
    imgMaze.onload = function() {
    canvas.width = imgMaze.width;
    canvas.height = imgMaze.height;
    context.drawImage(imgMaze, 0,0);

    timer = setTimeout(drawIcon, 10);
    };
    imgMaze.src = mazeFile;
}

function drawIcon(){
    w = canvas.width
    startXpos = ((w/2)-10);
    
    context.beginPath();
    context.fillStyle = "teal";
    context.moveTo(startXpos+dx, 4+dy);
    context.fillRect((startXpos+dx), (4+dy), 10, 10);
    context.endPath();
}

/* function checkcollision() {
    var imgd = ctx.getImageData(x, y, 15, 15);
    var pix = imgd.data;
    for (var i = 0; n = pix.length, i < n; i += 4) {
    if (pix[i] == 0) {
    collision = 1;
    }
    }
    }  
*/

function processKey(e) {
    //up
    if (e.keyCode == 38) {
      dy -= -2;
    }
    //down
    if (e.keyCode == 40) {
      dy += 2;
    }
    //left
    if (e.keyCode == 37) {
      dx -= -2;
    }
    //right
    if (e.keyCode == 39) {
      dx += 2;
    }
    drawIcon();
}



 
  



//buttons for levels
function lvldown() {
    if(lvl==1){
        modal.style.display = "block";
    }
    else{
        lvl = lvl - 1;
        drawMaze('media/lvl'+lvl+'.png', 5, 5);
        document.getElementById("levelCount").innerText = "Current Level: " + lvl;
    }
}

function lvlup() {
    if(lvl==5){
        modal.style.display = "block";
    }
    else{
        lvl = lvl + 1;
        drawMaze('media/lvl'+lvl+'.png', 5, 5);
        document.getElementById("levelCount").innerText = "Current Level: " + lvl;
    }
}

var modal = document.getElementById('lowestLVL');
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
