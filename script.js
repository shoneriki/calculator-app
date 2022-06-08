
const background = document.getElementById("background");
const theme1 = document.getElementById("toggle-1");
const theme2 = document.getElementById("toggle-2");
const theme3 = document.getElementById("toggle-3");

const display = document.getElementById("display");

let value = ["0"];

const keys = Array.from(document.querySelectorAll(".keys"));

document.body.addEventListener("click", (e) =>
{
  let target = e.target;
  if (e.target.id) {
    key = document.querySelector(`#${e.target.id}`).textContent;
  }

  switch(target.id) {
    
  }

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
