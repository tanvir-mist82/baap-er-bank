// step 1: add click event handler with submit button. 
document.getElementById('btn-submit').addEventListener('click', function(){
// step 2: get the email address inside the email input field.
// always remember to use .value to get text from an input field. 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
// step 3: get the password.
// 3.a: set id on the html element.
// 3.b: get the element.
// 3.c: get the value form the element.
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
// DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE.
// step 4: verify email and password.
    if(email == 'piash@disco.com' && password == 'piash'){
        window.location.href = 'bank.html';
    }
    else{
        alert("Email or Password don't match");
    }
})