// Handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    // get deposit amount
    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = depositInput.value;
    console.log(depositAmount);
});