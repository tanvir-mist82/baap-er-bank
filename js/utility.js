function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementById(inputInnerTextId){
    const textElement = document.getElementById(inputInnerTextId);
    const textElementString = textElement.innerText;
    const textElementNumber = parseFloat(textElementString);
    return textElementNumber;
}

document.getElementById('btn-deposit').addEventListener('click' , function(){

})