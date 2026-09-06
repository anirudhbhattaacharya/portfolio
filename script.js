const btn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
if (btn && links) {
  btn.addEventListener("click", () => links.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (nav) nav.classList.toggle("shrink", window.scrollY > 20);
});

function reveal() {
  document.querySelectorAll(".fade-in").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) el.classList.add("show");
  });
}

window.addEventListener("scroll", reveal, { passive: true });
window.addEventListener("load", reveal);
reveal();
setTimeout(reveal, 250);
setTimeout(reveal, 800);
