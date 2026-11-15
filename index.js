const numberInput = document.querySelector("#number-input");
const calculateBtn = document.querySelector(".calculate-btn");
const numberError = document.querySelector("#number-error");
const evenOdd = document.querySelector("#even-odd");
const squareValue = document.querySelector("#square");
const cubeValue = document.querySelector("#cube");
const squareRoot = document.querySelector("#square-root");
const absoluteValue = document.querySelector("#absolute-value");
const roundedDown = document.querySelector("#rounded-down");
const roundedUp = document.querySelector("#rounded-up");
const roundedValue = document.querySelector("#rounded");

calculateBtn.addEventListener("click", function() {
    const number = Number(numberInput.value);

    let isValid = true;
    if(numberInput.value === "") {
        numberInput.classList.add("input-error");
        numberError.textContent = "Please enter a number."
        isValid = false;
    } else {
        numberInput.classList.remove("input-error");
        numberError.textContent = "";
    }
    if(isValid === false) {
        return;
    }

    if(!Number.isInteger(number)) {
        evenOdd.textContent = "Not an integer.";
    } else if(number % 2 === 0) {
        evenOdd.textContent = `${number} is even mumber.`;
    }  else  {
        evenOdd.textContent = `${number} is odd number.`;
    }

    let square = number ** 2;
    squareValue.textContent = `${square.toFixed(4)}`;
    
    let cube = number ** 3 ;
    cubeValue.textContent = `${cube.toFixed(4)}`;

    let root = Math.sqrt(number);
    squareRoot.textContent = `${root.toFixed(4)}`;

    let absolute = Math.abs(number);
    absoluteValue.textContent = `${absolute}`;

    let downRounded = Math.floor(number);
    roundedDown.textContent = `${downRounded}`;

    let upRounded = Math.ceil(number);
    roundedUp.textContent = `${upRounded}`;

    let valueRounded = Math.round(number);
    roundedValue.textContent = `${valueRounded}`;
});

numberInput.addEventListener("input", function() {
    numberInput.classList.remove("input-error");
    numberError.textContent = "";
    evenOdd.textContent = "-";
    squareValue.textContent = "-";
    cubeValue.textContent = "-";
    squareRoot.textContent = "-";
    absoluteValue.textContent = "-";
    roundedDown.textContent = "-";
    roundedUp.textContent = "-";
    roundedValue.textContent = "-";
})