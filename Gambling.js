//The following code is four seperate javascript files that run different games. I need you to make it so they are all in one cohearent javascript file witha common Balance variable. DONT CHANGE ANY CODE THAT DOESNT NEED TO BE CHANGED WHEN MAKING THE COMMON BALANCE VARIABLE.
//Poker
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
    
    // Shared Balance
    var Balance;
    let saved1 = localStorage.getItem('Balance');

    if (saved1 !== null) {
        Balance = Number(saved1);
    } else {
        Balance = 100;
    }
    var BetAmt = 0
    var res = 3
    setCards();
    handVal = setHandVal(3);
    handVal2 = setHandVal(1);
    Winner()
    console.log(res)
    console.log(handVal2)
    console.log(handVal)
    Money.innerHTML = "$" + Balance
    console.log(Balance)
function TieBreaker1(){
     var Max1 = 100
    var Max2 = 100
    for(i = 8; i<=9; i++){
        var Ca = document.getElementById(i).innerHTML.substring(0,1)
        if(Ca == "A"){
        Ca = 14
        }
        else{
            if(Ca == "K"){
                Ca = 13
            }
            else{
                if(Ca == "Q"){
                    Ca = 12
                }
                else{
                    if(Ca == "J"){
                        Ca = 11
                    }
                    else{
                        if(Ca == "T"){
                            Ca = 10
                        }
                        else{
                            Ca = Number(Ca)
                        }
                    }
                }
            }
        }
        if(Ca < Max1){
            Max1 = Ca
        }

    }
    for(k = 1; k<=2; k++){
        var Ca2 = document.getElementById(k).innerHTML.substring(0,1)
        if(Ca2 == "A"){
        Ca2 = 14
        }
        else{
            if(Ca2 == "K"){
                Ca2 = 13
            }
            else{
                if(Ca2 == "Q"){
                    Ca2 = 12
                }
                else{
                    if(Ca2 == "J"){
                        Ca2 = 11
                    }
                    else{
                        if(Ca2 == "T"){
                            Ca2 = 10
                        }
                        else{
                            Ca2 = Number(Ca2)
                        }
                    }
                }
            }
        }
        if(Ca2 < Max2){
            Max2 = Ca2
        }

    }
    if(Max1>Max2){
        return 1;
    }
    if(Max2>Max1){
        return 2;
    }
    if(Max1 == Max2){
        return 0;
    }
}
function TieBreaker0(){
    var Max1 = 0
    var Max2 = 0
    for(i = 8; i<=9; i++){
        var Ca = document.getElementById(i).innerHTML.substring(0,1)
        if(Ca == "A"){
        Ca = 14
        }
        else{
            if(Ca == "K"){
                Ca = 13
            }
            else{
                if(Ca == "Q"){
                    Ca = 12
                }
                else{
                    if(Ca == "J"){
                        Ca = 11
                    }
                    else{
                        if(Ca == "T"){
                            Ca = 10
                        }
                        else{
                            Ca = Number(Ca)
                        }
                    }
                }
            }
        }
        if(Ca > Max1){
            Max1 = Ca
        }

    }
    for(k = 1; k<=2; k++){
        var Ca2 = document.getElementById(k).innerHTML.substring(0,1)
        if(Ca2 == "A"){
        Ca2 = 14
        }
        else{
            if(Ca2 == "K"){
                Ca2 = 13
            }
            else{
                if(Ca2 == "Q"){
                    Ca2 = 12
                }
                else{
                    if(Ca2 == "J"){
                        Ca2 = 11
                    }
                    else{
                        if(Ca2 == "T"){
                            Ca2 = 10
                        }
                        else{
                            Ca2 = Number(Ca2)
                        }
                    }
                }
            }
        }
        if(Ca2 > Max2){
            Max2 = Ca2
        }

    }
    if(Max1>Max2){
        return 1;
    }
    if(Max2>Max1){
        return 2;
    }
    if(Max1 == Max2){
        return 0;
    }

}
function setHandVal(e){
    var h = 0;
    h = Math.max(h, checkPair(e, e+6));
    h = Math.max(h, checkTwoPair(e, e+6));
    h = Math.max(h, checkThreeOfAKind(e, e+6));
    h = Math.max(h, checkStraight(e, e+6));
    h = Math.max(h, checkFlush(e, e+6));
    h = Math.max(h, checkFullHouse(e, e+6));
    h = Math.max(h, checkFourOfAKind(e, e+6));
    h = Math.max(h, checkStraightFlush(e, e+6));
    h = Math.max(h, checkRoyalFlush(e, e+6));
    return h;
}


