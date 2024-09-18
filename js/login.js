// console.log('hello');
/***
 * ! Format
 * document.getElementById('id').addEventListener('click', function(){
 * })
 */
// ! From submit reloading the page

//  Step 1 : Set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    //  step 2: prevent default behavior (prevent reloading browser)
    event.preventDefault();  //! Browser এর ডিফল্ট রিলোডিং অফ করে
    console.log('log in button clicked');
    // step 3: Get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber, phoneNumber);

    // !This is not for ultimate / perfect way 
    if (phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
    }
    else{
        alert('Wrong phone Number or Password')
    }


})