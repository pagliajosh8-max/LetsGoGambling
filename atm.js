let fund = localStorage.getItem('fund');
var funds = 500;
if(fund == null){
    funds = 500
}
else{
    funds = fund
}
var ogb;
document.getElementById("amt").innerHTML = "$" + funds
if (fund !== null) {
    funds = Number(fund);
} else {
    funds = 500;
}
function code(){
const ATM = document.getElementById("codeInput"); 
const ATMcode = ATM.value; 
if(ATMcode == "7676"){
    funds = 1000
     document.getElementById("amt").innerHTML = "$" + funds
        localStorage.setItem('fund', funds);
}
else{
    if(ATMcode == "6767"){
        alert("Get a job")
    }
    else{
        alert("Wrong")
    }
}
ATM.value = '';
}
function redeem(){
    if(funds <= 0){
        funds = 0
        document.getElementById("amt").innerHTML = "$" + funds
        localStorage.setItem('fund', funds);
        document.getElementById("take").innerHTML = "You're Broke"
        return
    }
    ogb = localStorage.getItem("Balance")
    localStorage.setItem('Balance', Number(ogb) + 100);
    funds = funds - 100
    localStorage.setItem('fund', funds);
    document.getElementById("amt").innerHTML = "$" + funds
}