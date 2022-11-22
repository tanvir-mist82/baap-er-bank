// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmountString = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//     // console.log(newWithdrawAmount);

//     withdrawField.value = '';

//     const withdrawTotalElement = document.getElementById('withdraw-total');
//     const previousWithdrawTotalString = withdrawTotalElement.innerText;
//     const previouswithdrawTotal = parseFloat(previousWithdrawTotalString);
    


//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanaceTotal = parseFloat(previousBalanceTotalString);
//     // console.log(previousBalanaceTotal);


//     if(newWithdrawAmount > previousBalanaceTotal){
//         alert('You dont have sufficient money');
//         return;
//     }
    


//     const currentWithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
//     withdrawTotalElement.innerText = currentWithdrawTotal;

    
    
//     const newBalanceTotal = previousBalanaceTotal - newWithdrawAmount;
//     balanceTotalElement.innerText = newBalanceTotal;
    
// })


document.getElementById('btn-withdraw').addEventListener('click' , function(){

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    
    setTextElementValueById('withdraw-total' , totalWithdrawAmount);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total' , newBalanceTotal);

})