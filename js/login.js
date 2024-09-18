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
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value);


})