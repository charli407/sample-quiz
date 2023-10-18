document.getElementById('form').addEventListener("submit",function(e){
    e.preventDefault();
    const q1=document.querySelector('.email').value
    const q2=document.querySelector('.password').value
    localStorage.setItem("user1",JSON.stringify(q1))
    localStorage.setItem("pass1",JSON.stringify(q2))
    window.location.href="login.html"
  
})
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}