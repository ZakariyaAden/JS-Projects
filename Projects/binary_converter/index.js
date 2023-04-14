function makeArray(msg){
    let arr = [];
    for(let i = 0;i <= msg.length;i++){
        arr.push(msg.charAt(0));
    }
    return arr;
};

function binoEncode(arrForReverser) {
    for (let value in arrForReverser){
        switch (value) {
            case "a":
                let a = "01100001"; 
                arrForReverser.shift(a)
                break;
                
            case "b":
                let b = "01100010";  
                arrForReverser.shift(b)
                break;
            case "c":
                let c = "01100011"; 
                arrForReverser.shift(c) 
                break;
            case "d":
                let d = "01100100";
                arrForReverser.shift(d)  
                break;
            case "e":
                let e = "01100101"; 
                arrForReverser.shift(e) 
                break;
            case "f":
                let f = "01100110";  
                arrForReverser.shift(f)
                break;

            case "g":
                let g = "01100111"; 
                arrForReverser.shift(g) 
                break;
            case "h":
                let h = "01101000"; 
                arrForReverser.shift(h) 
                break;                    

            case "i":
                let i = "01101001";
                arrForReverser.shift(i)  
                break;
            case "j":
                let j = "01101010";
                arrForReverser.shift(j)  
                break;

            case "k":
                let k = "01101011"; 
                arrForReverser.shift(k) 
                break;
            case "l":
                let l = "01101100";  
                arrForReverser.shift(l)
                break;                    

            case "m":
                let m = "01101101";  
                arrForReverser.shift(m)
                break;
            case "n":
                let n = "01101110";  
                arrForReverser.shift(n)
                break;

            case "o":
                let o = "01101111"; 
                arrForReverser.shift(o) 
                break;
            case "p":
                let p = "01110000"; 
                arrForReverser.shift(p) 
                break;                    

            case "q":
                let q = "01110001"; 
                arrForReverser.shift(q) 
                break;
            case "r":
                let r = "01110010"; 
                arrForReverser.shift(r) 
                break;

            case "s":
                let s = "01110011";
                arrForReverser.shift(s)  
                break;
            case "t":
                let t = "01110100";
                arrForReverser.shift(t)  
                break;                    

            case "u":
                let u = "01110101";
                arrForReverser.shift(u)  
                break;
            case "v":
                let v = "01110110";
                arrForReverser.shift(v)  
                break;

            case "w":
                let w = "01110111"; 
                arrForReverser.shift(w) 
                break;
            case "x":
                let x = "01111000"; 
                arrForReverser.shift(x) 
                break;                    

            case "y":
                let y = "01111001";
                arrForReverser.shift(y)  
                break;

            case "z":
                let z = "01111010";
                arrForReverser.shift(z)  
                break;
            case " ":
                let blank = " ";
                arrForReverser.shift(blank)
                break;
        }
    }
};

function strToArray(arrayToConvert){
    let str = '';
    for(let i = 0; i < arrayToConvert.length; i++){
        str = str + arrayToConvert[i];
    };
    return str;
};

function main(){
    const subBtn = document.getElementById("subForBinoConvert");
    const rawMsgInput = document.getElementById("binoInput");
    const convertedBino = document.getElementById("printMsg"); 

    subBtn.addEventListener('onclick', e => {
        let msg = rawMsgInput.value;
        let msgArr = makeArray(msg);
        let convertedArr = binoEncode(msgArr);
        let convertedStr = strToArray(convertedArr);
        convertedBino.innerHTML = convertedArr;
        rawMsgInput.value = null;
    });
};