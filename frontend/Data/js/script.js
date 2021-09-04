// Navbar Variables
const toggleMenuBtn = document.querySelector(".nav-toggler");
const navItemList = document.querySelector(".nav-items");
const onScrollNavFixed = document.querySelector(".onScrollNavFixed");
const mainNav = document.querySelector(".main-nav");
const navIconsAccounts = document.querySelector(".accounts");
const navIconsAccount = document.querySelector(".account");
const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search i");

const main = document.querySelector("main");

// Crousels Varialbes
const crouselNextBtn = document.querySelector(".crousel--right--btn");
const crouselPrevBtn = document.querySelector(".crousel--left--btn");
const crousels = document.querySelectorAll(".crousel");
const crouselDotContainer = document.querySelector(".crousel-dots-container");
let currentCrousel = 0;
let crouselLength = crousels.length;

// Footer Variables
const footerYear = document.querySelector(".footer-date");

// Navbar Toggle
toggleMenuBtn.addEventListener("click", () => {
  navItemList.classList.toggle("nav-active");
});

window.onscroll = function () {
  navItemList.classList.remove("nav-active");
};

main.addEventListener("click", () => {
  navItemList.classList.remove("nav-active");
  navIconsAccount.classList.add("account-hidden");
  searchBar.classList.add("search-bar-hidden");
});

// On Scroll Nav fixed
const navFixedObs = (entries) => {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    mainNav.classList.add("nav-fixed");
  } else {
    mainNav.classList.remove("nav-fixed");
  }
};

const navFixedObserver = new IntersectionObserver(navFixedObs, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});

onScrollNavFixed && navFixedObserver.observe(onScrollNavFixed);

navIconsAccounts.addEventListener("click", () =>
  navIconsAccount.classList.toggle("account-hidden")
);

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("search-bar-hidden");
});

// Crousel
crousels.forEach((_, idx) => {
  crouselDotContainer.insertAdjacentHTML(
    "afterbegin",
    `
      <span class="crousel--dot" data-slide="${idx}"></span>
      `
  );
});

const activeDot = (slide) => {
  document.querySelectorAll(".crousel--dot").forEach((dot) => {
    dot.classList.remove("dot--active");
  });

  document
    .querySelector(`.crousel--dot[data-slide="${slide}"]`)
    .classList.add("dot--active");
};

const goToCrousel = (slide) => {
  crousels.forEach((crousel, idx) => {
    crousel.style.transform = `translateX(${100 * (idx - slide)}%)`;
  });
};

goToCrousel(0);

const goToNextCrousel = () => {
  if (currentCrousel === crouselLength - 1) {
    currentCrousel = 0;
  } else {
    currentCrousel++;
  }
  goToCrousel(currentCrousel);
  crouselDotContainer && activeDot(currentCrousel);
};

const goToPrevCrousel = () => {
  if (currentCrousel === 0) {
    currentCrousel = crouselLength - 1;
  } else {
    currentCrousel--;
  }
  goToCrousel(currentCrousel);
  crouselDotContainer && activeDot(currentCrousel);
};

crouselNextBtn && crouselNextBtn.addEventListener("click", goToNextCrousel);
crouselPrevBtn && crouselPrevBtn.addEventListener("click", goToPrevCrousel);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    goToNextCrousel();
  } else if (e.key === "ArrowLeft") {
    goToPrevCrousel();
  }
});

setInterval(goToNextCrousel, 10000);

// Footer
const dateFooter = new Date().getFullYear();
footerYear.textContent = dateFooter;
