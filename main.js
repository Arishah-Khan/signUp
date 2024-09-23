var userName = document.getElementsByClassName("userName")[0];
var email = document.getElementsByClassName("userEmail")[0];
var userPassword = document.getElementsByClassName("userPassword")[0];
var repeatPassword = document.getElementsByClassName("userRepeatPassword")[0];

var registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function() {
    
    var userNameValue = userName.value;
    var emailValue = email.value;
    var passwordValue = userPassword.value;

    // Pehle se stored users ko check karo
    var storedUsers = localStorage.getItem("users");

    var userArray;
    
    if (storedUsers) {
        // Agar local storage mein pehle se users hain, to unko parse karo
        userArray = JSON.parse(storedUsers);
    } else {
        // Agar koi user data nahi hai, to ek naya array create karo
        userArray = [];
    }

    // Naya user object array mein add karo
    userArray.push({
        username: userNameValue,
        email: emailValue,
        password: passwordValue
    });

    // Updated array ko local storage mein store karo
    localStorage.setItem("users", JSON.stringify(userArray));

    alert("Registration successful!");
});
