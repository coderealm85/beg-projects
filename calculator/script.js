let currentValue='';
document.querySelector('#display').value=currentValue;
function AC(){
currentValue='';
document.querySelector('#display').value=currentValue;

}
function DEL(){
    currentValue = currentValue.slice(0, -1);
    document.querySelector('#display').value=currentValue;
}
function per(){
    currentValue=currentValue+'%';
document.querySelector('#display').value=currentValue;
}
function bhag(){
    currentValue=currentValue+'/';
document.querySelector('#display').value=currentValue;
}
function seven(){
    currentValue=currentValue+7;
document.querySelector('#display').value=currentValue;

}
function eight(){
    currentValue=currentValue+'8';
    document.querySelector('#display').value=currentValue;
}
function nine(){
    currentValue=currentValue+'9';
    document.querySelector('#display').value=currentValue;
}
function mul(){
    currentValue=currentValue+'*';
    document.querySelector('#display').value=currentValue;
}
function four(){
    currentValue=currentValue+'4';
    document.querySelector('#display').value=currentValue;
}
function five(){
    currentValue=currentValue+'5';
    document.querySelector('#display').value=currentValue;
}
function six(){
    currentValue=currentValue+'6';
    document.querySelector('#display').value=currentValue;
}
function minus(){
    currentValue=currentValue+'-';
    document.querySelector('#display').value=currentValue;
}
function one(){
    currentValue=currentValue+'1';
    document.querySelector('#display').value=currentValue;
}
function two(){
    currentValue=currentValue+'2';
    document.querySelector('#display').value=currentValue;
}
function three(){
    currentValue=currentValue+'3';
    document.querySelector('#display').value=currentValue;
}
function plus(){
    currentValue=currentValue+'+';
    document.querySelector('#display').value=currentValue;
}
function zero(){
    currentValue=currentValue+'0';
    document.querySelector('#display').value=currentValue;
}
function dot(){
    currentValue=currentValue+'.';
    document.querySelector('#display').value=currentValue;
}
function equal(){
    let result=eval(currentValue);
    document.querySelector('#display').value=result;
}