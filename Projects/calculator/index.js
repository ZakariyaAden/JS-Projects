

function takeIndex(id){
    const numButton = document.getElementById(id);
    const calcScreen = document.getElementById("screen");
    let content = calcScreen.value;
    calcScreen.innerHTML = content + numButton.dataset.index;
}
function clear(){
    const calcScreen = document.getElementById("calcInput");
    calcScreen.value = null;
}