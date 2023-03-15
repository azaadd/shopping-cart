/*
1. add event listener to the case plus button.
2. get value inside the case number field (input-field).
3. 

*/ 
function updateCaseNumber(isIcrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const caseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIcrease === true){
        newCaseNumber = caseNumber + 1;
    }
    else{
        newCaseNumber = caseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();

});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();

});