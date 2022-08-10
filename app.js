
var calcText = document.querySelector('#calc');


function display(val){
    calcText.value += val;
}

function clear_txt(){
    calcText.value = '';
}

function clear_txt1(val){
    
    let res = calcText.value.slice(0, -1);
    calcText.value =  res
}

function evaluateData(){
    let x = calcText.value;
    let y = eval(x);
    calcText.value = y; 
}
