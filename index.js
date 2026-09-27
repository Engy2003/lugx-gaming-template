const header = document.querySelector("header");
const nav = document.querySelector("nav");

const hamburger = document.createElement("div");
hamburger.className = "hamburger";

for (let i = 0; i < 3; i++) {
  const span = document.createElement("span");
  hamburger.appendChild(span);
}

header.insertBefore(hamburger, nav);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});
