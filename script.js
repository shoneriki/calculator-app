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

const addBtn = document.getElementById("addBtn")

// global

//numbers to be  stored in memory
let numArray = ['',''];
//operator + - * /
let operator = '';
//index to be used for numArray
let index = 0;

display.innerText = '0';

function reset() {
  numArray = ['',''];
  operator = '';
  index = 0;
  updateDisplay();
}


function updateDisplay() {
  if(numArray[index] === '') {
    display.innerText = '0';
  } else {
    display.innerText = numArray[index];
  }
}

resetBtn.addEventListener('click', reset);
numBtns.forEach(numBtn => {
  numBtn.addEventListener("click", () => {
    console.log("button clicked")
    // const regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    // if (regex.test(numArray[id]+numBtn.innerText)) {
    // }
      numArray[index] += numBtn.innerText;
      updateDisplay();
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
