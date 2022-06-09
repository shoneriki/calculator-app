const background = document.getElementById("background");
const theme1 = document.getElementById("toggle-1");
const theme2 = document.getElementById("toggle-2");
const theme3 = document.getElementById("toggle-3");

const resetBtn = document.getElementById("resetBtn");
const equalsBtn = document.getElementById("equalsBtn");
const deleteBtn = document.getElementById("deleteBtn");

display.textContent =  0;


theme1.addEventListener("click", function() {
  background.setAttribute("data-theme", "one")
})
theme2.addEventListener("click", function () {
  background.setAttribute("data-theme", "two");
});
theme3.addEventListener("click", function () {
  background.setAttribute("data-theme", "three");
});
