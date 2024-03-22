const wrapper = document.querySelector(".wrapper");
const main = document.querySelector("main");

const cursorSmall = document.querySelector(".cursor-small");
const cursorLarge = document.querySelector(".cursor-large");

const headerHome = document.getElementById("header-home");
const nav = document.getElementById("nav");
const aboutBtnIndex = document.getElementById("about-btn__index");
const contactBtnIndex = document.getElementById("contact-btn__index");

// About
const aboutPage = document.querySelector(".about-page");
const aboutBtn = document.querySelector(".about-btn");

const homeBtnAbout = document.getElementById("home-btn-about");
const contactBtnAbout = document.getElementById("contact-btn-about");

// Contact
const contactPage = document.querySelector(".contact-page");
const contactBtn = document.querySelector(".contact-btn");

const homeBtnContact = document.getElementById("home-btn-contact");
const aboutBtnContact = document.getElementById("about-btn-contact");

let aboutVisited = false;
let contactVisited = false;

window.scrollTo(0, 0);

// custom cursor
const positionElement = (e) => {
  document.body.style.cursor = "none";
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorSmall.style.left = mouseX + "px";
  cursorSmall.style.top = mouseY + "px";
  cursorLarge.style.left = mouseX - 6 + "px";
  cursorLarge.style.top = mouseY - 6 + "px";

  cursorSmall.style.zIndex = "1";
};

window.addEventListener("mousemove", positionElement);
if (window.innerWidth < 600) {
  cursorSmall.style.display = "none";
  cursorLarge.style.display = "none";
}
const links = document.querySelectorAll("a, button");
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursorSmall.style.opacity = ".25";
    cursorLarge.style.opacity = ".05";
    cursorSmall.style.backgroundColor = "#453b39";
  });
  link.addEventListener("mouseout", () => {
    cursorSmall.style.opacity = ".5";
    cursorLarge.style.opacity = ".1";
    cursorSmall.style.backgroundColor = "#171516";
  });
});

// Parallax
if (window.innerWidth > 600) {
  window.addEventListener("scroll", function () {
    const parallaxElements = document.querySelectorAll(".parallax");
    const scrollPosition = window.scrollY;

    parallaxElements.forEach(function (element) {
      const speed = parseFloat(element.getAttribute("data-speed"));
      const translateY = scrollPosition * speed;
      element.style.transform = `translateY(${translateY}px)`;
    });
  });
}

// Home
new TypeIt("#header-home", {
  speed: 0, // 40
  startDelay: 0, // 400
  afterComplete: async () => {
    headerHome.style.marginTop = "-5vh";
    nav.style.marginTop = "5vh";
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
  },
})
  .type("<strong>Felix Groot</strong>", {
    speed: 100,
  })
  .pause(0) // 400
  .go();

// Create about
aboutBtnIndex.addEventListener("click", () => {
  createAbout();
});

function createAbout() {
  main.style.opacity = "0";
  main.style.visibility = "hidden";
  setTimeout(() => {
    main.style.display = "none";
    document.body.style.backgroundColor = "#dac6bd";
    aboutPage.style.display = "flex";
    document.body.style.overflow = "visible";
    wrapper.style.paddingTop = "10vh";
    if (aboutVisited === false) {
      new TypeIt("#header-about", {
        speed: 120,
        startDelay: 200,
      })
        .type("About")
        .go();
      aboutVisited = true;
    }
    setTimeout(() => {
      aboutPage.style.visibility = "visible";
      aboutPage.style.opacity = "1";
    }, 50);
  }, 500);
}

// Create contact
contactBtnIndex.addEventListener("click", () => {
  createContact();
});

function createContact() {
  main.style.opacity = "0";
  main.style.visibility = "hidden";
  setTimeout(() => {
    main.style.display = "none";
    document.body.style.backgroundColor = "#dac6bd";
    contactPage.style.display = "flex";
    document.body.style.overflow = "visible";
    wrapper.style.paddingTop = "10vh";
    if (contactVisited === false) {
      new TypeIt("#header-contact", {
        speed: 120,
        startDelay: 200,
      })
        .type("Contact")
        .go();
      contactVisited = true;
    }
    setTimeout(() => {
      contactPage.style.visibility = "visible";
      contactPage.style.opacity = "1";
    }, 50);
  }, 500);
}

// Visit home
homeBtnAbout.addEventListener("click", () => {
  visitHome();
});

// Visit home
homeBtnContact.addEventListener("click", () => {
  visitHome();
});

function visitHome() {
  document.body.style.overflow = "hidden";
  aboutPage.style.opacity = "0";
  aboutPage.style.visibility = "hidden";
  contactPage.style.opacity = "0";
  contactPage.style.visibility = "hidden";
  setTimeout(() => {
    main.style.display = "flex";
    window.scrollTo(0, 0);
    aboutPage.style.display = "none";
    contactPage.style.display = "none";
    document.body.style.backgroundColor = "#f5edea";
    main.style.opacity = "1";
    main.style.visibility = "visible";
    wrapper.style.paddingTop = "35vh";
  }, 500);
}

// Visit about
aboutBtnContact.addEventListener("click", () => {
  visitAbout();
});

function visitAbout() {
  document.body.style.overflow = "hidden";
  contactPage.style.opacity = "0";
  contactPage.style.visibility = "hidden";
  if (aboutVisited === false) {
    new TypeIt("#header-about", {
      speed: 120,
      startDelay: 200,
    })
      .type("About")
      .go();
    aboutVisited = true;
  }
  setTimeout(() => {
    aboutPage.style.display = "flex";
    window.scrollTo(0, 0);
    contactPage.style.display = "none";
    document.body.style.backgroundColor = "#dac6bd";
    aboutPage.style.opacity = "1";
    aboutPage.style.visibility = "visible";
    wrapper.style.paddingTop = "10vh";
    document.body.style.overflow = "auto";
  }, 500);
}

// Visit contact
contactBtnAbout.addEventListener("click", () => {
  visitContact();
});

function visitContact() {
  document.body.style.overflow = "hidden";
  aboutPage.style.opacity = "0";
  aboutPage.style.visibility = "hidden";
  if (contactVisited === false) {
    new TypeIt("#header-contact", {
      speed: 120,
      startDelay: 200,
    })
      .type("Contact")
      .go();
    contactVisited = true;
  }
  setTimeout(() => {
    contactPage.style.display = "flex";
    window.scrollTo(0, 0);
    aboutPage.style.display = "none";
    document.body.style.backgroundColor = "#dac6bd";
    contactPage.style.opacity = "1";
    contactPage.style.visibility = "visible";
    wrapper.style.paddingTop = "10vh";
    document.body.style.overflow = "auto";
  }, 500);
}
