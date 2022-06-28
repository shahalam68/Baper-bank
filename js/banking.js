// Handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    // get deposit amount
    const depositInput = document.getElementById('deposit-amount');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositAmount);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;
    depositInput.value ='';
    // update account balance
});