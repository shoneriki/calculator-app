const background = document.getElementById("background");
const theme1 = document.getElementById("toggle-1");
const theme2 = document.getElementById("toggle-2");
const theme3 = document.getElementById("toggle-3");

const resetBtn = document.getElementById("resetBtn");
const equalsBtn = document.getElementById("equalsBtn");
const deleteBtn = document.getElementById("deleteBtn");
const decBtn = document.getElementById("dot");
const numBtns = document.querySelectorAll(".digits");
const operBtns = document.querySelectorAll(".operator");


theme1.addEventListener("click", function() {
  background.setAttribute("data-theme", "one")
})
theme2.addEventListener("click", function () {
  background.setAttribute("data-theme", "two");
});
theme3.addEventListener("click", function () {
  background.setAttribute("data-theme", "three");
});

// Global

//numbers to be stored in memory
let numArray = ['',''];
//operator + - * /
let operator = '';
//index to be used for numArray
let i = 0;

// inital starting value
display.innerText = '0';

// if there is no value, make it still display 0
// otherwise display whatever numArray[i] is
function updateDisplay() {
  if (numArray[i] === "") {
    display.innerText = "0";
  } else {
    display.innerText = numArray[i];
  }
}

// set numArray, operator and i to default values
// and update the display to 0
// set it to RESET button. Same as AC
function reset() {
  numArray = ['',''];
  operator = '';
  i = 0;
  updateDisplay();
}
resetBtn.addEventListener("click", reset);

// delete digits of "number" string with slice string method
// set said function up for deleteBtn
function backspace() {
  if(numArray[i].length > 0) {
    numArray[i] = numArray[i].slice(0,numArray[i].length-1);
    updateDisplay();
  }
}
deleteBtn.addEventListener("click", backspace)

// put number button's innerText into numArray[i] or display/screen
numBtns.forEach(numBtn => {
  numBtn.addEventListener("click", () => {
      numArray[i] += numBtn.innerText;
      updateDisplay();
  })
})

// if numArray[0] is not empty and not zero
  // display should show numArray[0]
operBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if(numArray[0] === '' && display.innerText !=='0') {
      numArray[0] = display.innerText;
    }
    // increment i
    i++;

    // for each operator button, add it's innerText
    // except for "X" as that innerText should be "*"
    switch (btn.innerText) {
      case "+":
      case "-":
      case "/":
        operator = btn.innerText;
        break
      case "x":
        operator = "*";
    }

    console.log('numArray: ', numArray, 'i:', i, 'operator: ', operator)
  })
})

// if decimal doesn't exist already, add decimal button
// add that to the decimal button
decBtn.addEventListener("click", function() {
  if (!numArray[i].includes(".")) {
    numArray[i] += decBtn.innerText;
  }
})

// if there is an empty value when the equals button is pressed
  // keep it at zero
// otherwise, evaluate the value based on what was stored in numArray and the operator
// set value to numArray[0]
// and update everything else to default and update the display to reflect numArray[0]
// updateDisplay should display numArray[0] or the value of the calculation
// set equals function to equals button
function equals() {
  if (numArray[i] ===''){
    display.innerText = '0';
  } else {
    let result = eval(numArray[0] + operator + numArray[1]);
    operator = '';
    numArray[1] = '';
    numArray[0] = result;
    i = 0;
    updateDisplay();
  }

}
equalsBtn.addEventListener("click", equals)
