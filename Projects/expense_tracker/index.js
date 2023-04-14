const nameOfExpense = document.getElementById('nameOfExpense');
const dropdownForpurposes = document.getElementById('dropdownForpurposes');
const dateOfPurposes = document.getElementById('dateSelecction');
const subAllExpenses = document.getElementById('subInfoOfExpense');

subAllExpenses.addEventListener('click',() => {

    const printAllExpenes = document.createElement('h1');

    printAllExpenes.innerHTML = 'Name of Expenes: ' + nameOfExpense.value;
    
    document.getElementById('body').append(printAllExpenes);
});