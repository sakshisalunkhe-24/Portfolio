// Typing Effect
const typingElement = document.getElementById("typing");
const roles = ["Web Developer"];
let roleIndex = 0;
let charIndex = 0;
let typingForward = true;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (typingForward) {
    typingElement.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      typingForward = false;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      typingForward = true;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, typingForward ? 150 : 100);
}
typeEffect();



// Portfolio Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".portfolio-item img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});



// Back to Top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



// Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  localStorage.setItem("darkMode", body.classList.contains("dark"));
});

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}



// ✅ Scroll-Spy for Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // offset for sticky header
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

});
