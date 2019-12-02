var canvas;
var context;
var lvl = 1;
var timer;

var x;
var y;
var dx = 0;
var dy = 0;
var colis = false;

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

    timer = setTimeout(drawIconStart, 10);
    };
    imgMaze.src = mazeFile;
    console.log(imgMaze.height)
    drawIconStart();
}

function drawIconStart(){
    dy=0;
    dx=0;
    w = canvas.width
    startXpos = ((w/2)-10);
    y = 4;
    x = startXpos;
    context.beginPath();
    context.fillStyle = "teal";
    context.moveTo(x, y);
    context.fillRect((x),(y), 10, 10);
}
function drawIconUp(){
    context.beginPath();
    context.fillStyle = "lavender";
    context.fillRect((x+dx), (y+dy+2), 10, 10);
    context.fillStyle = "teal";
    context.moveTo(x+dx, y+dy);
    context.fillRect((x+dx),(y+dy), 10, 10);
    checkEnd();
}
function drawIconDown(){
    context.beginPath();
    context.fillStyle = "lavender";
    context.fillRect((x+dx), (y+dy-2), 10, 10);
    context.fillStyle = "teal";
    context.moveTo(x+dx, y+dy);
    context.fillRect((x+dx),(y+dy), 10, 10);
    checkEnd();
}
function drawIconLeft(){
    context.beginPath();
    context.fillStyle = "lavender";
    context.fillRect((x+dx+2), (y+dy), 10, 10);
    context.fillStyle = "teal";
    context.moveTo(x+dx, y+dy);
    context.fillRect((x+dx),(y+dy), 10, 10);
    checkEnd();
}
function drawIconRight(){
    context.beginPath();
    context.fillStyle = "lavender";
    context.fillRect((x+dx-2), (y+dy), 10, 10);
    context.fillStyle = "teal";
    context.moveTo(x+dx, y+dy);
    context.fillRect((x+dx),(y+dy), 10, 10);
    checkEnd();
}

function checkEnd() {
    if(lvl==1){
        if(dy>=147&&dx>10&&dx<16){
            modal.style.display = "block";
        }
    } 
    else if(lvl==2){
        if(dy>=225&&dx>2&&dx<8){
            modal.style.display = "block";
        }
    } 
    else if(lvl==3){
        if(dy>=305&&dx>10&&dx<18){
            modal.style.display = "block";
        }
    } 
    else if(lvl==4){
        if(dy>=386&&dx>2&&dx<8){
            modal.style.display = "block";
        }
    } 
    else if(lvl==5){
        if(dy>=466&&dx>10&&dx<16){
            modal.style.display = "block";
        }
    } else{
        console.log("incorrectPage");
    }
}  

if (colis != true){
    window.onkeypress = function processKey() {
        var keyP = this.event.keyCode;
        //up
        if (keyP == 119) {
            console.log("up");
          dy -= 2;
          console.log(y);
          drawIconUp();
        }
        //down
        if (keyP == 115) {
            console.log("down");
          dy += 2;
          console.log(dy);
          drawIconDown();
        }
        //left
        if (keyP == 97) {
            console.log("left");
          dx -= 2;
          console.log(dx);
          drawIconLeft();
        }
        //right
        if (keyP == 100) {
            console.log("right");
          dx += 2;
          console.log(dx);
          drawIconRight();
        }
    }
}




 
  



//buttons for levels
function lvldown() {
    if(lvl==1){
        alert("There Are No Lower Levels");
    }
    else{
        lvl = lvl - 1;
        drawMaze('media/lvl'+lvl+'.png', 5, 5);
        document.getElementById("levelCount").innerText = "Current Level: " + lvl;
    }
}

function lvlup() {
    if(lvl==5){
        alert("There Are No Higher Levels");
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

readMeText = document.getElementById("rdMeContent");
document.getElementById("readShow").addEventListener('click', function () {
    readMeText.style.display = 'block';
});
document.getElementById("readHide").addEventListener('click', function () {
    readMeText.style.display = 'none';
});


