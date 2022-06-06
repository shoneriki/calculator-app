const theme1 = document.getElementById("theme-1")
const theme2 = document.getElementById("theme-2");
const theme3 = document.getElementById("theme-3")
const background = document.getElementById("background");


theme1.addEventListener("click", function() {
  if ((theme1.checked)) {
    background.classList.remove("two");
    background.classList.remove("three")
    background.classList.add("one");
  }
})

theme2.addEventListener("click", function() {
  if ((theme2.checked)) {
    background.classList.remove("one");
    background.classList.remove("three")
    background.classList.add("two");
  }
})

theme3.addEventListener("click", function() {
  if ((theme3.checked)) {
    background.classList.remove("one")
    background.classList.remove("two")
    background.classList.add("three")
  }
})
