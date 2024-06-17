document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
      "class",
      isOpen ? "ri-menu-line" : "ri-close-line"
    );
    if (isOpen) {
      navLinks.classList.add("close");
      navLinks.addEventListener(
        "animationend",
        () => {
          navLinks.classList.remove("open", "close");
        },
        { once: true }
      );
    } else {
      navLinks.classList.add("open");
    }
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  const languageToggle = document.getElementById("language-toggle");
  const languageDropdown = document.getElementById("language-dropdown");
  const arrowIcon = document.querySelector(".ri-arrow-down-s-line");

  languageToggle.addEventListener("click", () => {
    const isOpen = languageDropdown.style.display === "block";
    arrowIcon.classList.toggle("rotate", isOpen);
    languageDropdown.style.display = isOpen ? "none" : "block";
  });

  const languageOptions = document.querySelectorAll(".language-option");

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const language = option.getAttribute("id").split("-")[0];
      // Redirect to the desired page based on the selected language
      if (language === "id") {
        window.location.href = "id_page.html"; // Change "id_page.html" to the desired Indonesian page URL
      } else if (language === "en") {
        window.location.href = "en_page.html"; // Change "en_page.html" to the desired English page URL
      }
    });
  });

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__container .section__subheader", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".header__container .section__header__utama", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__container .scroll__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__container .header__socials", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1500,
  });

  ScrollReveal().reveal(".about__image-1, .about__image-3", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".about__image-2", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".about__content p", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".about__content .about__btn", {
    ...scrollRevealOption,
    delay: 2000,
  });

  document.querySelector(".header-icon").addEventListener("click", () => {
    const headerInput = document.querySelector(".header-input");
    headerInput.classList.toggle("active");
    document.querySelector(".close-icon").style.display =
      headerInput.classList.contains("active") ? "block" : "none";
  });

  document.querySelector(".close-icon").addEventListener("click", () => {
    const headerInput = document.querySelector(".header-input");
    headerInput.classList.remove("active");
    document.querySelector(".close-icon").style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("language-toggle");
  const arrowIcon = document.querySelector(".arrow-icon");

  languageToggle.addEventListener("change", function () {
    arrowIcon.classList.toggle("rotate", languageToggle.checked);
  });
});
const soundControl = document.getElementById("sound-control");
const soundIcon = document.getElementById("sound-icon");
const video = document.querySelector("video");

// Mute video secara default saat halaman dimuat
video.muted = true;
soundIcon.classList.remove("ri-volume-up-line");
soundIcon.classList.add("ri-volume-mute-line");

soundControl.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    soundIcon.classList.remove("ri-volume-mute-line");
    soundIcon.classList.add("ri-volume-up-line");
  } else {
    video.muted = true;
    soundIcon.classList.remove("ri-volume-up-line");
    soundIcon.classList.add("ri-volume-mute-line");
  }
});
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
