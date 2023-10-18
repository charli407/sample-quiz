document.addEventListener('DOMContentLoaded', function() {
    const lsq1 = localStorage.getItem("lq1");
    const lsq2 = localStorage.getItem("lq2");
    const lsq3 = localStorage.getItem("lq3");
    const lsq4 = localStorage.getItem("lq4");
    const lsq5 = localStorage.getItem("lq5");

    const sq1 = JSON.parse(lsq1);
    const sq2 = JSON.parse(lsq2);
    const sq3 = JSON.parse(lsq3);
    const sq4 = JSON.parse(lsq4);
    const sq5 = JSON.parse(lsq5);

    function setCheckedValue(question, value, crct) {
        const radioButtons = document.querySelectorAll(`input[name=q${question}]`);
        radioButtons.forEach(radioButton => {
            if (radioButton.value === value) {
                radioButton.checked = true;
                if(!crct)
                {
                radioButton.nextElementSibling.style.color="red"
                radioButton.nextElementSibling.style.fontWeight="700"
                }
            }
        });
    }
    
    setCheckedValue(1, sq1, sq1 === "8");
    setCheckedValue(2, sq2, sq2 === "green");
    setCheckedValue(3, sq3, sq3 === "8");
    setCheckedValue(4, sq4, sq4 === "Clown Fish");
    setCheckedValue(5, sq5, sq5 === "Yellow");
});
