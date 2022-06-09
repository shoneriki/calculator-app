const background = document.getElementById("background");
const theme1 = document.getElementById("toggle-1");
const theme2 = document.getElementById("toggle-2");
const theme3 = document.getElementById("toggle-3");

const resetBtn = document.getElementById("resetBtn");
const equalsBtn = document.getElementById("equalsBtn");
const deleteBtn = document.getElementById("deleteBtn");



theme1.addEventListener("click", function() {
  background.setAttribute("data-theme", "one")
})
theme2.addEventListener("click", function () {
  background.setAttribute("data-theme", "two");
});
theme3.addEventListener("click", function () {
  background.setAttribute("data-theme", "three");
});

const numBtns = document.querySelectorAll(".digits");
const operBtns = document.querySelectorAll(".operator")

// Global

//numbers to be  stored in memory
let numArray = ['',''];
//operator + - * /
let operator = '';
//index to be used for numArray
let i = 0;

display.innerText = '0';

function updateDisplay() {
  if (numArray[i] === "") {
    display.innerText = "0";
  } else {
    display.innerText = numArray[i];
  }
}

function reset() {
  numArray = [];
  operator = '';
  i = 0;
  updateDisplay();
}
resetBtn.addEventListener("click", reset);

numBtns.forEach(numBtn => {
  numBtn.addEventListener("click", () => {
    // const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    // if (regex.test(numArray[id]+numBtn.innerText)) {
    // }
      numArray[i] += numBtn.innerText;
      updateDisplay();
  })
})

function backspace() {
  if(numArray[i].length > 0) {
    numArray[i] = numArray[i].slice(0,numArray[i].length-1);
    updateDisplay();
  }
}
deleteBtn.addEventListener("click", backspace)

operBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if(numArray[0] === '' && display.innerText !=='0') {
      numArray[0] = display.innerText;
    }

    i++;

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


// numBtns.forEach(numBtn => {
//   numBtn.addEventListener("click", () => {
//     if(display.textContent == 0) {
//       display.textContent =  "";
//     }
//     let value =  parseInt(num.textContent);
//     display.textContent += value;
//   })
// })
// resetBtn.addEventListener("click", () => {
//   display.textContent = 0;
// })
// deleteBtn.addEventListener("click", () => {

//   let value =  display.textContent.slice(0,-1);
//   if (value === "") {value = 0};
//   display.textContent = value;
// })