function checkPair(s,f){
    for(let i = s; i <= f; i++){
        for(let j = s; j <= f; j++){
            if(i != j && document.getElementById(i).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1)){
                return 1;
            }
        }
    }
    return 0;
}

function checkTwoPair(s,f){
    var pairCount = 0;
    var firstPair = [];
    for(let i = s; i <= f; i++){
        for(let j = s; j <= f; j++){
            if(i != j && document.getElementById(i).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1)){
                if(firstPair.length === 0) firstPair = [i,j];
                pairCount++;
            }
        }
    }
    for(let i = s; i <= f; i++){
        for(let j = s; j <= f; j++){
            if(i != j && firstPair.length && i != firstPair[0] && i != firstPair[1] && j != firstPair[0] && j != firstPair[1]){
                if(document.getElementById(i).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1)){
                    pairCount++;
                }
            }
        }
    }
    return pairCount >= 4 ? 2 : 0;
}

function checkThreeOfAKind(s,f){
    for(let i = s; i <= f; i++){
        for(let j = s; j <= f; j++){
            for(let k = s; k <= f; k++){
                if(i != j && i != k && j != k && document.getElementById(i).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1) && document.getElementById(j).innerHTML.substring(0,1) == document.getElementById(k).innerHTML.substring(0,1)){
                    return 3;
                }
            }
        }
    }
    return 0;
}

function checkStraight(s,f){
    for(let i = s; i <= f; i++){
        let CVal = document.getElementById(i).innerHTML.substring(0,1).toLowerCase();
        if(CVal=="a") CVal=14;
        else if(CVal=="k") CVal=13;
        else if(CVal=="q") CVal=12;
        else if(CVal=="j") CVal=11;
        else if(CVal=="t") CVal=10;
        else CVal=Number(CVal);

        let valList = [CVal, CVal+1, CVal+2, CVal+3, CVal+4];
        for(let j = s; j <= f; j++){
            if(i==j) continue;
            let val = document.getElementById(j).innerHTML.substring(0,1).toLowerCase();
            if(val=="a") val=14;
            else if(val=="k") val=13;
            else if(val=="q") val=12;
            else if(val=="j") val=11;
            else if(val=="t") val=10;
            else val=Number(val);
            for(let k=valList.length-1;k>=0;k--){
                if(val==valList[k]){
                    valList.splice(k,1);
                }
            }
        }
        if(valList.length === 0) return 4;
    }
    return 0;
}

function checkFlush(s, f){
    let suits1 = [];

    for(let i = s-1; i <= f-1 && i < C.length; i++){
        suits1.push(C[i].substring(1,2))
    }

    for(let k = 0; k < suits1.length; k++){
        let num = 0;
        for(let j = 0; j < suits1.length; j++){
            if(suits1[k] == suits1[j]){
                num++;
                if(num >= 5){
                    return 5;
                }
            }
        }
    }

    return 0;
}

function checkFullHouse(s,f){
    var threeOfAKindVal=false;
    var pairVal=false;
    var val=0;
    for(let i = s; i <= f; i++){
        for(let j = s; j <= f; j++){
            for(let k = s; k <= f; k++){
                if(i != j && i != k && j != k &&
                   document.getElementById(i).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1) &&
                   document.getElementById(k).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1)){
                    threeOfAKindVal=true;
                    val=document.getElementById(i).innerHTML.substring(0,1);
                }
            }
        }
    }
    for(let i=s;i<=f;i++){
        for(let j=s;j<=f;j++){
            if(i!=j && document.getElementById(i).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1) &&
               document.getElementById(j).innerHTML.substring(0,1) != val){
                pairVal=true;
            }
        }
    }
    return (threeOfAKindVal && pairVal) ? 6 : 0;
}

function checkFourOfAKind(s,f){
    for(let i=s;i<=f;i++){
        for(let j=s;j<=f;j++){
            for(let k=s;k<=f;k++){
                for(let l=s;l<=f;l++){
                    if(i!=j && i!=k && i!=l && j!=k && j!=l && k!=l &&
                       document.getElementById(i).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1) &&
                       document.getElementById(k).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1) &&
                       document.getElementById(l).innerHTML.substring(0,1) == document.getElementById(j).innerHTML.substring(0,1)){
                        return 7;
                    }
                }
            }
        }
    }
    return 0;
}

