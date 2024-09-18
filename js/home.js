// console.log('home added');
/***
 * * S1: add event handler
 * Prevent page reload after form submit
 * * s2: add an event handler to the add money button inside the form
 * get the pin number
 * * verify the pin number
 * 
 */

// S1.
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // S2:  Money added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    // Get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput, pinNumberInput);
    // Step 3 pin validation (Not a valid way to validation)
    if (pinNumberInput === '1234') {
        console.log('Adding money to account');
        // Step 4 : Get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        // step 5 Add money with current balance
        const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
        console.log(newBalance);
        // Step 6 : Set the new Balance to the current balance 
        document.getElementById('account-balance').innerText = newBalance

    }
    else {
        alert('Your pin incorrect!')
    }

})