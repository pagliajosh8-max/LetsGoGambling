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
    const Dcard1 = [];
const Dcard2 = [];
    var Balance = 100;
    let saved1 = localStorage.getItem('Balance');
    console.log(saved1)
    if (saved1 !== null) {
    Balance = Number(saved1);
    } else {
        Balance = 100
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
        if(i == 1){
            Dcard1.push(card[0])
            Dcard1.push(card[1])
            console.log(Dcard1)
        }
        if(i == 2){
            Dcard2.push(card[0])
            Dcard2.push(card[1])
            console.log(Dcard2)
        }
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
    if(BetAmt <= 0){
        return
    }
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
        var C1 = document.getElementById("1");
        var C2 = document.getElementById("TL1")
        var C3 = document.getElementById("BR1")
        C1.innerHTML = Dcard1[0].toLocaleUpperCase()
        if(Dcard1[1] == "h"){
            C2.innerHTML = "♥"
            C2.style.color = "red"
            C3.innerHTML = "♥"
            C3.style.color = "red"
            C1.style.color = "red"
        }
        if(Dcard1[1] == "d"){
            C2.innerHTML = "♦"
            C2.style.color = "red"
            C3.innerHTML = "♦"
            C3.style.color = "red"
            C1.style.color = "red"
        }
        if(Dcard1[1] == "s"){
            C2.innerHTML = "♠"
            C3.innerHTML = "♠"
        }
        if(Dcard1[1] == "c"){
            C2.innerHTML = "♣"
            C3.innerHTML = "♣"
        }
        var C11 = document.getElementById("2");
        var C21 = document.getElementById("TL2")
        var C31 = document.getElementById("BR2")
        C11.innerHTML = Dcard2[0].toLocaleUpperCase()
        if(Dcard2[1] == "h"){
            C21.innerHTML = "♥"
            C21.style.color = "red"
            C31.innerHTML = "♥"
            C31.style.color = "red"
            C11.style.color = "red"
        }
        if(Dcard2[1] == "d"){
            C21.innerHTML = "♦"
            C21.style.color = "red"
            C31.innerHTML = "♦"
            C31.style.color = "red"
            C11.style.color = "red"
        }
        if(Dcard2[1] == "s"){
            C21.innerHTML = "♠"
            C31.innerHTML = "♠"
        }
        if(Dcard2[1] == "c"){
            C21.innerHTML = "♣"
            C31.innerHTML = "♣"
        }
        setTimeout(() => {
    location.reload();
  }, 3000);
        
    }
}