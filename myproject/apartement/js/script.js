const navbar = document.querySelector(".nav-link");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

// document.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !navbar.contains(e.target)) {
//     navbar.classList.remove("active");
//   }
// });
