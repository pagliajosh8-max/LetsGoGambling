var HV = 0
var list = ["as", "ad", 'ac', 'ah', '2s', '2d', '2c', '2h', '3s', '3d', '3c', '3h', '4s', '4d', '4c', '4h', '5s', '5d', '5c', '5h', '6s', '6d', '6c', '6h', '7s', '7d', '7c', '7h', '8s', '8d', '8c', '8h', '9s', '9d', '9c', '9h', 'ts', 'td', 'tc', 'th', 'js', 'jd', 'jc', 'jh', 'qs', 'qd', 'qc', 'qh', 'ks', 'kd', 'kc', 'kh', ]
var v10 = ""
var v20 = ""
var v11 = ""
var v21 = ""
var v12 = ""
var v22 = ""
var v13 = ""
var v23 = ""
var VN = ""
var VN1 = ""
const YourScore = [0];
const OppScore = [0]
var Num0 = document.getElementById("Num0")
var TL0 = document.getElementById("TLsuit0")
var BR0 = document.getElementById("BRsuit0")
var Num1 = document.getElementById("Num1")
var TL1 = document.getElementById("TLsuit1")
var BR1 = document.getElementById("BRsuit1")
var Num2 = document.getElementById("Num2")
var TL2 = document.getElementById("TLsuit2")
var BR2 = document.getElementById("BRsuit2")
var Num3 = document.getElementById("Num3")
var TL3 = document.getElementById("TLsuit3")
var BR3 = document.getElementById("BRsuit3")
var yourScore = document.getElementById("YourScore")
var Money = document.getElementById("Money")
let saved = localStorage.getItem('Balance');
let savedStreak = localStorage.getItem('Streak')
let savedLosses = localStorage.getItem('Losses')
var streak = document.getElementById('Streak')
var losses = document.getElementById('Losses')
let Streak = 0;
let Losses = 0;
let ClickStand = false
let ClickHit = false
var BJConsole = document.getElementById("BJConsole");
function updateConsole(message) {
    document.getElementById("BJConsole").textContent = message;
}
updateConsole("Place Your Bets and Good Luck!")
if (savedStreak !== null) {
    Streak = Number(savedStreak);
} else {
    Streak = 0;
}
if (savedLosses !== null) {
    Losses = Number(savedLosses);
} else {
    Losses = 0;
}

var Balance;
if (saved !== null) {
    Balance = Number(saved);
} else {
    Balance = 100;
}
var BetAmt = 0
Console()
getAttributes0()
getAttributes1()
getAttributes2()
getAttributes3()
console.log(list)
setCard0()
setCard2()
setCard3()
var Score = 0
var OppTtl = 0
var AddedVal = 0
Money.innerHTML = "$" + Balance
streak.innerHTML = "Current Win Streak: " + Streak
losses.innerHTML = "Current Loss Count: " + Losses
for(k=0; k<YourScore.length; k++){
   Score = Score + YourScore[k]
   console.log(Score)
   AddedVal++
}
for(h=0; h<OppScore.length; h++){
    OppTtl = OppTtl + OppScore[h]
    console.log(h)
}
yourScore.innerHTML = Score
console.log(OppTtl)
while(OppTtl <= 16){
    var N = Math.floor(Math.random() * list.length)
    var w = list.splice(N, 1)[0];
    var Val = w.substring(0,1) 
        if(Val == "t"){
            Val = 10
        }
        if(Val == "k"){
            Val = 10
        }
        if(Val == "j"){
            Val = 10
        }
        if(Val == "q"){
            Val = 10
        }
        if(Val == "a"){
            Val = 1
        }
        OppTtl = Number(OppTtl) + Number(Val)
        console.log(Val)
    }
    console.log(OppTtl)

