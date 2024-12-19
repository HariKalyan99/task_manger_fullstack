let formLogin = document.querySelector("#formSubmitLogin");
let userNameLogin = document.querySelector("#usernameLogin");
let passwordLogin = document.querySelector("#passwordLogin");

let token = localStorage.getItem("token");
if(token){
    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();
        if (
          userNameLogin.value === "kminchelle" &&
          passwordLogin.value === "0lelplR"
        ) {
          
          loginUser(token);
        } else {
          alert("Invalid username and password");
        }
      });
      
      function loginUser(token) {
        try {
          fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("username", data.firstName);
            window.location.href = "mainpage.html";
          });
        }catch(err){
          console.log("Error", err);
        }
      }
}else {
    document.querySelector('#errorFeed').innerText = "You don't have access for this page"
}

