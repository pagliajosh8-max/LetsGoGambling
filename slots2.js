// ===== SHARED BALANCE =====
var Balance;
let saved = localStorage.getItem('Balance');

if (saved !== null) {
    Balance = Number(saved);
} else {
    Balance = 100;
}

// ===== ORIGINAL CODE =====
var loopCount = 0;
var score = Balance;

const Sprites = [
    'Cherries.png',
    'Lemon.png',
    'Clove.png',
    'Diamond.png',
    'Chest.png',
    'Seven.png'
];

function spinStart(){
    while(loopCount < 50){
        setTimeout(spin, 250)
        loopCount++;
    }
    loopCount = 0;

    score -= 25
    Balance = score;
    localStorage.setItem('Balance', Balance);

    scoring()
}

function spin(){
    for(let i=1; i<16; i++){
        document.getElementById(i).src=Sprites[Math.floor(Math.random() * 6)]
    }
    console.log(loopCount)
}

function scoring(){
    for(let r = 1; r<15; r++){
        checkThreeRow(r)
        if(r == 3){
            r=r+2
        }
        if(r == 8){
            r=r+2
        }
        if(r == 13){
            r=r+2
        }
    }
    for(let c = 1; c<6; c++){
        checkThreeColumns(c)
    }
    for(let c = 1; c<3; c++){
        checkThreeDiagRight(c)
    }
    for(let c = 2; c<5; c++){
        checkThreeDiagLeft(c)
    }
    for(let r = 1; r<15; r++){
        checkFourRow(r)
        if(r == 2){
            r=r+3
        }
        if(r == 7){
            r=r+3
        }
        if(r == 12){
            r=r+3
        }
    }
    for(let r = 1; r<15; r++){
        checkFiveRow(r)
        if(r == 1){
            r=r+4
        }
        if(r == 6){
            r=r+4
        }
        if(r == 11){
            r=r+4
        }
    }
    checkHillRight(1)
    checkHillLeft(5)
    checkUpV(1)
    checkDownV(11)
    checkEye(6)
    checkJackpot(1)

    Balance = score;
    localStorage.setItem('Balance', Balance);

    document.getElementById("scoreText").innerHTML = "$" + score
    console.log(score)
}

function symbolMult(symbol){
    symbol = symbol.split('/').pop()
    if(symbol === 'Cherries.png'){
        return(1)
    }
    if(symbol === 'Lemon.png'){
        return(1.25)
    }
    if(symbol === 'Clove.png'){
        return(1.5)
    }
    if(symbol === 'Diamond.png'){
        return(2)
    }
    if(symbol === 'Chest.png'){
        return(2.5)
    }
    if(symbol === 'Seven.png'){
        return(5)
    }
    return 1
}

function checkThreeRow(tile){
    if(document.getElementById(tile).src == document.getElementById(tile+1).src && document.getElementById(tile+2).src == document.getElementById(tile).src){
        score = score + 100 * symbolMult(document.getElementById(tile).src)
    }
}

function checkThreeColumns(tile){
    if(document.getElementById(tile).src == document.getElementById(tile+5).src && document.getElementById(tile+10).src == document.getElementById(tile).src){
        score = score + 100 * symbolMult(document.getElementById(tile).src)
    }
}

function checkThreeDiagRight(tile){
    if(document.getElementById(tile).src == document.getElementById(tile+6).src && document.getElementById(tile+12).src == document.getElementById(tile).src){
        score = score + 100 * symbolMult(document.getElementById(tile).src)
    }
}

function checkThreeDiagLeft(tile){
    if(document.getElementById(tile).src == document.getElementById(tile+4).src && document.getElementById(tile+8).src == document.getElementById(tile).src){
        score = score + 100 * symbolMult(document.getElementById(tile).src)
    }
}

function checkFourRow(tile){
    if(document.getElementById(tile).src == document.getElementById(tile+1).src && document.getElementById(tile+2).src == document.getElementById(tile).src && document.getElementById(tile+3).src == document.getElementById(tile).src){
        score = score + 250 * symbolMult(document.getElementById(tile).src)
    }
}

function checkFiveRow(tile){
    if(document.getElementById(tile).src == document.getElementById(tile+1).src && document.getElementById(tile+2).src == document.getElementById(tile).src && document.getElementById(tile+3).src == document.getElementById(tile).src && document.getElementById(tile+4).src == document.getElementById(tile).src){
        score = score + 750 * symbolMult(document.getElementById(tile).src)
    }
}

function checkHillRight(tile){
    if(document.getElementById(tile).src == document.getElementById(2).src && document.getElementById(8).src == document.getElementById(1).src && document.getElementById(14).src == document.getElementById(1).src && document.getElementById(15).src == document.getElementById(1).src){
        score = score + 750 * symbolMult(document.getElementById(tile).src)
    }
}

function checkHillLeft(tile){
    if(document.getElementById(tile).src == document.getElementById(4).src && document.getElementById(8).src == document.getElementById(5).src && document.getElementById(12).src == document.getElementById(5).src && document.getElementById(11).src == document.getElementById(5).src){
        score = score + 750 * symbolMult(document.getElementById(tile).src)
    }
}

function checkUpV(tile){
    if(document.getElementById(tile).src == document.getElementById(7) && document.getElementById(1).src == document.getElementById(13) && document.getElementById(1).src == document.getElementById(9) && document.getElementById(1).src == document.getElementById(5)){
        score = score + 750 * symbolMult(document.getElementById(tile).src)
    }
}

function checkDownV(tile){
    if(document.getElementById(tile).src == document.getElementById(7) && document.getElementById(11).src == document.getElementById(3) && document.getElementById(11).src == document.getElementById(9) && document.getElementById(11).src == document.getElementById(15)){
        score = score + 750 * symbolMult(document.getElementById(tile).src)
    }
}

function checkEye(tile){
    if(document.getElementById(tile).src == document.getElementById(2) && document.getElementById(tile).src == document.getElementById(3) && document.getElementById(tile).src == document.getElementById(4) && document.getElementById(tile).src == document.getElementById(10) && document.getElementById(tile).src == document.getElementById(14) && document.getElementById(tile).src == document.getElementById(13) && document.getElementById(tile).src == document.getElementById(12) && document.getElementById(tile).src == document.getElementById(6) ){
        score = score + 1250 * symbolMult(document.getElementById(tile).src)
    }
}

function checkJackpot(tile){
    if(document.getElementById(tile).src == document.getElementById(2).src && document.getElementById(3).src == document.getElementById(1).src && document.getElementById(4).src == document.getElementById(1).src && document.getElementById(5).src == document.getElementById(1).src && document.getElementById(6).src == document.getElementById(1).src && document.getElementById(7).src == document.getElementById(1).src && document.getElementById(8).src == document.getElementById(1).src && document.getElementById(9).src == document.getElementById(1).src && document.getElementById(10).src == document.getElementById(1).src && document.getElementById(11).src == document.getElementById(1).src && document.getElementById(12).src == document.getElementById(1).src && document.getElementById(13).src == document.getElementById(1).src && document.getElementById(14).src == document.getElementById(1).src && document.getElementById(15).src == document.getElementById(1).src){
        score = score + 5000 * symbolMult(document.getElementById(tile).src)
    }
}