function showVis(){
    var card2 = document.getElementById("card2")
    HV = HV + 1
    if (HV%2 == 0){
    card2.style.visibility = "visible"
    }
    else{
        card2.style.visibility = "hidden"
    }
}
function getAttributes0(){
    var N = Math.floor(Math.random() * list.length)
    var w = list.splice(N, 1)[0];
    v10 = w.substring(0,1)
    v20 = w.substring(1,2)
    if(v10 >=2 && v10 <= 9){
        OppScore.push(Number(v10));
    }
    if(v10 == "a"){
        OppScore.push(1);
    }
    if(v10 == "t"){
        OppScore.push(10);
    }
    if(v10 == "k"){
        OppScore.push(10);
    }
    if(v10 == "j"){
        OppScore.push(10);
    }
    if(v10 == "q"){
        OppScore.push(10);
    }
}
function getAttributes1(){
    var N = Math.floor(Math.random() * list.length)
    var w = list.splice(N, 1)[0];
    v11 = w.substring(0,1)
    v21 = w.substring(1,2)
    card1Val = v11
    if(v11 >=2 && v11 <= 9){
        OppScore.push(Number(v11));
    }
    if(v11 == "a"){
        OppScore.push(1);
    }
    if(v11 == "t"){
        OppScore.push(10);
    }
    if(v11 == "k"){
        OppScore.push(10);
    }
    if(v11 == "j"){
        OppScore.push(10);
    }
    if(v11 == "q"){
        OppScore.push(10);
    }
    console.log(w)
}
function getAttributes2(){
    var N = Math.floor(Math.random() * list.length)
    var w = list.splice(N, 1)[0];
    v12 = w.substring(0,1)
    v22 = w.substring(1,2)
    for(let i = 2; i<=9; i++){
    if (v12 == i){
    YourScore.push(i);
    }
    }
    if(v12 == "t"){
        YourScore.push(10);
    }
    if(v12 == "k"){
        YourScore.push(10);
    }
    if(v12 == "j"){
        YourScore.push(10);
    }
    if(v12 == "q"){
        YourScore.push(10);
    }
    if(v12 == "a"){
        card3Val = 
    Ace1()
    }
}
function getAttributes3(){
    var N = Math.floor(Math.random() * list.length)
    var w = list.splice(N, 1)[0];
    v13 = w.substring(0,1)
    v23 = w.substring(1,2)
    for(let i = 2; i<=9; i++){
        if (v13 == i){
        YourScore.push(i);
        }
        }
        if(v13 == "t"){
            YourScore.push(10);
        }
        if(v13 == "k"){
            YourScore.push(10);
        }
        if(v13 == "j"){
            YourScore.push(10);
        }
        if(v13 == "q"){
            YourScore.push(10);
        }
        if(v13 == "a"){
        Ace2()
    }
    console.log(w)
}
function getAttributes(){
    var N = Math.floor(Math.random() * list.length)
    var w = list.splice(N, 1)[0];
        return {
                value: w.substring(0,1),
                suit: w.substring(1,2)
            };
}
function setCard0(){
    for(let i = 2; i<=9; i++){
        if (v10 == i){
        Num0.innerHTML = i;
        }
        if (v10 == "a"){
        Num0.innerHTML = "A";
        }
        if (v10 == "t"){
        Num0.innerHTML = "10";
        }
        if (v10 == "j"){
        Num0.innerHTML = "J";
        }
        if (v10 == "q"){
        Num0.innerHTML = "Q";
        }
        if (v10 == "k"){
        Num0.innerHTML = "K";
        }
        }
        if(v20 == "s"){
            TL0.innerHTML = "♠"
            BR0.innerHTML = "♠"
        }
        if(v20 == "c"){
            TL0.innerHTML = "♣"
            BR0.innerHTML = "♣"
        }
        if(v20 == "h"){
            TL0.innerHTML = "♥"
            BR0.innerHTML = "♥"
            TL0.style.color = "red"
            BR0.style.color = "red"
            Num0.style.color = "red"
        }
        if(v20 == "d"){
            TL0.innerHTML = "♦"
            BR0.innerHTML = "♦"
            TL0.style.color = "red"
            BR0.style.color = "red"
            Num0.style.color = "red"
    }
}
function setCard1(){
        for(let i = 2; i<=9; i++){
            if (v11 == i){
                Num1.innerHTML = i;
            }
            if (v11 == "a"){
                Num1.innerHTML = "A";
            }
            if (v11 == "t"){
                Num1.innerHTML = "10";
            }
            if (v11 == "j"){
                Num1.innerHTML = "J";
            }
            if (v11 == "q"){
                Num1.innerHTML = "Q";
            }
            if (v11 == "k"){
                Num1.innerHTML = "K";
            }
        }
    if(v21 == "s"){
        TL1.innerHTML = "♠"
        BR1.innerHTML = "♠"
    }
    if(v21 == "c"){
        TL1.innerHTML = "♣"
        BR1.innerHTML = "♣"
    }
    if(v21 == "h"){
        TL1.innerHTML = "♥"
        BR1.innerHTML = "♥"
        TL1.style.color = "red"
        BR1.style.color = "red"
        Num1.style.color = "red"
    }
    if(v21 == "d"){
        TL1.innerHTML = "♦"
        BR1.innerHTML = "♦"
        TL1.style.color = "red"
        BR1.style.color = "red"
        Num1.style.color = "red"
    }
}
function setCard2(){
        for(let i = 2; i<=9; i++){
            if (v12 == i){
                Num2.innerHTML = i;
            }
            if (v12 == "a"){
                Num2.innerHTML = "A";
            }
            if (v12 == "t"){
                Num2.innerHTML = "10";
            }
            if (v12 == "j"){
                Num2.innerHTML = "J";
            }
            if (v12 == "q"){
                Num2.innerHTML = "Q";
            }
            if (v12 == "k"){
                Num2.innerHTML = "K";
            }
        }
    if(v22 == "s"){
        TL2.innerHTML = "♠"
        BR2.innerHTML = "♠"
    }
    if(v22 == "c"){
        TL2.innerHTML = "♣"
        BR2.innerHTML = "♣"
    }
    if(v22 == "h"){
        TL2.innerHTML = "♥"
        BR2.innerHTML = "♥"
        TL2.style.color = "red"
        BR2.style.color = "red"
        Num2.style.color = "red"
    }
    if(v22 == "d"){
        TL2.innerHTML = "♦"
        BR2.innerHTML = "♦"
        TL2.style.color = "red"
        BR2.style.color = "red"
        Num2.style.color = "red"
    }
}
function setCard3(){
        for(let i = 2; i<=9; i++){
            if (v13 == i){
                Num3.innerHTML = i;
            }
            if (v13 == "a"){
                Num3.innerHTML = "A";
            }
            if (v13 == "t"){
                Num3.innerHTML = "10";
            }
            if (v13 == "j"){
                Num3.innerHTML = "J";
            }
            if (v13 == "q"){
                Num3.innerHTML = "Q";
            }
            if (v13 == "k"){
                Num3.innerHTML = "K";
            }
        }
    if(v23 == "s"){
        TL3.innerHTML = "♠"
        BR3.innerHTML = "♠"
    }
    if(v23 == "c"){
        TL3.innerHTML = "♣"
        BR3.innerHTML = "♣"
    }
    if(v23 == "h"){
        TL3.innerHTML = "♥"
        BR3.innerHTML = "♥"
        TL3.style.color = "red"
        BR3.style.color = "red"
        Num3.style.color = "red"
    }
    if(v23 == "d"){
        TL3.innerHTML = "♦"
        BR3.innerHTML = "♦"
        TL3.style.color = "red"
        BR3.style.color = "red"
        Num3.style.color = "red"
    }
}
function setCard(j, value, suit){
    const NumID = document.getElementById("Num" + j);
    const TLID = document.getElementById("TLsuit" + j);
    const BRID = document.getElementById("BRsuit" + j);

    if (value >= "2" && value <= "9") NumID.innerHTML = value;
    if (value == "a") NumID.innerHTML = "A";
    if (value == "t") NumID.innerHTML = "10";
    if (value == "j") NumID.innerHTML = "J";
    if (value == "q") NumID.innerHTML = "Q";
    if (value == "k") NumID.innerHTML = "K";
    if(suit == "s"){
        TLID.innerHTML = "♠"; BRID.innerHTML = "♠";
    }
    if(suit == "c"){
        TLID.innerHTML = "♣"; BRID.innerHTML = "♣";
    }
    if(suit == "h"){
        TLID.innerHTML = "♥"; BRID.innerHTML = "♥";
        TLID.style.color = "red"; BRID.style.color = "red"; NumID.style.color = "red";
    }
    if(suit == "d"){
        TLID.innerHTML = "♦"; BRID.innerHTML = "♦";
        TLID.style.color = "red"; BRID.style.color = "red"; NumID.style.color = "red";
    }
}
function Ace1(){
        const parentElement = document.getElementById('card3'); 
        const eleven = document.createElement('button'); 
        eleven.style.backgroundColor = 'gold'; 
        eleven.classList.add("Ace")
        const parentElement11 = document.getElementById('card3'); 
        parentElement11.appendChild(eleven);
        eleven.appendChild(document.createTextNode("11"));
        eleven.addEventListener("click", () => setAceValue1(11));
        
        const one = document.createElement('button'); 
        one.style.backgroundColor = 'gold'; 
        one.classList.add("Ace")
        const parentElement1 = document.getElementById('card3'); 
        parentElement1.appendChild(one);
        one.appendChild(document.createTextNode("1"));
        one.addEventListener("click", () => setAceValue1(1));
}
function Ace2() {
    const parentElement = document.getElementById('card4'); 

    const eleven = document.createElement('button'); 
    eleven.style.backgroundColor = 'gold'; 
    eleven.classList.add("Ace");
    eleven.textContent = "11";
    parentElement.appendChild(eleven);

    eleven.addEventListener("click", () => setAceValue2(11));

    const one = document.createElement('button'); 
    one.style.backgroundColor = 'gold'; 
    one.classList.add("Ace");
    one.textContent = "1";
    parentElement.appendChild(one);

    one.addEventListener("click", () => setAceValue2(1));
}
function Ace(){
 const parentElement = document.getElementById('card4'); 

    const eleven = document.createElement('button'); 
    eleven.style.backgroundColor = 'gold'; 
    eleven.classList.add("Ace");
    eleven.textContent = "11";
    parentElement.appendChild(eleven);

    eleven.addEventListener("click", () => setAceValue(11));

    const one = document.createElement('button'); 
    one.style.backgroundColor = 'gold'; 
    one.classList.add("Ace");
    one.textContent = "1";
    parentElement.appendChild(one);

    one.addEventListener("click", () => setAceValue(1));
}
function setAceValue2(value){
    YourScore.push(value);
    Num3.innerHTML = value;
    AddedVal = AddedVal + 1
    yourScore.innerHTML = Score + YourScore[AddedVal-1]
    Score = Score + YourScore[AddedVal-1]
    console.log(AddedVal)
    console.log(YourScore)

    
}
function setAceValue1(value){
    YourScore.push(value);
    Num2.innerHTML = value;
    AddedVal = AddedVal + 1
    yourScore.innerHTML = Score + YourScore[AddedVal-1]
    Score = Score + YourScore[AddedVal-1]
    console.log(AddedVal)
    console.log(YourScore)
}
function setAceValue(value){
    YourScore.push(value);
    AddedVal = AddedVal + 1
    yourScore.innerHTML = Score + YourScore[AddedVal-1]
    Score = Score + YourScore[AddedVal-1]
    console.log(AddedVal)
    console.log(YourScore)
}
var num = 4
function hit(){
    ClickHit = true
    Console()
     if (BetAmt == 0){
        updateConsole("Kindly Click a Yellow Button to Begin")
        return;
    }
    updateConsole("You Chose to Hit")
    num++;

    const parentElement = document.getElementById('Newbuttons'); 
    const newCard = document.createElement('div'); 
    newCard.classList.add("newCard");

    newCard.innerHTML = `
        <p class="TLsuit" id="TLsuit${num}">♠</p>
        <p class="Num" id="Num${num}">A</p>
        <p class="BRsuit" id="BRsuit${num}">♠</p>
    `;
    parentElement.appendChild(newCard);
    getAttributes();
    const card = getAttributes();
    setCard(num, card.value, card.suit);
    if(card.value == "a"){
        card.value = 0
        Ace()
    }
        if(card.value == "t"||card.value == "j"||card.value == "q"||card.value == "k"){
        card.value = 10
        }
    yourScore.innerHTML = Number(Score) + Number(card.value)
    Score += Number(card.value)
}
function stand(){
    ClickStand = true
    if (BetAmt == 0){
        updateConsole("Kindly Click a Yellow Button to Begin")
        return
    }
    var DifOpp = 21 - OppTtl
    var DifYou = 21 - Score
    if (DifYou < DifOpp && DifYou >= 0){
        Balance = Balance + (BetAmt*2)
        BetAmt = 0
        Bet.innerHTML = "$" + BetAmt;
        Money.innerHTML = "$" + Balance
        Streak++
        localStorage.setItem('Streak', Streak);
        streak.innerHTML = "Current Win Streak: " + Streak;
        updateConsole("Nice Job! Your Current Streak Is " + Streak)
    }
    if (DifOpp < DifYou && DifOpp >= 0){
        Streak = 0
        Losses++
        localStorage.setItem('Streak', Streak);
        localStorage.setItem('Losses', Losses)
        losses.innerHTML = "Current Loss Count: " + Losses;
        streak.innerHTML = "Current Win Streak: " + Streak;
        updateConsole("Better Luck Next Time!")
    }
    if (DifYou == DifOpp|| (DifYou < 0 && DifOpp < 0)){
        Balance = Balance + BetAmt
        BetAmt = 0
        Bet.innerHTML = "$" + BetAmt;
        Money.innerHTML = "$" + Balance
        losses.innerHTML = "Current Loss Count: " + Losses;
        streak.innerHTML = "Current Win Streak: " + Streak;
        updateConsole("It's a Tie")
    }
    if(DifYou < 0 && DifOpp > 0){
        Streak = 0
        Losses++
        localStorage.setItem('Streak', Streak);
        localStorage.setItem('Losses', Losses);
        losses.innerHTML = "Current Loss Count: " + Losses;
        streak.innerHTML = "Current Win Streak: " + Streak;
        updateConsole("Better Luck Next Time!")
    }
    if(DifOpp < 0 && DifYou > 0){
        Balance = Balance + (BetAmt*2)
        BetAmt = 0
        Bet.innerHTML = "$" + BetAmt;
        Money.innerHTML = "$" + Balance
        Streak++
        localStorage.setItem('Streak', Streak);
        losses.innerHTML = "Current Loss Count: " + Losses;
        streak.innerHTML = "Current Win Streak: " + Streak;
        updateConsole("Nice Job! Your Current Streak Is " + Streak)
    }
    setTimeout(() => {
        newRound()
    }, 2500)
}
function bet(amt){
    if (Balance == 0){
     updateConsole("I'm Sorry, But You Have Insufficient Funds")
    }
    if(amt > Balance){
        return;
    }
    updateConsole("You Bet $" + amt)
    Balance = Balance - amt;
    Money.innerHTML = "$" + Balance;
    BetAmt = BetAmt + amt;
    Bet.innerHTML = "$" + BetAmt;

}
function allIn(){
    BetAmt = Balance
    Balance = 0
     Money.innerHTML = "$" + Balance;
     Bet.innerHTML = "$" + BetAmt;
     if (BetAmt != 0){
     BJConsole.innerHTML = "You Bet $" + BetAmt
     }
     if (BetAmt == 0){
     BJConsole.innerHTML = "I'm Sorry, But You Have Insufficient Funds"   
     }
}
function reset(){
    localStorage.setItem('Balance', Balance);
}
function Console(){
    if(BetAmt == 0 && (ClickHit || ClickStand)){
        updateConsole("Kindly Click A Yellow Bet Button To Begin")
    }
}
function newRound(){
    list = ["as", "ad", 'ac', 'ah', '2s', '2d', '2c', '2h', '3s', '3d', '3c', '3h', '4s', '4d', '4c', '4h', '5s', '5d', '5c', '5h', '6s', '6d', '6c', '6h', '7s', '7d', '7c', '7h', '8s', '8d', '8c', '8h', '9s', '9d', '9c', '9h', 'ts', 'td', 'tc', 'th', 'js', 'jd', 'jc', 'jh', 'qs', 'qd', 'qc', 'qh', 'ks', 'kd', 'kc', 'kh', ]
    YourScore.length = 0
    OppScore.length = 0
    num = 4
    Score = 0
    OppTtl = 0
    AddedVal = 0
    BetAmt = 0
    Bet.innerHTML = "$" + BetAmt
    document.getElementById('Newbuttons').innerHTML = ""
    getAttributes0()
    getAttributes1()
    getAttributes2()
    getAttributes3()
    setCard0()
    setCard1()
    setCard2()
    setCard3()
    for(let k = 0; k < YourScore.length; k++){
        Score += YourScore[k];
    }
    for(let h = 0; h < OppScore.length; h++){
        OppTtl += OppScore[h];
    }
    yourScore.innerHTML = Score
    updateConsole("Place Your Bets and Good Luck!")
}