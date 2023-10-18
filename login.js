const ls1=localStorage.getItem("user1");
const ls2=localStorage.getItem("pass1");
const s1=JSON.parse(ls1);
const s2=JSON.parse(ls2)
const user=["sanjaykanagarajan@gmail.com","sanjayk@gmail.com","alpha@gmail.com"];
const password=["sanjay","alpha","beta123"];
if (s1 !== null && s2 !== null) {
    user.push(s1);
    password.push(s2);
}
document.getElementById('form').addEventListener("submit",function(e){
    e.preventDefault();
    const q1=document.querySelector('.email').value;
    const q2=document.querySelector('.password').value;
    if(q1=="")
        alert("Please enter the email");
    else if(q2=="")
        alert("please enter the password");
    else if(user.includes(q1)===false)
    {
        document.getElementById('err1').innerHTML="The Email is not present in database";
    }
    else if(password.includes(q2)===false)
    {
       document.getElementById('err2').innerHTML="The password is wrong";
    }
    else{
    if(user.includes(q1)&&password.includes(q2))
    {
        const n1= user.indexOf(q1);
        const n2= password.indexOf(q2);
        if(n1===n2)
             window.location.href="1.html";
    }
    else
        document.getElementById('msg').innerHTML="THE CREDENTIALS ARE WRONG!!!";
    }
})
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}