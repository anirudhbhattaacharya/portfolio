const btn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
if (btn) btn.addEventListener("click", () => links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => links.classList.remove("open"));
});

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("shrink", window.scrollY > 24);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: 0.12 });
document.querySelectorAll(".fade").forEach(el => io.observe(el));

document.querySelectorAll(".hero .fade").forEach(el => el.classList.add("show"));
