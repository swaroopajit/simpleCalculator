document.getElementById("clearScreen").onclick = clear;
var workingNum = 0;
var lastoperator = "";
var newOp = true;

function putNumber(val){
    let sub = document.getElementById("numScreen");
    if(newOp == true){
        sub.value = "0";
        newOp = false;
        workingNum = 0;
    }
    if(sub.value!="0"){
        sub.value += val.innerHTML;
    }else{
        sub.value = val.innerHTML;
    }
}

function addDecimal(){
    let sub = document.getElementById("numScreen");
    var isDecimal = false;
    for(var i=0;i<sub.value.length;i++){
        if(sub.value.charAt(i)=="."){
            isDecimal = true;
            break;
        }
    }
    if(isDecimal == false){
        sub.value += ".";
    }
}

function clear(){
    let sub = document.getElementById("numScreen");
    sub.value = "0";
    workingNum = 0;
    newOp = true;
    lastoperator = "";
}

function changeSign(){
    let sub = document.getElementById("numScreen");
    if(sub.value != "0"){
        if(sub.value.charAt(0) == "-"){
            sub.value = sub.value.substring(1);
        }else{
            sub.value = "-" + sub.value;
        }
    }
}

function add(){
    let sub = document.getElementById("numScreen");
    prevOperation(sub);
    
    lastoperator = "+";
    if(workingNum == 0){
        workingNum = sub.value;
    }    
    sub.value = "0";
    newOp = false;
}

function subtract(){
    let sub = document.getElementById("numScreen");
    prevOperation(sub);
    lastoperator = "-";
    if(workingNum == 0){
        workingNum = sub.value;
    }
    sub.value = "0";
    newOp = false;
}

function multiply(){
    let sub = document.getElementById("numScreen");
    prevOperation(sub);
    lastoperator = "*";
    if(workingNum == 0){
        workingNum = sub.value;
    }
    sub.value = "0";
    newOp = false;
}

function divide(){
    let sub = document.getElementById("numScreen");
    prevOperation(sub);
    lastoperator = "/";
    if(workingNum == 0){
        workingNum = sub.value;
    }
    sub.value = "0";
    newOp = false;
}

function equal(){
    let sub = document.getElementById("numScreen");
    prevOperation(sub);
    sub.value = workingNum;
    lastoperator = "";
    newOp = true;
}

function prevOperation(val){
    if (lastoperator == "+"){
        workingNum=Number(workingNum) + Number(val.value);
    }else if(lastoperator == "-"){
        workingNum-= Number(val.value);
    }else if(lastoperator == "*"){
        workingNum*= Number(val.value);
    }else if(lastoperator == "/"){
        workingNum/= Number(val.value);
    }
}