const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const rememberMe = document.getElementById("rememberMe");
const form = document.getElementById("form1");
const userError = document.getElementById("user-errormessage");
const passError = document.getElementById("pass-errormessage");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        
        userError.textContent = "";
        passError.textContent = "";

        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        let valid = true;

        if (usernameValue === ""){
            userError.textContent = "Please enter your name.";
            valid = false;
            userError.style.display = "block";
            userError.style.color = "red";
        }else if(usernameValue.length <= 5){
            userError.textContent = "Name must be longer than 5 characters.";
            valid = false;
            userError.style.display = "block";
            userError.style.color = "red";
        }else if(usernameValue.length > 20){
            userError.textContent = "Name cannot be longer than 20 characters.";
            valid = false;
            userError.style.display = "block";
            userError.style.color = "red";
        }

        if(passwordValue == ""){
            passError.textContent = "password cannot be empty!";
            valid = false;
            passError.style.display = "block";
            passError.style.color = "red";
        }else if(passwordValue.length <= 5){
            passError.textContent = "Password cannot be less than 5 characters!";
            passError.style.display = "block";
            valid = false;
            passError.style.color = "red";
        }else if (!/[A-Z]/.test(passwordValue)){
            passError.textContent = "password must have at least one uppercase";
            passError.style.display = "block";
            valid = false;
            passError.style.color = "red";
        }else if(!/[a-z]/.test(passwordValue)){
            passError.textContent = "password must contain at least one lowercase character.";
            passError.style.display = "block";
            valid = false;
            passError.style.color = "red";
        }else if (!/[0-9]/.test(passwordValue)){
            passError.textContent = "password must contain at least one number.";
            passError.style.display = "block";
            passError.style.color = "red";
            valid = false
        }else if(!/[!@#$%^&*]/.test(passwordValue)){
            passError.textContent = "password must contain at least one special character.";
            passError.style.display = "block";
            passError.style.color = "red";
            valid = false ;
        }

        if (valid){
            alert("submitted successfully!")
        }
    })
};
/*const resetPass = document.getElementById("passwordReset");*/
const passCheck = document.querySelector(".bx-eye-closed");

if(passCheck){
    passCheck.addEventListener("click", () => {
        const isPassword = password.getAttribute("type") === "password";
        password.setAttribute("type", isPassword ? "text" : "password");
        passCheck.classList.toggle("bx-eye");
        passCheck.classList.toggle("bx-eye-closed");
    })
};