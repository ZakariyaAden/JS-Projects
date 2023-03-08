const fs = require('fs')
const bugUpdateBtn = document.getElementById('subBugUpdate');

bugUpdateBtn.addEventListener('click',() => {

    const updateTextBox = document.getElementById('updateTextBox');
    const updateDescriptionTextBox = document.getElementById('updateDescriptionTextBox');
    const bugStatusPrintToPage = document.getElementById('printBugStatus');
    const bugDescribtionPrintToPage = document.getElementById('printBugDescribtion');

    let status = updateTextBox.value;
    let description = updateDescriptionTextBox.value;

    if (status == null && description == null) {
        console.log('alt');
    }

    else if (status == null) {
        status = 'N/A';
    }
    
    else if (description == null) {
        description = 'N/A';
    }


    //fs.writeFileSync('bugStatus.txt', status);
    //fs.writeFileSync('bugDescription.txt', description);
    updateDescriptionTextBox.value = null
    updateTextBox.value = null
    bugStatusPrintToPage.innerHTML = "Bug Status: " + status;
    bugDescribtionPrintToPage.innerHTML = "Bug Describtion: " + description;

})