const username = document.getElementById('myUsernameSubmitButton'); 

username.onclick = function usernameLogic() {

    const usernametextboxout = document.getElementById('myTextBox_Username').value;
    const myUsername = document.getElementById('Username');
    let usernameStr;

    myUsername.innerHTML = 'Username: ' + usernametextboxout;

}

const password = document.getElementById('myPasswordSubmitButton');

password.addEventListener('click', () => {

    const passwordinput = document.getElementById('myTextBox_Password').value;
    const passwordoutput = document.getElementById('Password');

    function encrypt (arr,length) {
        for (i=0;i=length;i++)
            arr[i] = '*';
        return 'it works'
    }

    let encryptedArr = Array;

    try {
        passwordoutput.innerHTML = 'Password: ' + encrypt(encryptedArr,passwordinput.length);
    }
    catch {
        Error('dang it')
    }
})

const subPaymentType = document.getElementById('submitPaymentType');

subPaymentType.onclick = function subPaymentTypelogic (){

    const visaBtn = document.getElementById('visaBtn');
    const masterCardBtn = document.getElementById('masterCardBtn');
    const amExBtn = document.getElementById('amExBtn');
    const payTypeStatus = document.getElementById('payTypeStatus');
    let strOfPaymentType;
    let errorPayType1;
    let errorPayType2;
    let errorPayType3;

    if (visaBtn.checked == true && masterCardBtn.checked == true){
        errorPayType1 = 'Visa';
        errorPayType2 = 'MasterCard';
        payTypeStatus.innerHTML = 'Error: Choose One Payment Type(' + errorPayType1 + ' or ' + errorPayType2 + ')';
    }

    if (masterCardBtn.checked == true && amExBtn.checked == true){
        errorPayType1 = 'MasterCard';
        errorPayType2 = 'American Express';
        payTypeStatus.innerHTML = 'Error: Choose One Payment Type(' + errorPayType1 + ' or ' + errorPayType2 + ')';
    }
    
    if (visaBtn.checked == true && amExBtn.checked == true){
        errorPayType1 = 'Visa';
        errorPayType2 = 'American Express';
        payTypeStatus.innerHTML = 'Error: Choose One Payment Type(' + errorPayType1 + ' or ' + errorPayType2 + ')';
    }

    if (visaBtn.checked == true && masterCardBtn.checked == true && amExBtn.checked == true){
        errorPayType1 = 'Visa'
        errorPayType2 = 'MasterCard';
        errorPayType3 = 'American Express';
        payTypeStatus.innerHTML = 'Error: Choose One Payment Type(' + errorPayType1 + ' or ' + errorPayType2 + ' or ' + errorPayType3 + ')';
    }

    if (visaBtn.checked == true ){
        strOfPaymentType = 'Visa';
        payTypeStatus.innerHTML = 'Payment Type: ' + strOfPaymentType;
    }

    if (masterCardBtn.checked == true){
        strOfPaymentType = 'Master Card';
        payTypeStatus.innerHTML = 'Payment Type: ' + strOfPaymentType;
    }

    if (amExBtn.checked == true){
        strOfPaymentType = 'American Express';
        payTypeStatus.innerHTML = 'Payment Type: ' + strOfPaymentType;
    }

}

const subBtn = document.getElementById('submitSubsribed');

subBtn.onclick = function subBtnlogic (){

    const subCheckBox = document.getElementById('subBtn');

    if (subCheckBox.checked == true) {

        subscription = true
        

    } 
    if (subscription == true){

        console.log('You are subscribed!!!')
        const subStatusMsg = document.getElementById('subStatus');
        subStatusMsg.innerHTML = 'You Are Subscribed To My <span class = "js">JS</span> Course!!!'
    }
}
