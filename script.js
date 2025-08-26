const navmenu = document.querySelector(".menu");
const navclose = document.querySelector(".close");
const navbar = document.querySelectorAll("li");

if (navmenu) {
  navmenu.addEventListener("click", () => {
    navmenu.style.display = "none";
    navbar.forEach((item) => {
      item.style.display = "flex";
    });
    if (navclose) navclose.style.display = "block";
  });
}

if (navclose) {
  navclose.addEventListener("click", () => {
    navclose.style.display = "none";
    navbar.forEach((item) => {
      item.style.display = "none";
    });
    if (navmenu) navmenu.style.display = "block";
  });
}

const github = document.querySelector(".git-btn");
const linkedin = document.querySelector(".lin-btn");

if (github) {
  github.addEventListener("click", () => {
    window.open("https://github.com/rohail332", "_blank");
  });
}

if (linkedin) {
  linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/muhammad-rohail-3457432b4/", "_blank");
  });
}

const projectone = document.querySelectorAll(".pro-1");
const projecttwo = document.querySelectorAll(".pro-2");
const projectthree = document.querySelectorAll(".pro-3");

projectone.forEach((el) => {
  el.addEventListener("click", () => {
    window.open("https://github.com/rohail332", "_blank");
  });
});

projecttwo.forEach((el) => {
  el.addEventListener("click", () => {
    window.open("https://github.com/rohail332", "_blank");
  });
});

projectthree.forEach((el) => {
  el.addEventListener("click", () => {
    window.open("https://github.com/rohail332", "_blank");
  });
});

const moreproject = document.querySelector(".more-project-btn");
if (moreproject) {
  moreproject.addEventListener("click", () => {
    window.open("https://github.com/rohail332?tab=repositories", "_blank");
  });
}

document.getElementById("contact").addEventListener("submit", function(e){
  alert("Form Submitted Successfully");
  this.reset();
});