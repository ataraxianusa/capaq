/* CapAq — bilingual toggle (ID/EN) + scroll animations */
(function () {
  "use strict";

  var LANG_KEY = "capaq-lang";
  var lang = localStorage.getItem(LANG_KEY) || "id";

  var langToggle = document.getElementById("langToggle");
  var html = document.documentElement;

  // Static, author-written content — safe to swap as HTML (keeps <strong>/<span> markup)
  var TITLES = {
    id: "CapAq — Pria Capricorn × Wanita Aquarius | Compatibility Deep Dive",
    en: "CapAq — Capricorn Man × Aquarius Woman | Compatibility Deep Dive"
  };

  function applyLang(l) {
    lang = l === "en" ? "en" : "id";
    html.setAttribute("lang", lang);
    document.title = TITLES[lang];

    // Elements carrying both languages via data-* attributes
    document.querySelectorAll("[data-en][data-id]").forEach(function (el) {
      el.innerHTML = el.getAttribute("data-" + lang);
    });

    // Update toggle label to the *other* language
    if (langToggle) {
      langToggle.textContent = lang === "id" ? "EN" : "ID";
      langToggle.setAttribute("aria-label", lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia");
    }

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode */ }
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLang(lang === "id" ? "en" : "id");
    });
  }

  // ── Scroll reveal ───────────────────────────────────────
  function revealOnScroll() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  // ── Animated meters (fill + count) ──────────────────────
  function animateMeters() {
    var fills = document.querySelectorAll(".meter-row__fill[data-value]");
    var counts = document.querySelectorAll(".meter-row__pct[data-count]");

    function run(scope) {
      fills.forEach(function (fill) {
        if (scope && !scope.contains(fill)) return;
        var target = fill.getAttribute("data-value");
        fill.style.width = target + "%";
      });
      counts.forEach(function (pct) {
        if (scope && !scope.contains(pct)) return;
        var target = parseInt(pct.getAttribute("data-count"), 10) || 0;
        var start = null;
        var dur = 1400;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          pct.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + "%";
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }

    var scorecard = document.querySelector(".scorecard");
    if (scorecard && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            run(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      io.observe(scorecard);
    } else if (scorecard) {
      run(scorecard);
    }
  }

  // ── Attach reveal classes to major blocks ───────────────
  function decorate() {
    document.querySelectorAll(".card, .mini-card, .list-item, .tip, .insight, .tldr, .scorecard, .verdict, .sources, .author, .note-card").forEach(function (el) {
      if (!el.classList.contains("reveal")) el.classList.add("reveal");
    });
  }

  function init() {
    applyLang(lang);
    decorate();
    revealOnScroll();
    animateMeters();

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