function checkStraightFlush(s,f){
    for(let i = s; i <= f; i++){
        let CVal = document.getElementById(i).innerHTML.substring(0,1).toLowerCase();
        if(CVal=="a") CVal=14;
        else if(CVal=="k") CVal=13;
        else if(CVal=="q") CVal=12;
        else if(CVal=="j") CVal=11;
        else if(CVal=="t") CVal=10;
        else CVal=Number(CVal);
        let valList = [CVal, CVal+1, CVal+2, CVal+3, CVal+4];
        let valSuits=[];
        for(let j=s;j<=f;j++){
            if(i==j) continue;
            let val = document.getElementById(j).innerHTML.substring(0,1).toLowerCase();
            let su = document.getElementById(j).innerHTML.substring(1,2);
            if(val=="a") val=14;
            else if(val=="k") val=13;
            else if(val=="q") val=12;
            else if(val=="j") val=11;
            else if(val=="t") val=10;
            else val=Number(val);
            for(let k=valList.length-1;k>=0;k--){
                if(val==valList[k]){
                    valList.splice(k,1);
                    valSuits.push(su);
                }
            }
        }
        if(valList.length === 0){
            let flush = valSuits.length >=5 && valSuits.every(s => s===valSuits[0]);
            return flush ? 8 : 4;
        }
    }
    return 0;
}

