// Smooth Scroll for internal nav links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Back to top button (optional)
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑";
backToTopBtn.className = "btn btn-primary position-fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.display = "none";
backToTopBtn.style.zIndex = "999";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
