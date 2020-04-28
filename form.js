/*-Form Validation-*/
window.onload = function () {

    // form username
    var formName = document.getElementById("name");
    formName.addEventListener("blur", function () {
        var validname = ["user2033"];

        if (validname.includes(formName.value)) {
            formName.className = "valid-field";
        } else {
            formName.className = "invalid-field";
        }
    })

    // form password

    var formPassword = document.getElementById("password");
    formPassword.addEventListener("blur", function () {
        var validPassword = ["letmein"];

        if (validPassword.includes(formPassword.value)) {
            formPassword.className = "valid-field";
        } else {
            formPassword.className = "invalid-field";
        }
    })
}

// check 

function checkUser() {
    var loginDiv = document.getElementById("login")
    loginDiv.className = ""
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPasword = document.getElementById("confirmpassword").value;
    var submitButton = document.getElementById("myBtn1");
    if (submitButton.innerHTML === "Login") {
        if (name === "user2033" && password === "letmein") {
            alert("Welcome Back!");
        }
        else {
            //loginDiv.preventDefault;
            loginDiv.classList.remove("shakeNow");
            void loginDiv.offsetWidth
            loginDiv.classList.add("shakeNow");
        }
    }
    else {
        const username_regex = /^[A-Za-z0-9]{6,10}$/;
        const password_regex =  /^((?=.*\d)(?=.*[a-zA-Z])).{4,}$/;
        usernameOk =  username_regex.test(name)
        let m; 
        passwordOk = ((m = password_regex.exec(password)) !== null) 
        confirmPaswordOk = password === confirmPasword
        console.log('here')
        if (usernameOk && passwordOk && confirmPaswordOk){
            alert("Welcome Aboard!")
            
            document.getElementById("name").style.border = "2px solid green";
            document.getElementById("password").style.border = "2px solid green";
        
        }
        else {
            loginDiv.classList.remove("shakeNow");
            void loginDiv.offsetWidth
            loginDiv.classList.add("shakeNow");
            if (!usernameOk){
                document.getElementById("name").style.border = "2px solid red";
            }else{
                document.getElementById("name").style.border = "";
            };
            if (!passwordOk){
                document.getElementById("password").style.border = "2px solid red";
            }else{
                document.getElementById("name").style.border = "";
            };
            if (!confirmPaswordOk){
                document.getElementById("confirmpassword").style.border = "2px solid red";
            }else{
                document.getElementById("name").style.border = "";
            };
        }
    }
}


/*-end form VALIDATION-*/

function toggleRegistration() {
    var toggleButton = document.getElementById("toggle");
    var submitButton = document.getElementById("myBtn1");
    if (toggleButton.innerText == "No account? Register now.") {
        var registerDiv = document.getElementById("registration");
        registerDiv.style.display = "inline";
        toggleButton.innerText = "Already have an account? Login here.";
        submitButton.innerHTML = "Register"
    }
    else {
        var registerDiv = document.getElementById("registration");
        registerDiv.style.display = "none";
        toggleButton.innerText = "No account? Register now.";
        submitButton.innerHTML = "Login"
    }
}
