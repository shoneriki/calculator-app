let value = ["0"];

const background = document.getElementById("background");
const theme1 = document.getElementById("toggle-1");
const theme2 = document.getElementById("toggle-2");
const theme3 = document.getElementById("toggle-3");

const display = document.getElementById("display");

const keys = Array.from(document.querySelectorAll(".keys"));

// document.body.addEventListener("click", (e) => {
//   let target = e.target;
//   if (e.target.id) {
//     key = document.querySelector(`#${e.target.id}`).textContent;
//   }

//   switch (target.id) {
//     case "9":
//     case "8":
//     case "7":
//     case "6":
//     case "5":
//     case "4":
//     case "3":
//     case "2":
//     case "1":
//     case "0":
//       if (value[0] == "0" && value.length === 1) {
//         value.pop();
//         value.push(key);
//       } else if (isNaN(last) === false) {
//         number = value.pop();
//         if (number = "0") {
//           value.push(key);
//         } else {
//           value.push(num + key);
//         }
//       } else {
//         value.push(key);
//       }
//       break;
//     case "dot"
//   }
// });

document.body.addEventListener("change", function(e) {
  let target = e.target;
  background = document.getElementById("background");

  switch (target.id) {
    case "toggle-1":
      console.log("first");
      background.setAttribute("data-theme", "one");

      break;
    case "toggle-2":
      alert("second");
      background.setAttribute("data-theme", "two")
    break
    case "toggle-3":
      alert("third");
      background.setAttribute("data-theme", "three")
      break
  }
})
