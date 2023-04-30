const nav = document.querySelector(".nav-link");
const navbar = document.getElementsByTagName("nav")[0];
// scroll navbar
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 1) {
    navbar.classList.add("nice");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.remove("nice");
  }
});
// sidebar
document.querySelector("#menu").onclick = () => {
  nav.classList.toggle("active");
};

// var swiper = new Swiper(".bot-hero", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     "@0.00": {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     "@0.75": {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     "@1.00": {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     "@1.50": {
//       slidesPerView: 4,
//       spaceBetween: 50,
//     },
//   },
// });
