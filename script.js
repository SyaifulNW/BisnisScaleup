AOS.init({
  duration: 800,
  once: true
});


  const menuToggle = document.querySelector("#mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });