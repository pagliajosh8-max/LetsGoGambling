var money;
var saved = localStorage.getItem("Balance")
localStorage.setItem('Balance', Number(ogb) + 100);
if (saved !== null) {
    money = Number(saved);
} else {
    money = 100;
}
var tileList = []
var ticker = -1
var betAmount
var lucky = 1
var quickSpin
var lowTemp
var highTemp
var cherryHigh = 15
var lemonLow = 15
var lemonHigh = 30
var cloverLow = 30
var cloverHigh = 45
var bellLow = 45
var bellHigh = 60
var diamondLow = 60
var diamondHigh = 75
var treasureLow = 75
var treasureHigh = 90
var sevenLow = 90
moneyUpdate(0,0)
function start(){
   quickSpin = document.getElementById("quickSpin").value
   startSpin(quickSpin)
}
function startSpin(spinAmount){
   if(spinAmount == ""){
       spinAmount = 1
   }
   betAmount = document.getElementById("betAmount").value
   tileList = []
   for(var t = 0; t < spinAmount; t++){
       if (betAmount > 0 && betAmount <= money){
           money -= betAmount
           for(var i = 1; i < 22; i++){
               spinSlots(i)
           }
           scoring()
           moneyUpdate(0,0)
           console.log(money)
           console.log(tileList)
           document.getElementById("noMoney").innerHTML = ""
       }else{
           document.getElementById("noMoney").innerHTML = "NO MONEY INPUTED"
       }
   }
}
function spinSlots(slotNum){
   var tempImg = getImage(lucky)
   document.getElementById("slot"+slotNum).src = tempImg
   tileList[slotNum-1] = tempImg.slice(0,-4)
}
function changeRanges(symbole){
   if(symbole == 0){
       if(money > 10000){
          highTemp = cherryHigh
           cherryHigh = document.getElementById("cherryHigh").value
           if(cherryHigh == ""){
               cherryHigh = highTemp
           }else{
               money -= 10000
               lemonLow = cherryHigh
           }
       }
   }
   if(symbole == 1){
       if(money > 15000){
           lowTemp = lemonLow
           highTemp = lemonHigh
           lemonLow = document.getElementById("lemonLow").value
           lemonHigh = document.getElementById("lemonHigh").value
           if(lemonLow == "" || lemonHigh == ""){
               lemonLow = lowTemp
               lemonHigh = highTemp
           }else{
               localStorage.setItem('Balance', Number(ogb) - 15000);
               cherryHigh = lemonLow
               cloverLow = lemonHigh
              
           }
       }
   }
   if(symbole == 2){
       if(money > 20000){
           lowTemp = cloverLow
           highTemp = cloverHigh
           cloverLow = document.getElementById("cloverLow").value
           cloverHigh = document.getElementById("cloverHigh").value
           if(cloverLow == "" || cloverHigh == ""){
               cloverLow = lowTemp
               cloverHigh = highTemp
           }else{
               localStorage.setItem('Balance', Number(ogb) -20000);
               lemonHigh = cloverLow
               bellLow = cloverHigh
           }
       }
   }
   if(symbole == 3){
       if(money > 25000){
           lowTemp = bellLow
           highTemp = bellHigh
           bellLow = document.getElementById("bellLow").value
           bellHigh = document.getElementById("bellHigh").value
           if(bellLow == "" || bellHigh == ""){
               bellLow = lowTemp
               bellHigh = highTemp
           }else{
               localStorage.setItem('Balance', Number(ogb) -25000);
               cloverHigh = bellLow
               diamondLow = bellHigh
           } 
       }
   }
   if(symbole == 4){
       if(money > 30000){
           lowTemp = diamondLow
           highTemp = diamondHigh
           diamondLow = document.getElementById("diamondLow").value
           diamondHigh = document.getElementById("diamondHigh").value
           if(diamondLow == "" || diamondHigh == ""){
               diamondLow = lowTemp
               diamondHigh = highTemp
           }else{
               money -= 30000
               bellHigh = diamondLow
               treasureLow = diamondHigh
           }
       }
   }
   if(symbole == 5){
       if(money > 35000){
           lowTemp = treasureLow
           highTemp = treasureHigh
           treasureLow = document.getElementById("treasureLow").value
           treasureHigh = document.getElementById("treasureHigh").value
           if(treasureLow == "" || treasureHigh == ""){
               treasureLow = lowTemp
               treasureHigh = highTemp
           }else{
               money -= 35000
               diamondHigh = treasureLow
               sevenLow = treasureHigh
           }
       }
   }
   if(symbole == 6){
       if(money > 40000){
           lowTemp = sevenLow
           sevenLow = document.getElementById("sevenLow").value
           if(sevenLow == ""){
               sevenLow = lowTemp
           }else{
               money -= 40000
               treasureHigh = sevenLow
           }
       }
   }
   if(lemonHigh < lemonLow){
       lemonHigh = lemonLow
       lemonLow = cherryHigh
       if(lemonHigh > cloverLow){
           cloverLow = lemonHigh
       }
   }
   if(cloverHigh < cloverLow){
       cloverHigh = cloverLow
       cloverLow = lemonHigh
       if(cloverHigh > bellLow){
           bellLow = cloverHigh
       }
   }
   if(bellHigh < bellLow){
       bellLow = cloverHigh
       bellHigh = bellLow
       if(bellHigh > diamondLow){
           diamondLow = bellHigh
       }
   }
   if(diamondHigh < diamondLow){
       diamondHigh = diamondLow
       diamondLow = bellHigh
       if(diamondHigh > treasureLow){
           treasureLow = diamondHigh
       }
   }
   if(treasureHigh < treasureLow){
       treasureHigh = treasureLow
       treasureLow = diamondHigh
       if(treasureHigh > sevenLow){
           sevenLow = treasureHigh
       }
   }
   document.getElementById("cherryRangeText").innerHTML = "Current Range: " + "0" + " - " + cherryHigh
   document.getElementById("lemonRangeText").innerHTML = "Current Range: " + lemonLow + " - " + lemonHigh
   document.getElementById("cloverRangeText").innerHTML = "Current Range: " + cloverLow + " - " + cloverHigh
   document.getElementById("bellRangeText").innerHTML = "Current Range: " + bellLow + " - " + bellHigh
   document.getElementById("diamondRangeText").innerHTML = "Current Range: " + diamondLow + " - " + diamondHigh
   document.getElementById("treasureRangeText").innerHTML = "Current Range: " + treasureLow + " - " + treasureHigh
   document.getElementById("sevenRangeText").innerHTML = "Current Range: " + sevenLow + " - " + "100"
   moneyUpdate(0,0)
}
function addLuck(){
   var times = document.getElementById("luckXUpgrades").value
   if(times ==""){
       times = 1
   }
   if(money > 500 * times){
       for(i = 0; i < times; i++){
           money -= 500
           lucky = lucky + 0.01
           document.getElementById("luckText").innerHTML = "Current Luck: x" + lucky.toFixed(2)
           moneyUpdate(0,0)
       }
   }
}
function getImage(luck){
   var imgNum = ((Math.round(Math.floor(Math.random()*100)+1)*luck))
   if(imgNum > 100){
       imgNum = 100
   }
   if(imgNum > 0 && imgNum < cherryHigh){
       return "Cherries.png"
   }
   if(imgNum >= lemonLow && imgNum < lemonHigh){
       return "Lemon.png"
   }
   if(imgNum >= cloverLow && imgNum < cloverHigh){
       return "Clove.png"
   }
   if(imgNum >= bellLow && imgNum < bellHigh){
       return "Bell.png"
   }
   if(imgNum >= diamondLow && imgNum < diamondHigh){
       return "Diamond.png"
   }
   if(imgNum >= treasureLow && imgNum < treasureHigh){
       return "Chest.png"
   }
   if(imgNum >= sevenLow && imgNum <= 100){
       return "Seven.png"
   }
   return "Cherries.png"
}  
function scoring(){
   for(i = 0; i < 4; i++){
       checkRow(i)
   }
   ticker = -1
   for(i = 7; i < 11; i++){
       checkRow(i)
   }
   ticker = -1
   for(i = 14; i < 18; i++){
       checkRow(i)
   }
   ticker = -1
   for(i = 0; i < 7; i++){
       checkCol(i)
   }
   ticker = -1
   for(i = 0; i < 5; i++){
       checkDiagDown(i)
   }
   ticker = -1
   for(i = 7; i < 2; i--){
       checkDiagUp(i)
   }
   ticker = -1
   checkSlopeDown(0)
   ticker = -1
   checkSlopeUp(6)
   ticker = -1
   checkEye(8)
   ticker = -1
   checkV(1)
   ticker = -1
   checkVDown(3)
   ticker = -1
   jackpot(0)
   ticker = -1
}
function checkRow(tile){
   if(tileList[tile] == tileList[tile+1] && tileList[tile] == tileList[tile+2]){
       moneyUpdate(5,tile)
   }
}
function checkCol(tile){
   if(tileList[tile] == tileList[tile+7] && tileList[tile] == tileList[tile+14]){
       moneyUpdate(5,tile)
   }
}
function checkDiagDown(tile){
    if(tileList[tile] == tileList[tile+8] && tileList[tile] == tileList[tile+16]){
       moneyUpdate(5,tile)
   }
}
function checkDiagUp(tile){
    if(tileList[tile] == tileList[tile+6] && tileList[tile] == tileList[tile+13]){
       moneyUpdate(5,tile)
   }
}
function checkSlopeDown(tile){
   if(tileList[0] == tileList[8] && tileList[0] == tileList[9] && tileList[0] == tileList[10] && tileList[0] == tileList[11] && tileList[0] == tileList[12] && tileList[0] == tileList[20]){
       moneyUpdate(7.50,tile)
   }
}
function checkSlopeUp(tile){
   if(tileList[6] == tileList[12] && tileList[6] == tileList[11] && tileList[6] == tileList[10] && tileList[6] == tileList[9] && tileList[6] == tileList[8] && tileList[6] == tileList[14]){
       moneyUpdate(7.50,tile)
   }
}
function checkEye(tile){
   if(tileList[8] == tileList[2] && tileList[8] == tileList[3] && tileList[8] == tileList[4] && tileList[8] == tileList[6] && tileList[8] == tileList[14] && tileList[8] == tileList[16] && tileList[8] == tileList[17] && tileList[8] == tileList[18] && tileList[8] == tileList[19] && tileList[8] == tileList[20]){
       moneyUpdate(15,tile)
   }
}
function checkV(tile){
   if(tileList[1] == tileList[9] && tileList[1] == tileList[18] && tileList[1] == tileList[11] && tileList[1] == tileList[5]){
       moneyUpdate(12.50,tile)
   }
}
function checkVDown(tile){
   if(tileList[3] == tileList[9] && tileList[3] == tileList[11] && tileList[3] == tileList[16] && tileList[3] == tileList[20]){
       moneyUpdate(12.50,tile)
   }
}
function jackpot(tile){
   var count = 0
   for(i = 0; i < 22; i++){
       if(tileList[0] == tileList[i]){
           count++
       }
   }
   if(count == 21){
       moneyUpdate(50.00,tile)
   }
}
function symboleMult(symbole){
   if(symbole == "Cherries"){
       return 1
   }
   if(symbole == "Lemon"){
       return 1.125
   }
   if(symbole == "Clove"){
       return 1.25
   }
   if(symbole == "Bell"){
       return 1.325
   }
   if(symbole == "Diamond"){
       return 1.5
   }
   if(symbole == "Chest"){
       return 1.625
   }
   if(symbole == "Seven"){
       return 1.75
   }
}
function moneyUpdate(base,tile){
   ticker++
   if(base != 0){
       money += ((base + ticker * 7.50) * symboleMult(tileList[tile]) * (betAmount*.25))
       money = roundToPlace(money, 2)
   }
   document.getElementById("money").innerHTML = "Money: $" + money.toFixed(2)
   if(money <= 0){
       lost()
   }
}
function roundToPlace(base, decimal){
   return Math.round(base * Math.pow(10, decimal))/Math.pow(10, decimal);
}
function lost(){
   document.getElementById("noMoney").innerHTML = ""
   document.getElementById("lost").innerHTML = "You Ran Out Of Money And Left"
   setTimeout(() => {
       window.location.reload();
   }, 2500);
}
