// console.log('cash out connected');

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const inputCashOut = document.getElementById('input-cash-out').value;
    const cashOutPin = document.getElementById('cash-out-pin').value;

    if(cashOutPin === '1234'){
     const balance = document.getElementById('account-balance').innerText;
    //  Updated balance
    const currentBalance = parseFloat(balance) - parseFloat(inputCashOut);
    document.getElementById('account-balance').innerText = currentBalance;
   

    }
    else{
        alert('Your password is wrong!');
    }

})

