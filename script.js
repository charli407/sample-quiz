document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const q1 = document.querySelector('.q1:checked').value;
    const q2 = document.querySelector('.q2:checked').value;
    const q3 = document.querySelector('.q3:checked').value;
    const q4 = document.querySelector('.q4:checked').value;
    const q5 = document.querySelector('.q5:checked').value;
    window.location.href="answers.html";
    localStorage.setItem("lq1",JSON.stringify(q1))
    localStorage.setItem("lq2",JSON.stringify(q2))
    localStorage.setItem("lq3",JSON.stringify(q3))
    localStorage.setItem("lq4",JSON.stringify(q4))
    localStorage.setItem("lq5",JSON.stringify(q5))
    
  });