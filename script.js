
const background = document.getElementById("background");
const theme1 = document.getElementById("toggle-1");
const theme2 = document.getElementById("toggle-2");
const theme3 = document.getElementById("toggle-3");

const display = document.getElementById("display");

const keys = Array.from(document.querySelectorAll(".keys"));

keys.map( key => {
  key.addEventListener("click", (e) => {
    switch(e.target.innerText) {
      case 'RESET':
        display.innerText = '';
        break
      case 'DEL':
        display.innerText = display.innerText.slice(0,-1);
        break
      default:
        display.innerText += e.target.innerText;
    }
  })
})



theme1.addEventListener("click", function() {
  if ((theme1.checked)) {
    background.setAttribute("data-theme", "one");
  }
})

theme2.addEventListener("click", function() {
  if ((theme2.checked)) {
    background.setAttribute("data-theme", "two");
  }
})

theme3.addEventListener("click", function() {
  if ((theme3.checked)) {
    background.setAttribute("data-theme", "three");
  }
})
