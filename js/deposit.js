// // step 1: add event listener to the deposit button
// document.getElementById('btn-deposit').addEventListener('click', function(){
//     // step 2: get the deposit amount from the deposit input field
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountString = depositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);
//     // console.log(typeof newDepositAmount);
//     // console.group(depositAmount);

    
//     // step  : clear the deposit field
//     depositField.value = '';

//     // step 3: get the current deposit total amount
//     // for non input (element other than input, textarea) use innerText to get the text
//     const depositTotalElement = document.getElementById('deposit-total');
//     const previousDepositTotalString = depositTotalElement.innerText;
//     // console.log(depositTotal);
//     const previousDepositTotal = parseFloat(previousDepositTotalString);
    

//     // step 4: add numbers to set the total deposit
//     const currentDepositTotal = previousDepositTotal + newDepositAmount;

//     depositTotalElement.innerText = currentDepositTotal;

//     // step 5: get balance currrent total balance
//     const balanceTotalElement = document.getElementById('balance-total'); 
//     const previousBalanaceString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanaceString);

//     // step 6: calculate current total balance
//     const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//     balanceTotalElement.innerText = currentBalanceTotal;  
// })


document.getElementById('btn-deposit').addEventListener('click' , function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    
    const previousDepositAmount = getElementValueById('deposit-total');
    
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    setTextElementValueById('deposit-total' , newDepositTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total' , newBalanceTotal);

})