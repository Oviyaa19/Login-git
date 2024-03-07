function validate() {
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   if (email == "19oviya@gmail.com" && password == "12345678") {
      window.location.assign('nextpage.html')
      alert("Login Successful")
   }
   else {
      alert("Wrong entry Invalid User!!!")
   }
}

function toggle() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}