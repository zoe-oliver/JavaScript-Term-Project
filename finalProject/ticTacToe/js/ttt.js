var turn = 1;
var spots = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var currentSpot;
var turnNumber = 0;

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}


$(function() {
    checkTurn();
});


function checkTurn(){
    if((turnNumber==0)||(turnNumber==2)||(turnNumber==4)||(turnNumber==6)||(turnNumber==8)){
        playersTurn();
    }
    else if((turnNumber==1)||(turnNumber==3)||(turnNumber==5)||(turnNumber==7)){
        computersTurn();
    }
    else{
        checkWin();
    }
}

function computersTurn(){
    var compSpot = spots.random();
    while(isNaN(compSpot)) {
        compSpot = spots.random();
    }

    var playSpot = "#"+compSpot;

    $(playSpot).text("O");
    spots.splice(compSpot, 1, "o");
    
    checkWin();
    turnNumber++;

}

function playersTurn(){
    $("td").click(function(){
        $(this).text("X");
        currentSpot = $(this).attr("id");
        spots.splice(currentSpot, 1, "x");
        
        checkWin();
        turnNumber++;
        checkTurn();
    });
}
function checkWin() {
    var r1 = spots[0]+spots[1]+spots[2];
    var r2 = spots[3]+spots[4]+spots[5];
    var r3 = spots[6]+spots[7]+spots[8];
    
    var c1 = spots[0]+spots[3]+spots[6];
    var c2 = spots[1]+spots[4]+spots[7];
    var c3 = spots[2]+spots[5]+spots[8];
    
    var d1 = spots[0]+spots[4]+spots[8];
    var d2 = spots[6]+spots[4]+spots[2];

    if ((r1 == "xxx")||(r2 == "xxx")||(r3 == "xxx")||(c1 == "xxx")||(c2 == "xxx")||(c3 == "xxx")||(d1 == "xxx")||(d2 == "xxx")){
    modal.style.display = "block";  
    }
    else if ((r1 == "ooo")||(r2 == "ooo")||(r3 == "ooo")||(c1 == "ooo")||(c2 == "ooo")||(c3 == "ooo")||(d1 == "ooo")||(d2 == "ooo")){
        alert("You Lose, try again!");
    }
    else if((isNaN(spots[0]))&&(isNaN(spots[1]))&&(isNaN(spots[2]))&&(isNaN(spots[3]))&&(isNaN(spots[4]))&&(isNaN(spots[5]))&&(isNaN(spots[6]))&&(isNaN(spots[7]))&&(isNaN(spots[8]))){
        alert("Tie!");
    }
}

//Reset Button
$("#reset").click(function(){
    window.location.reload();
});
//back btn
$("#back").click(function(){
    window.location.href = "../homePage.html";
});
//readme btn
$("#read").click(function(){
    window.location.href = "readMe.txt";
});

readMeText = document.getElementById("rdMeContent");
document.getElementById("readShow").addEventListener('click', function () {
    readMeText.style.display = 'block';
});
document.getElementById("readHide").addEventListener('click', function () {
    readMeText.style.display = 'none';
});


var modal = document.getElementById('win');
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

