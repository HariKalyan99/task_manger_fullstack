let form = document.querySelector("#formSubmit");
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let email = document.querySelector("#email");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveUsers(userName.value, password.value, confirmPassword.value, email.value);
})

async function saveUsers(username, password, confirmPassword, email){
    console.log(username, password, confirmPassword, email)
    if(userName && password && confirmPassword && email){
        try {
            const res = await fetch('https://personal-task-manager-api-vu5e.onrender.com/api/v1/auth/signup', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password,
                confirmPassword,
                email
            })
        })
        const resJson = await res.json();
        console.log(resJson.status)
        if(resJson.status === "Success"){
            window.location.href = 'login.html'
        }
        }catch(err){
            console.log('Error', err);
        }
    }else {
        alert("Invalid username and password")
    }
}





