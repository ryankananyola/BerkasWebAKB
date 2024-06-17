const thumbnailsSwiper = new Swiper(".home__thumbnails", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  effect: "carousel",
  allowTouchMove: false,
  autoplay: {
    delay: 50, // Sesuaikan dengan kebutuhan Anda
    disableOnInteraction: false,
  },
  breakpoints: {
    // Sesuaikan breakpoints jika diperlukan
  },
});

// Hentikan autoplay saat hover
thumbnailsSwiper.el.addEventListener("mouseover", function () {
  thumbnailsSwiper.autoplay.stop();
});

// Lanjutkan autoplay setelah tidak dihover
thumbnailsSwiper.el.addEventListener("mouseout", function () {
  thumbnailsSwiper.autoplay.start();
});

thumbnailsSwiper.on("slideChange", () => {
  let realIndex = thumbnailsSwiper.realIndex,
    prevRealIndex = thumbnailsSwiper.previousRealIndex;
  document
    .querySelectorAll(".home__slide")
    [prevRealIndex].classList.remove("active");
  document.querySelectorAll(".home__slide")[realIndex].classList.add("active");
});
document.getElementById("exploreButton").addEventListener("click", function () {
  const aboutSection = document.getElementById("about1");
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("night-mode");
});

// Optional: Update icon visibility based on mode
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

modeToggle.addEventListener("click", () => {
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
});
