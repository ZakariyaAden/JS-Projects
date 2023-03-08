function takeIndex(id){
    const numButton = document.getElementById(id);
    const calcScreen = document.getElementById("screen");
    const equals = document.getElementById("calc-button-equals");
    let content = calcScreen.value;
    calcScreen.innerHTML = content + numButton.dataset.index;
    equals.addEventListener('onclick',e =>{
        let charSequence = calcScreen.value;
        let arr = [];
        for (let i = 0; i < charSequence.length(),i++){
            arr.push(charSequence.charAt[i]);
        }
        arr.forEach(item,index)

    })
}
function clear(){
    const calcScreen = document.getElementById("calcInput");
    calcScreen.value = null;
}