let form = document.querySelector("#formSubmit");
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveUsers(userName.value, password.value);
})

async function saveUsers(userName, passWord){
    if(userName === 'kminchelle' && passWord === '0lelplR'){
        try {
            const res = await fetch('https://dummyjson.com/auth/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: userName,
                password: passWord,
            })
        })
        const resJson = await res.json();
        localStorage.setItem('token', resJson.token)
        window.location.href = 'login.html'
        }catch(err){
            console.log('Error', err);
        }
    }else {
        alert("Invalid username and password")
    }
}