function checkRoyalFlush(s,f){
    for(let i = s; i <= f; i++){
        let C1=[document.getElementById(i).innerHTML.substring(0,1).toLowerCase(),document.getElementById(i).innerHTML.substring(1,2)];
        if(C1[0]=="t"){
            for(let j=s;j<=f;j++){
                let C2=[document.getElementById(j).innerHTML.substring(0,1).toLowerCase(),document.getElementById(j).innerHTML.substring(1,2)];
                if(C2[0]=="j"){
                    for(let k=s;k<=f;k++){
                        let C3=[document.getElementById(k).innerHTML.substring(0,1).toLowerCase(),document.getElementById(k).innerHTML.substring(1,2)];
                        if(C3[0]=="q"){
                            for(let l=s;l<=f;l++){
                                let C4=[document.getElementById(l).innerHTML.substring(0,1).toLowerCase(),document.getElementById(l).innerHTML.substring(1,2)];
                                if(C4[0]=="k"){
                                    for(let m=s;m<=f;m++){
                                        let C5=[document.getElementById(m).innerHTML.substring(0,1).toLowerCase(),document.getElementById(m).innerHTML.substring(1,2)];
                                        if(C5[0]=="a"){
                                            if(C1[1]==C2[1] && C2[1]==C3[1] && C3[1]==C4[1] && C4[1]==C5[1]){
                                                return 9;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return 0;
}

function setCards(){
    for (let i = 1; i <= 9; i++){
        var TL = "TL" + i.toString()
        var BR = "BR" + i.toString()
        var C1 = document.getElementById(i.toString());
        var C2 = document.getElementById(TL)
        var C3 = document.getElementById(BR)
        var val = Math.floor(Math.random()*list.length);
        var card = list[val];
        C.push(card)
        list.splice(val,1);
        if(i > 2){
            C1.innerHTML = card[0].toLocaleUpperCase()
        if(card[1] == "h"){
            C2.innerHTML = "♥"
            C2.style.color = "red"
            C3.innerHTML = "♥"
            C3.style.color = "red"
            C1.style.color = "red"
        }
        if(card[1] == "d"){
            C2.innerHTML = "♦"
            C2.style.color = "red"
            C3.innerHTML = "♦"
            C3.style.color = "red"
            C1.style.color = "red"
        }
        if(card[1] == "s"){
            C2.innerHTML = "♠"
            C3.innerHTML = "♠"
        }
        if(card[1] == "c"){
            C2.innerHTML = "♣"
            C3.innerHTML = "♣"
        }
        }
        
    }
}
function bet(amt){
    if(amt > Balance){
        return;
    }
    Balance = Balance - amt;
    Money.innerHTML = "$" + Balance;
    BetAmt = BetAmt + amt;
}
function Winner(){
    if (handVal > handVal2){
        console.log("W")
        res = 0
    }
     if(handVal < handVal2){
        console.log("L")
        res = 1
    }
    if(handVal == handVal2){
        var res1 = TieBreaker0()
           if(res1 == 1){
            console.log("W")
            res = 0
           }
           if(res1 == 2){
            console.log("L")
            res = 1
           }
           if(res1 == 0){
            if(TieBreaker1() == 1){
                console.log("W")
                res = 0
            }
            if(TieBreaker1() == 2){
                console.log("L")
                res = 1
            }
            if(TieBreaker1() == 0){
                console.log("T")
                res = 2
            }
           }
        
    }
}
var StandCount = 0
function Stand(){
    if(StandCount == 0){ 
        document.getElementById("card3").style.display = "block";
        StandCount++
        return
    }
    if(StandCount == 1) {
        document.getElementById("card4").style.display = "block";
        StandCount++
        return
    }
    if(StandCount == 2) {
        document.getElementById("card5").style.display = "block";
        StandCount++
        return
    }
    if(StandCount == 3) {
        document.getElementById("card6").style.display = "block";
        StandCount++
        return
    }
    if(StandCount == 4) {
        document.getElementById("card7").style.display = "block";
        StandCount++
        return
    }
    if(StandCount == 5){
        console.log(res)
        if(res == 0){
            Balance = Balance + (BetAmt*2)
            BetAmt = 0
            Money.innerHTML = "$" + Balance
        }
        if(res == 1){
            BetAmt = 0
        }
        if(res == 2){
            Balance = Balance + (BetAmt)
            BetAmt = 0
            Money.innerHTML = "$" + Balance
        }
        localStorage.setItem('Balance', Balance);
        location.reload();
    }
}
//BlackJack
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
// Shared Balance

if (saved !== null) {
    Balance = Number(saved);
} else {
    Balance = 100;
}
var BetAmt = 0
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
streak.innerHTML = "🔥" + Streak
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
     if (BetAmt == 0){
        return
    }
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
    Score = Number(Score) + Number(card.value)
    console.log(card.value)
}
function stand(){
    if (BetAmt == 0){
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
        console.log("You win!")
    }
    if (DifOpp < DifYou && DifOpp >= 0){
        Streak = 0
        localStorage.setItem('Streak', Streak);
        console.log("You lose!")
    }
    if (DifYou == DifOpp|| (DifYou < 0 && DifOpp < 0)){
        Balance = Balance + BetAmt
        BetAmt = 0
        Bet.innerHTML = "$" + BetAmt;
        Money.innerHTML = "$" + Balance
        console.log("It's a tie!")
    }
    if(DifYou < 0 && DifOpp > 0){
        Streak = 0
        localStorage.setItem('Streak', Streak);
        console.log("You lose!")
    }
    if(DifOpp < 0 && DifYou > 0){
        Balance = Balance + (BetAmt*2)
        BetAmt = 0
        Bet.innerHTML = "$" + BetAmt;
        Money.innerHTML = "$" + Balance
        Streak++
        localStorage.setItem('Streak', Streak);
        console.log("You win!")
    }
    reset()
}
function bet(amt){
    if(amt > Balance){
        return;
    }
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
}
function reset(){
    localStorage.setItem('Balance', Balance);
    location.reload();
    
}
//Roullette
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
//const Money = document.getElementById("Balance")
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

//Slots
var loopCount = 0;
var score = 250;
const Sprites = [
    'Cherries.png',
    'Lemon.png',
    'Clove.png',
    'Diamond.png',
    'Chest.png',
    'Seven.png'
];
function spinStart(){
    //visual spin
    while(loopCount < 50){
        setTimeout(spin, 250)
        loopCount++;
    }
    loopCount = 0;
    score -= 25
    scoring()
}

function spin(){
    //randomizes the tiles
    for(let i=1; i<16; i++){
        document.getElementById(i).src=Sprites[Math.floor(Math.random() * 6)]
    }
    console.log(loopCount)
}
function scoring(){
    //Checks score
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
    document.getElementById("scoreText").innerHTML = "$" + score
    console.log(score)
}
function symbolMult(symbol){
    //Mult per symbol
    symbol = symbol.split('/').pop()
    console.log(symbol)
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
    console.log("fail")
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

