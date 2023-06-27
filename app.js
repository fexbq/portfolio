const wrapper = document.querySelector(".wrapper");
const main = document.querySelector("main");
const headerHome = document.getElementById("header-home");
const nav = document.getElementById("nav");
const aboutPage = document.querySelector(".about-page");
const aboutBtn = document.getElementById("about-btn");
const homeBtn = document.querySelector(".home-btn");

let aboutVisited = false;

window.scrollTo(0, 0);

// Parallax
window.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax");
  const scrollPosition = window.scrollY;

  parallaxElements.forEach(function (element) {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const translateY = scrollPosition * speed;
    element.style.transform = `translateY(${translateY}px)`;
  });
});

// Home
new TypeIt("#header-home", {
  speed: 0, // 60
  startDelay: 0, // 800
  afterComplete: async () => {
    headerHome.style.marginTop = "-5vh";
    nav.style.marginTop = "5vh";
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
  },
})
  .type("I'm a developer.", { delay: 0 }) // 1000
  .delete(10, { delay: 0 }) // 250
  .type("designer.", { delay: 0 }) // 900
  .delete(11, { delay: 0 }) // 600
  .type("<strong>Felix Nagy</strong>", {
    speed: 100,
  })
  .pause(0) // 400
  .type(".", { delay: 0 }) // 100
  .go();

// About
aboutBtn.addEventListener("click", () => {
  createAbout();
});

function createAbout() {
  main.style.opacity = "0";
  main.style.visibility = "hidden";
  setTimeout(() => {
    main.style.display = "none";
    aboutPage.style.display = "flex";
    document.body.style.overflow = "visible";
    wrapper.style.marginTop = "10vh";
    if (aboutVisited === false) {
      new TypeIt("#header-about", {
        speed: 120,
        startDelay: 80,
      })
        .type("About", { delay: 300 })
        .type(".")
        .go();
      aboutVisited = true;
    }
    setTimeout(() => {
      aboutPage.style.visibility = "visible";
      aboutPage.style.opacity = "1";
    }, 50);

    homeBtn.addEventListener("click", () => {
      homePressed();
    });
  }, 500);
}

function homePressed() {
  document.body.style.overflow = "hidden";
  aboutPage.style.opacity = "0";
  aboutPage.style.visibility = "hidden";
  setTimeout(() => {
    main.style.display = "flex";
    window.scrollTo(0, 0);
    aboutPage.style.display = "none";
    main.style.opacity = "1";
    main.style.visibility = "visible";
    wrapper.style.marginTop = "35vh";
  }, 500);
}

// TODO: MAKE WIDTH OF TEXT NEXT TO ABOUT IMG SMALLER WHEN ON MOBILE
