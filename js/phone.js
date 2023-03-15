function updatePhoneNumber(isIcrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber;
    if(isIcrease === true){
        newPhoneNumber = phoneNumber + 1;
    }
    else{
        newPhoneNumber = phoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
}

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
 // calculate total
function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-price');
    const currentCaseTotal = getTextElementValueById('case-price');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueById('tax', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    
    setTextElementValueById('total', finalAmount);
}


document.getElementById('btn-phone-plus').addEventListener('click', function
()
    {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
    
    calculateSubTotal();


});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();

});