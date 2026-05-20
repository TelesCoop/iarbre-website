// Pointer drawing effect on .fullscreen sections (only when present)
(function pointerDrawing() {
  const fullscreenSection = document.querySelector(".fullscreen");
  if (!fullscreenSection) return;

  let pixelInterval;

  function showSymbol(x, y) {
    const symbol = document.createElement("div");
    symbol.textContent = "×";
    symbol.style.color = "#32412D";
    const randomSize = Math.floor(Math.random() * 91) + 10;
    symbol.style.fontSize = `${randomSize}px`;
    symbol.style.position = "absolute";
    symbol.style.top = `${y - randomSize / 2}px`;
    symbol.style.left = `${x - randomSize / 2}px`;
    symbol.style.pointerEvents = "none";
    symbol.style.transition = "opacity 1s";
    fullscreenSection.appendChild(symbol);
    setTimeout(() => {
      symbol.style.opacity = "0";
      setTimeout(() => symbol.remove(), 1000);
    }, 1000);
  }

  function createSymbol(event, rect) {
    let x, y;
    if (event.type === "mousemove" || event.type === "mouseup") {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    } else if (event.type === "touchmove" || event.type === "touchstart") {
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    }
    showSymbol(x, y);
  }

  function startSymbolGeneration(event) {
    const rect = fullscreenSection.getBoundingClientRect();
    createSymbol(event, rect);
    pixelInterval = setInterval(() => createSymbol(event, rect), 100);
  }

  function stopSymbolGeneration() {
    clearInterval(pixelInterval);
  }

  fullscreenSection.addEventListener("mouseup", startSymbolGeneration);
  fullscreenSection.addEventListener("touchstart", startSymbolGeneration);
  window.addEventListener("mouseup", stopSymbolGeneration);
  window.addEventListener("touchend", stopSymbolGeneration);
})();

// Privacy banner
(function privacyBanner() {
  const banner = document.getElementById("privacy-banner");
  const closeBtn = document.getElementById("privacy-banner-close");
  if (!banner || !closeBtn) return;

  const STORAGE_KEY = "iarbre.privacy.dismissed";
  try {
    if (localStorage.getItem(STORAGE_KEY) === "1") return;
  } catch (e) {
    return;
  }

  banner.removeAttribute("hidden");
  requestAnimationFrame(() => banner.classList.add("is-visible"));

  closeBtn.addEventListener("click", () => {
    banner.classList.remove("is-visible");
    setTimeout(() => banner.setAttribute("hidden", ""), 200);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {
      // ignore
    }
  });
})();

// Mobile navigation drawer
(function mobileNav() {
  const burger = document.querySelector(".navbar-burger");
  const drawer = document.getElementById("navbar-drawer");
  if (!burger || !drawer) return;

  const closeDrawer = () => {
    burger.setAttribute("aria-expanded", "false");
    drawer.setAttribute("hidden", "");
    document.body.classList.remove("drawer-open");
  };

  const openDrawer = () => {
    burger.setAttribute("aria-expanded", "true");
    drawer.removeAttribute("hidden");
    document.body.classList.add("drawer-open");
  };

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    if (isOpen) closeDrawer();
    else openDrawer();
  });

  drawer.addEventListener("click", (event) => {
    if (event.target.tagName === "A") closeDrawer();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
      closeDrawer();
      burger.focus();
    }
  });
})();
