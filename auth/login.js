let formLogin = document.querySelector("#formSubmitLogin");
let emailLogin = document.querySelector("#emailLogin");
let passwordLogin = document.querySelector("#passwordLogin");


    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();
        if (
          emailLogin.value &&
          passwordLogin.value
        ) {
          
          loginUser(email = emailLogin.value, password = passwordLogin.value);
        } else {
          alert("Invalid username and password");
        }
      });
      
      function loginUser(email, password) {
        try {
          fetch("https://personal-task-manager-api-vu5e.onrender.com/api/v1/auth/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                password,
                email
            })
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user", JSON.stringify({user: data.user, token: data.token}));
            window.location.href = "mainpage.html";
          });
        }catch(err){
          console.log("Error", err);
        }
      }

