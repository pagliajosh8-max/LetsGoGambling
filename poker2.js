// ===== SHARED BALANCE =====
var Balance;
let saved1 = localStorage.getItem('Balance');
if (saved1 !== null) {
    Balance = Number(saved1);
} else {
    Balance = 100;
}

// ===== ORIGINAL CODE (FULL) =====
var list = ["as","ad","ac","ah","2s","2d","2c","2h","3s","3d","3c","3h","4s","4d","4c","4h","5s","5d","5c","5h","6s","6d","6c","6h","7s","7d","7c","7h","8s","8d","8c","8h","9s","9d","9c","9h","ts","td","tc","th","js","jd","jc","jh","qs","qd","qc","qh","ks","kd","kc","kh"];
const C = []
var Card1 = document.getElementById("1").innerHTML.substring(0,1);
var Card2 = document.getElementById("2").innerHTML.substring(0,1);
var Card3 = document.getElementById("8").innerHTML.substring(0,1);
var Card4 = document.getElementById("9").innerHTML.substring(0,1);
var Money = document.getElementById("Money")

if(Card1 == "a") Card1 = 14;
if(Card2 == "a") Card2 = 14;
if(Card3 == "a") Card3 = 14;
if(Card4 == "a") Card4 = 14;
if(Card1 == "k") Card1 = 13;
if(Card2 == "k") Card2 = 13;
if(Card3 == "k") Card3 = 13;
if(Card4 == "k") Card4 = 13;
if(Card1 == "q") Card1 = 12;
if(Card2 == "q") Card2 = 12;
if(Card3 == "q") Card3 = 12;
if(Card4 == "q") Card4 = 12;
if(Card1 == "j") Card1 = 11;
if(Card2 == "j") Card2 = 11;
if(Card3 == "j") Card3 = 11;
if(Card4 == "j") Card4 = 11;
if(Card1 == "t") Card1 = 10;
if(Card2 == "t") Card2 = 10;
if(Card3 == "t") Card3 = 10;
if(Card4 == "t") Card4 = 10;

document.getElementById("card3").style.display = 'none'
document.getElementById("card4").style.display = 'none'
document.getElementById("card5").style.display = 'none'
document.getElementById("card6").style.display = 'none'
document.getElementById("card7").style.display = 'none'

var handVal;
var handVal2 = 0;

var BetAmt = 0
var res = 3

setCards();
handVal = setHandVal(3);
handVal2 = setHandVal(1);
Winner()

Money.innerHTML = "$" + Balance