var canvas;
var context;
var lvl = 1;
var maze = 'media/lvl1.png';

var x;
var y;

var timer;

function setupGame() {
    canvas = document.getElementById("mazeCanvas");
    context = canvas.getContext("2d");
    drawMaze();
    
};

function drawMaze() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    clearTimeout(timer);

    var imgMaze = new Image();
    imgMaze.onload = function() {
    canvas.width = imgMaze.width;
    canvas.height = imgMaze.height;
    context.drawImage(imgMaze, 0,0);

    imgMaze.src = maze;
    timer = setTimeout(drawFrame, 10);
    };
};





//buttons for levels
function lvldown() {
    if(lvl==1){
        modal.style.display = "block";
    }
    else{
        lvl = lvl - 1;
        maze = 'media/lvl'+lvl+'.png';
        drawMaze();
        document.getElementById("levelCount").innerText = "Current Level: " + lvl;
    }
}

function lvlup() {
    if(lvl==5){
        modal.style.display = "block";
    }
    else{
        lvl = lvl + 1;
        maze = 'media/lvl'+lvl+'.png';
        drawMaze();
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
