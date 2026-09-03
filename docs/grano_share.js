(function () {
  const slides = [...document.querySelectorAll(".slide")];
  const total = slides.length;
  const ind = document.getElementById("page-ind");
  const bar = document.getElementById("progress");
  let cur = 0;

  function frags(slide) {
    return [...slide.querySelectorAll(".frag")];
  }

  function resetFrags(slide, showAll) {
    frags(slide).forEach((f) => f.classList.toggle("on", !!showAll));
  }

  function replay(slide) {
    slide.querySelectorAll(".kenburns").forEach((el) => {
      el.style.animation = "none";
      void el.offsetHeight;
      el.style.animation = "";
    });
    slide.querySelectorAll("[data-count]").forEach((el) => {
      if (el.dataset.done === "1" && slide.dataset.played === "1") return;
      animateCount(el);
    });
    slide.dataset.played = "1";
  }

  function animateCount(el) {
    const to = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const dur = 900;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const n = Math.round(to * eased);
      el.textContent = prefix + n + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const shotAll = /(?:^|[?&])all=1(?:&|$)/.test(location.search);

  function go(n, fromBack) {
    cur = Math.max(0, Math.min(total - 1, n));
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === cur);
      if (i === cur) resetFrags(s, fromBack || shotAll);
      else if (i > cur) resetFrags(s, false);
    });
    if (ind) ind.textContent = cur + 1 + " / " + total;
    if (bar) bar.style.width = ((cur + 1) / total) * 100 + "%";
    markEnd(cur >= total - 1);
    if (location.hash !== "#" + (cur + 1)) {
      history.replaceState(null, "", "#" + (cur + 1));
    }
    replay(slides[cur]);
  }

  function markEnd(ended) {
    const btn = document.getElementById("btn-next");
    const hint = document.querySelector(".hint");
    if (btn) {
      btn.disabled = !!ended;
      btn.textContent = ended ? "終わり" : "次 →";
    }
    if (hint) {
      hint.innerHTML = ended
        ? "<kbd>Home</kbd> 最初へ　<kbd>F</kbd> 全画面"
        : "<kbd>→</kbd> 次へ　<kbd>F</kbd> 全画面";
    }
  }

  function next() {
    const hidden = frags(slides[cur]).find((f) => !f.classList.contains("on"));
    if (hidden) {
      hidden.classList.add("on");
      return;
    }
    if (cur >= total - 1) {
      markEnd(true);
      return;
    }
    go(cur + 1, false);
  }

  function prev() {
    const on = frags(slides[cur]).filter((f) => f.classList.contains("on"));
    if (on.length) {
      on[on.length - 1].classList.remove("on");
      return;
    }
    go(cur - 1, true);
  }

  function toggleFs() {
    document.fullscreenElement
      ? document.exitFullscreen?.()
      : document.documentElement.requestFullscreen?.();
  }

  document.getElementById("btn-prev")?.addEventListener("click", (e) => {
    e.stopPropagation();
    prev();
  });
  document.getElementById("btn-next")?.addEventListener("click", (e) => {
    e.stopPropagation();
    next();
  });
  document.getElementById("btn-fs")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFs();
  });

  document.addEventListener("keydown", (e) => {
    if (["ArrowRight", " ", "PageDown", "Enter"].includes(e.key)) {
      e.preventDefault();
      next();
    }
    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      prev();
    }
    if (e.key === "Home") {
      e.preventDefault();
      go(0, false);
    }
    if (e.key === "End") {
      e.preventDefault();
      go(total - 1, true);
    }
    if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFs();
    }
  });

  document.querySelector(".deck")?.addEventListener("click", (e) => {
    if (e.target.closest("a,button,.controls,.alt-link")) return;
    next();
  });

  const dust = document.getElementById("dust");
  if (dust) {
    for (let i = 0; i < 28; i++) {
      const s = document.createElement("i");
      s.style.left = Math.random() * 100 + "%";
      s.style.animationDuration = 8 + Math.random() * 10 + "s";
      s.style.animationDelay = Math.random() * 8 + "s";
      s.style.width = s.style.height = 1 + Math.random() * 2 + "px";
      dust.appendChild(s);
    }
  }

  const start = parseInt(location.hash.replace("#", ""), 10);
  go(Number.isFinite(start) && start > 0 ? start - 1 : 0, shotAll);
})();
