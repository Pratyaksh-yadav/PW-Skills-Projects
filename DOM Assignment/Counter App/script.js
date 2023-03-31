const decrementbtn = document.getElementById("decrementbtn");
const displayValue = document.getElementById("displayValue");
const incrementbtn = document.getElementById("incrementbtn");
const resetBtn = document.getElementById("resetBtn");

/* For Decrement Value */

decrementbtn.addEventListener("click" , () => {
    const value = Number(displayValue.innerText);
    if (value>0) {
        displayValue.innerText = value-1;
    }
    else {
        alert("Negeative value not allowed");
    }
});

/* For Increment Value */

incrementbtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value>=10) {
        alert("10+ Value not allowed");
    }
    else {
        displayValue.innerText = value+1;
    }
});

/* For Reset Button */

resetBtn.addEventListener("click" , () => {
    displayValue.innerText = 0;
})





