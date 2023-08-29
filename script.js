const display = document.querySelector(".display");
const btns = document.querySelectorAll("button");
const specialCharacters = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculation = (buttonValue) => {
    if (buttonValue === "=" && output !== "") {
        output = parseFloat(eval(output.replace("%", "/100"))); 
    } else if (buttonValue === "AC") {
        output = "";
    } else if (buttonValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialCharacters.includes(buttonValue)) return;
        output += buttonValue;
    }
    display.value = output;
};

btns.forEach((button) => {
    button.addEventListener("click", (e) => calculation(e.target.dataset.value));
});




