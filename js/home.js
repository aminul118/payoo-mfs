// console.log('home added');
/***
 * * S1: add event handler
 * Prevent page reload after form submit
 * * s2: add an event handler to the add money button inside the form
 */

// S1.
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // S2:  Money added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;


    // Get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput, pinNumberInput);

})