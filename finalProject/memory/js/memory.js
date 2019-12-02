var correctArray = [];
var correctArrayCount = 0;

var playerArray = [];
var playerArrayCount  = 0;

var matchesArrray = true;

var lvlCount = 1;
var score = 0;

var playersTurn = false;

var el = document.getElementById('startBtn');
el.onclick = gameStart;

function gameStart(){
    score = 0;
    lvlCount = 1;
    matchesArrray = true;
    correctArray = [];
    correctArrayCount = 0;

    playerArray = [];
    playerArrayCount = 0;
    document.getElementById('scoreLabel').innerText= "Score: " + score;
    sequence();
}
var i;
function sequence(){
    playersTurn = false;
    var newVal = Math.floor(Math.random() * 4);  
    correctArray[correctArrayCount] = newVal;
    console.log(correctArray);


    i = 0;
    seqLoop();


    correctArrayCount++;
    playerArrayCount = 0;
    playerArray = [];
    console.log("player Array reset");
    console.log(playerArrayCount);
    playersTurn = true;
}

function seqLoop(){
    var boxEl;
    setTimeout(function(){ 
    if(correctArray[i] == 0){
        boxEl = document.getElementById('btn1');
        boxEl.classList.add("highlighted");

        setTimeout(function(){
            boxEl.classList.remove("highlighted");
        },800);
        

        console.log("r");
    }
    else if(correctArray[i]  == 1){
        boxEl = document.getElementById('btn2');
        boxEl.classList.add("highlighted");

        setTimeout(function(){
            boxEl.classList.remove("highlighted");
        },800);

        console.log("b");
        
    }
    else if(correctArray[i]  == 2){
        boxEl = document.getElementById('btn3');
        boxEl.classList.add("highlighted");

        setTimeout(function(){
            boxEl.classList.remove("highlighted");

        },800);

        console.log("g");
       
    }
    else if(correctArray[i]  == 3){
        boxEl = document.getElementById('btn4');
        boxEl.classList.add("highlighted");

        setTimeout(function(){
            boxEl.classList.remove("highlighted");
        },800);

        console.log("y");
    }
    i++;
    if(i <= score){
        seqLoop();
    }
    }, 1100)
}



var redClick = document.getElementById('btn1');
redClick.onclick = function() {
    compVal = 0;
    playerArray[playerArrayCount] = compVal;
    playerArrayCount++;
    console.log("RED");
    compareValues();
}
var blueClick = document.getElementById('btn2');
blueClick.onclick = function() {
    compVal = 1;
    playerArray[playerArrayCount] = compVal;
    playerArrayCount++;
    console.log("BLUE");
    compareValues();
}
var greenClick = document.getElementById('btn3');
greenClick.onclick = function() {
    compVal = 2;
    playerArray[playerArrayCount] = compVal;
    playerArrayCount++;
    console.log("GREEN");
    compareValues();
} 
var yellowClick = document.getElementById('btn4');
yellowClick.onclick = function() {
    compVal = 3;
    playerArray[playerArrayCount] = compVal;
    playerArrayCount++;
    console.log("YELLOW");
    compareValues();
}


function compareValues(){
    console.log("comparing...");
    if(playerArray[playerArrayCount-1] == correctArray[playerArrayCount-1]){
        console.log(playerArrayCount);
        console.log(correctArrayCount);
        if(playerArrayCount == correctArrayCount){
            lvlUp();
        } else{
            console.log("yes");
        }
    } else if(playerArray[playerArrayCount-1] != correctArray[playerArrayCount-1]){
        console.log(playerArray[playerArrayCount-1]);
        console.log(correctArray[playerArrayCount-1]);
        gameOver();
    }
}

function lvlUp(){
    console.log("Next Level");
    lvlCount++;
    score++;
    playerArray = [];
    playerArrayCount = 0;
    document.getElementById('scoreLabel').innerText= "Score: " + score;
    sequence();
}

function gameOver(){
    console.log("Game Over");
    modal.style.display = "block";
}


var modal = document.getElementById('gameEnd');
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
document.getElementById("reMeSho").addEventListener('click', function () {
    readMeText.style.display = 'block';
});
document.getElementById("reMeHid").addEventListener('click', function () {
    readMeText.style.display = 'none';
});


