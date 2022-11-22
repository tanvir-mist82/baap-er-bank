document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawTotalString);
    


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanaceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanaceTotal);


    if(newWithdrawAmount > previousBalanaceTotal){
        alert('You dont have sufficient money');
        return;
    }
    


    const currentWithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    
    
    const newBalanceTotal = previousBalanaceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})