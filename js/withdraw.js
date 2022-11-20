document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previouswithdrawTotal);

    const currentWithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanaceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanaceTotal);

    const newBalanceTotal = previousBalanaceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    withdrawField.value = '';
})