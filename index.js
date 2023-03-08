//const fs = require('fs');

const reportBtn = document.getElementById('reportBugStaus');

reportBtn.addEventListener('click',() => {

    const bugStatusBC = document.getElementById('bugStatusBC');
    const bugStatusCA = document.getElementById('bugStatusCA');
    const bugStatusET = document.getElementById('bugStatusET'); 
    const bugStatusPM = document.getElementById('bugStatusPM'); 
    const bugStatusTA= document.getElementById('bugStatusTA');    
    let bugStatusLocation = window.prompt('Choose What JS Project you would like to update the bug status of?\nBinary Converter = BC \nCalucalator = CA\nExpense Tracker = ET\nPayment Method = PM\nTodo App = TA\n');
    let bugStatusLocationFullName = new String;
    let bugStatusLocationIfKey = new Boolean;
    let bugStatusLocationNA = new Boolean; 


    bugStatusLocation.toUpperCase();

    switch (bugStatusLocation) {
        case 'BC':
            bugStatusLocationFullName = 'Binary Converter';
            bugStatusLocationIfKey = true;
            break;

        case 'CA':
            bugStatusLocationFullName = 'Calculator';
            bugStatusLocationIfKey = true;
            break;            

        case 'ET':
            bugStatusLocationFullName = 'Expenses Tracker';
            bugStatusLocationIfKey = true;
            break;
        
        case 'PM':
            bugStatusLocationFullName = 'Payment Method';
            bugStatusLocationIfKey = true;
            break;
        
        case 'TA':
            bugStatusLocationFullName = 'Todo App';
            bugStatusLocationIfKey = true;
            break;
    }
    
    if (bugStatusLocation.length != 2) {
        bugStatusLocationNA = false;
    }

    if (bugStatusLocation != null) {
        let bugStatusChange  = window.prompt('Change Bug Status of ' + bugStatusLocationFullName);
        let bugDescription = window.prompt('Add a description of the bug');
        if (bugStatusLocationIfKey == true) {
            switch (bugStatusLocation) {
                case 'BC':
                    bugStatusBC.innerHTML = 'Bug Status of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugStatusChange + '</i><br>Bug Description of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugDescription + '</i>';
                    //fs.writeFile('bugStatus.txt',bugStatusChange, (err) => {
                    //    if (Error == true)
                    //        window.alert('Error: Unable to update Bug Status');
                    //})                    
                    //fs.writeFile('bugDescription.txt',bugDescription, (err) => {
                    //    if (Error == true)
                    //        window.alert('Error: Unable to update Bug Description');
                    //})
                    break;

                case 'CA':
                    bugStatusET.innerHTML = 'Bug Status of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugStatusChange + '</i><br>Bug Description of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugDescription + '</i>';
                    break;

                case 'ET':
                    bugStatusET.innerHTML = 'Bug Status of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugStatusChange + '</i><br>Bug Description of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugDescription + '</i>';
                    break;
                
                case 'PM':
                    bugStatusPM.innerHTML = 'Bug Status of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugStatusChange + '</i><br>Bug Description of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugDescription + '</i>';
                    break;
                
                case 'TA':
                    bugStatusTA.innerHTML = 'Bug Status of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugStatusChange + '</i><br>Bug Description of ' + bugStatusLocationFullName + ': <i class = "bugClass">' + bugDescription + '</i>';
                    break;
            }
        }
    else if (bugStatusLocationNA == false) {

        window.alert('No Project Named ' + bugStatusLocation);

    }
    }

    
})

