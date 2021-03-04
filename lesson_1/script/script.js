const btnElem = document.getElementById('btn');
const inputElem = document.getElementById('input');
const outputElem = document.getElementById('output');


function handler(){
    let value = inputElem.value;
    let upValue = value.toUpperCase();
    outputElem.innerText = upValue;
}

inputElem.addEventListener('input', handler )