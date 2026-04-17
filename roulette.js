const wheel = document.getElementById('wheel');
const btn = document.getElementById('spinBtn');
const Red1 = document.getElementById("Red")
const Black1 = document.getElementById("Black")
const Green1 = document.getElementById("Green")
const High1 = document.getElementById("High")
const Low1 = document.getElementById("Low")
const Even1 = document.getElementById("Even")
const Odd1 = document.getElementById("Odd")
const One1 = document.getElementById("One")
const Two1 = document.getElementById("Two")
const Three1 = document.getElementById("Three")
const Four1 = document.getElementById("Four")
const Five1 = document.getElementById("Five")
const Six1 = document.getElementById("Six")
const Seven1 = document.getElementById("Seven")
const Eight1 = document.getElementById("Eight")
const Nine1 = document.getElementById("Nine")
const Ten1 = document.getElementById("Ten")
const Eleven1 = document.getElementById("Eleven")
const Twelve1 = document.getElementById("Twelve")
const Thirteen1 = document.getElementById("Thirteen")
const Fourteen1 = document.getElementById("Fourteen")
const Fifteen1 = document.getElementById("Fifteen")
const Sixteen1 = document.getElementById("Sixteen")
const Money = document.getElementById("Balance")
const ttlSeg = 16;
const SegAng = 22.5;
let currentRotation = 0;
var Roll = 0
var Bets =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var BetNum = 0
var Balance = 100
Money.innerHTML = Balance
function roll() {
  const targetIndex = Math.floor(Math.random() * 16)+1; 
  Roll = targetIndex
console.log(targetIndex)
  const targetAngle = targetIndex * SegAng + SegAng / 2;
  const currentAngle = currentRotation % 360;
  let delta = (360 - currentAngle + targetAngle) % 360;
  const spins = 360 * 5;
  currentRotation += delta + spins -45;
  wheel.style.transform = `rotate(${currentRotation}deg)`;
  if(Roll == 10){
    Balance = Balance + (Bets[2] * 16)
  }
  else{
    if(Roll%2 == 0){
      Balance = Balance + (Bets[1] * 2)
    }
    else{
      Balance = Balance + (Bets[0] * 2)
    }
  }
  if(Roll >= 9){
    Balance = Balance + (Bets[3] * 2)
  }
  else{
    Balance = Balance + (Bets[4] * 2)
  }
  if(Roll%2 == 0){
      Balance = Balance + (Bets[5] * 2)
    }
    else{
      Balance = Balance + (Bets[6] * 2)
    }
    for(i = 1; i<=16; i++){
      if(Roll == i){
        Balance = Balance + (Bets[i+6] *16)
      }
    }
    for(i = 0; i<Bets.length; i++){
      Bets[i] = 0
    }
  Red1.innerHTML = ""
  Black1.innerHTML = ""
  Green1.innerHTML = ""
  High1.innerHTML = ""
  Low1.innerHTML = ""
  Even1.innerHTML = ""
  Odd1.innerHTML = ""
  One1.innerHTML = ""
  Two1.innerHTML = ""
  Three1.innerHTML =""
  Four1.innerHTML = ""
  Five1.innerHTML = ""
  Six1.innerHTML = ""
  Seven1.innerHTML = ""
  Eight1.innerHTML = ""
  Nine1.innerHTML = ""
  Ten1.innerHTML = ""
  Eleven1.innerHTML = ""
  Twelve1.innerHTML = ""
  Thirteen1.innerHTML = ""
  Fourteen1.innerHTML = ""
  Fifteen1.innerHTML = ""
  Sixteen1.innerHTML = ""
  setTimeout(() => {
  Money.innerHTML = Balance
}, 4000);
  
    console.log(Balance)
}
function Red(){
  Bets[0] =  Bets[0] + BetNum
  Red1.innerHTML = Bets[0]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Black(){
  Bets[1] = BetNum + Bets[1]
  Black1.innerHTML = Bets[1]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Green(){
  Bets[2] = BetNum
  Green1.innerHTML = Bets[2]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function High(){
  Bets[3] = BetNum
  High1.innerHTML = Bets[3]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Low(){
  Bets[4] = BetNum
  Low1.innerHTML = Bets[4]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Even(){
  Bets[5] = BetNum
  Even1.innerHTML = Bets[5]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Odd(){
  Bets[6] = BetNum
  Odd1.innerHTML = Bets[6]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function One(){
  Bets[7] = BetNum
  One1.innerHTML = Bets[7]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Two(){
  Bets[8] = BetNum
  Two1.innerHTML = Bets[8]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Three(){
  Bets[9] = BetNum
  Three1.innerHTML = Bets[9]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Four(){
  Bets[10] = BetNum
  Four1.innerHTML = Bets[10]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Five(){
  Bets[11] = BetNum
  Five1.innerHTML = Bets[11]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Six(){
  Bets[12] = BetNum
  Six1.innerHTML = Bets[12]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Seven(){
  Bets[13] = BetNum
  Seven1.innerHTML = Bets[13]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Eight(){
  Bets[14] = BetNum
  Eight1.innerHTML = Bets[14]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Nine(){
  Bets[15] = BetNum
  Nine1.innerHTML = Bets[15]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Ten(){
  Bets[16] = BetNum
  Ten1.innerHTML = Bets[16]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Eleven(){
  Bets[17] = BetNum
  Eleven1.innerHTML = Bets[17]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Twelve(){
  Bets[18] = BetNum
  Twelve1.innerHTML = Bets[18]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Thirteen(){
  Bets[19] = BetNum
  Thirteen1.innerHTML = Bets[19]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Fourteen(){
  Bets[20] = BetNum
  Fourteen1.innerHTML = Bets[20]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Fifteen(){
  Bets[21] = BetNum
  Fifteen1.innerHTML = Bets[21]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}
function Sixteen(){
  Bets[22] = BetNum
  Sixteen1.innerHTML = Bets[22]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
}

function BetVal(x){
  BetNum = x
}

