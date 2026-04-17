var Balance = 100;
let saved = localStorage.getItem('Balance');

if (saved !== null || saved > 0) {
    Balance = Number(saved);
} else {
    Balance = 100;
}

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
Money.innerHTML = Balance

const ttlSeg = 16;
const SegAng = 22.5;
let currentRotation = 0;
var Roll = 0

var Bets =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var BetNum = 0

function roll() {
  const targetIndex = Math.floor(Math.random() * 16)+1; 
  Roll = targetIndex

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
      Balance = Balance + (Bets[1] * 2.5)
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
    localStorage.setItem('Balance', Balance); // ✅ SAVE ADDED
  }, 4000);
}

function Red(){
  if(Balance < BetNum){
    return
  }
  Bets[0] =  Bets[0] + BetNum
  Red1.innerHTML = Bets[0]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
  localStorage.setItem('Balance', Balance);
}

function Black(){
  if(Balance < BetNum){
    return
  }
  Bets[1] = BetNum + Bets[1]
  Black1.innerHTML = Bets[1]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
  localStorage.setItem('Balance', Balance);
}

function Green(){
  if(Balance < BetNum){
    return
  }
  Bets[2] = BetNum + Bets[2]
  Green1.innerHTML = Bets[2]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
  localStorage.setItem('Balance', Balance);
}

function High(){
  if(Balance < BetNum){
    return
  }
  Bets[3] = BetNum + Bets[3]
  High1.innerHTML = Bets[3]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
  localStorage.setItem('Balance', Balance);
}

function Low(){
  if(Balance < BetNum){
    return
  }
  Bets[4] = BetNum + Bets[4]
  Low1.innerHTML = Bets[4]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
  localStorage.setItem('Balance', Balance);
}

function Even(){
  if(Balance < BetNum){
    return
  }
  Bets[5] = BetNum + Bets[5]
  Even1.innerHTML = Bets[5]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
  localStorage.setItem('Balance', Balance);
}

function Odd(){
  if(Balance < BetNum){
    return
  }
  Bets[6] = BetNum + Bets[6]
  Odd1.innerHTML = Bets[6]
  Balance = Balance - BetNum
  Money.innerHTML = Balance
  localStorage.setItem('Balance', Balance);
}


function One(){ if(Balance < BetNum){return}; Bets[7]=BetNum + Bets[7]; One1.innerHTML=Bets[7]; Balance-=BetNum ; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Two(){ if(Balance < BetNum){return};Bets[8]=BetNum + Bets[8]; Two1.innerHTML=Bets[8]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Three(){ if(Balance < BetNum){return};Bets[9]=BetNum + Bets[9]; Three1.innerHTML=Bets[9]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Four(){ if(Balance < BetNum){return};Bets[10]=BetNum + Bets[10]; Four1.innerHTML=Bets[10]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Five(){ if(Balance < BetNum){return};Bets[11]=BetNum + Bets[11]; Five1.innerHTML=Bets[11]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Six(){ if(Balance < BetNum){return};Bets[12]=BetNum + Bets[12]; Six1.innerHTML=Bets[12]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Seven(){ if(Balance < BetNum){return};Bets[13]=BetNum + Bets[13]; Seven1.innerHTML=Bets[13]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Eight(){ if(Balance < BetNum){return};Bets[14]=BetNum + Bets[14]; Eight1.innerHTML=Bets[14]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Nine(){ if(Balance < BetNum){return};Bets[15]=BetNum + Bets[15]; Nine1.innerHTML=Bets[15]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Ten(){ if(Balance < BetNum){return};Bets[16]=BetNum + Bets[16]; Ten1.innerHTML=Bets[16]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Eleven(){ if(Balance < BetNum){return};Bets[17]=BetNum + Bets[17]; Eleven1.innerHTML=Bets[17]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Twelve(){ if(Balance < BetNum){return};Bets[18]=BetNum + Bets[18]; Twelve1.innerHTML=Bets[18]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Thirteen(){ if(Balance < BetNum){return};Bets[19]=BetNum + Bets[19]; Thirteen1.innerHTML=Bets[19]; Balance-=BetNum ; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Fourteen(){ if(Balance < BetNum){return};Bets[20]=BetNum + Bets[20]; Fourteen1.innerHTML=Bets[20]; Balance-=BetNum ; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Fifteen(){ if(Balance < BetNum){return};Bets[21]=BetNum + Bets[21]; Fifteen1.innerHTML=Bets[21]; Balance-=BetNum; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }
function Sixteen(){ if(Balance < BetNum){return};Bets[22]=BetNum + Bets[11]; Sixteen1.innerHTML=Bets[22]; Balance-=BetNum ; Money.innerHTML=Balance; localStorage.setItem('Balance', Balance); }

function BetVal(x){
  if(Balance <= 0){
    return
  }
  BetNum = x
}
