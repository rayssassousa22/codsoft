let cursor = document.getElementById("cursor");
let close = document.getElementById("close");
let body = document.body;
let iframe = document.getElementById("pen");
let penLink = document.getElementById("penlink");
let links = document.getElementsByTagName("a");

// Handle hover and click events on cards
let cards = document.getElementsByClassName("inner");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mousemove", function (event) {
    cursor.classList.add("active");
    updateCursorPosition(event);
  });

  cards[i].addEventListener("mouseover", function (event) {
    cursor.classList.add("active");
  });

  cards[i].addEventListener("mouseout", function (event) {
    cursor.classList.remove("active");
  });
}

// Handle hover events for social links
for (let link of links) {
  link.addEventListener("mouseover", function (event) {
    cursor.classList.add("linkhover");
    updateCursorPosition(event);
  });

  link.addEventListener("mousemove", function (event) {
    cursor.classList.add("linkhover");
    updateCursorPosition(event);
  });

  link.addEventListener("mouseout", function (event) {
    cursor.classList.remove("linkhover");
  });
}

// Escape key to exit active state
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.key === "Escape" || evt.key === "Esc" || evt.keyCode === 27) {
    body.classList.remove("active");
    setTimeout(() => {
      iframe.setAttribute("src", "");
    }, 2000);
  }
};

// Close button click event
close.addEventListener("click", function (event) {
  body.classList.remove("active");
  setTimeout(() => {
    iframe.setAttribute("src", "");
  }, 2000);
});

// Update cursor position
function updateCursorPosition(event) {
  const cursorX = event.clientX - cursor.offsetWidth / 2;
  const cursorY = event.clientY - cursor.offsetHeight / 2;
  cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
}

// Custom cursor movement without GSAP
window.addEventListener("mousemove", (e) => {
  updateCursorPosition(e);
});

// Scroll progress tracking for sections
let panels = document.querySelectorAll(".panel");
window.addEventListener("scroll", () => {
  panels.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const progress = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight), 0), 1);
    section.style.setProperty("--progress", progress);
  });

  // Full page scroll progress
  const bodyRect = document.body.getBoundingClientRect();
  const scrollProgress = Math.min(Math.max(window.scrollY / (document.body.scrollHeight - window.innerHeight), 0), 1);
  body.style.setProperty("--progress", scrollProgress);
});

// Preloader removal after content is loaded
document.addEventListener("DOMContentLoaded", function () {
  body.classList.add("loaded");
});

// Recalculate element positions after window resize
window.addEventListener("resize", function () {
  setTimeout(() => {
    panels.forEach((section) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty("--progress", rect.top / window.innerHeight);
    });
  }, 2500);
});