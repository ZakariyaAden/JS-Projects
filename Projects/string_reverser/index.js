const subBtn = document.getElementById("SubBtnForStringReverser")

subBtn.addEventListener('click',() => {
    const rawMsg = document.getElementById("textareaForRawMessage")
    const printMsg = document.getElementById("displayConvertedMessage")
    function stringReverser (parastr){
        let arrForReverser = []
        for (let i = parastr.length -1; i >= 0; i--) {
            arrForReverser.push(parastr.charAt(i))
        }
        let letter = ""
        for (let j = 0; j < parastr.length; j++) {
            letter = letter + arrForReverser[j];
        }
      return letter;        
    }
    printMsg.innerHTML = "Reversed String: " + stringReverser(rawMsg.value)
    rawMsg.value = null
})