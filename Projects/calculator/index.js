function takeIndex(id){
    const numButton = document.getElementById(id);
    const calcScreen = document.getElementById("screen");
    const equals = document.getElementById("calc-button-equals");

    let arrOfIndex = [
        //put index dataset to be iterated over
    ];

    let content = calcScreen.value;
    calcScreen.innerHTML = content + numButton.dataset.index;
    equals.addEventListener('onclick',e =>{
        let charSequence = calcScreen.value;
        let arr = [];
        for (let i = 0; i < charSequence.length(),i++){
            arr.push(charSequence.charAt[i]);
        }
        arr.forEach(function (item, index) {
            for(let g = 0; g < arr.length; g++){
                if(item == )
            }
        })
    })
}
function clear(){
    const calcScreen = document.getElementById("calcInput");
    calcScreen.value = null;
}