"use strict";

const topSect = document.querySelector(".top-section");
const navMenu = document.querySelector(".navigate");

document.querySelector(".nav-menu").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-menu_link")) {
    const destination = e.target.getAttribute("href");
    document.querySelector(destination).scrollIntoView({ behavior: "smooth" });
  }
});

function addBack(entr) {
  if (entr[0].intersectionRatio <= 0.9 && entr[0].isIntersecting) {
    navMenu.classList.add("nav-menu__item_set-transpr-back");
  } else {
    navMenu.classList.remove("nav-menu__item_set-transpr-back");
  }
}

const topSectObserver = new IntersectionObserver(addBack, {
  threshold: [0.9, 0],
});
topSectObserver.observe(topSect);
