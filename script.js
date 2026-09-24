// ============================================================
// devfolio — vanilla JS, no dependencies
// 1. Mobile menu: close on link click (CSS checkbox handles open)
// 2. Active nav link highlighting on scroll
// 3. Footer year auto-update
// 4. Scroll-reveal via IntersectionObserver
// ============================================================

(function () {
  "use strict";

  // Remove no-js fallback class (enables reveal-on-scroll CSS transitions).
  document.documentElement.classList.remove("no-js");

  /* ---------- 1. Close mobile menu when a link is tapped ---------- */
  var menuToggle = document.getElementById("menu-toggle");
  var navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Unchecking the box collapses the pure-CSS mobile menu.
      menuToggle.checked = false;
    });
  });

  /* ---------- 2. Highlight active nav link while scrolling ---------- */
  var sections = document.querySelectorAll("main section[id], header[id]");
  var linkMap = {};
  navLinks.forEach(function (link) {
    linkMap[link.getAttribute("href").slice(1)] = link;
  });

  function setActiveLink() {
    var current = sections[0].id;
    sections.forEach(function (section) {
      // Section becomes "current" once its top passes the nav offset.
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle(
        "active",
        link.getAttribute("href").slice(1) === current
      );
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink(); // correct state on page load / refresh

  /* ---------- 3. Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- 4. Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target); // reveal once, then stop watching
          }
        });
      },
      { threshold: 0.12 } // trigger when ~12% of the element is visible
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback for very old browsers: show everything immediately.
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }
})();
