(function () {
  const storageKey = "our-team-theme";
  const body = document.body;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeLabel = document.querySelector("[data-theme-label]");
  const themeIcon = document.querySelector("[data-theme-icon]");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("[data-nav-menu]");
  const header = document.querySelector(".site-header");

  const setTheme = (theme) => {
    body.dataset.theme = theme;

    if (!themeLabel || !themeIcon) {
      return;
    }

    const isDark = theme === "dark";
    themeLabel.textContent = isDark ? "Світла тема" : "Темна тема";
    themeIcon.textContent = isDark ? "☀" : "◐";
  };

  const storedTheme = localStorage.getItem(storageKey);
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(storedTheme || (preferredDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem(storageKey, nextTheme);
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (header) {
    const updateHeaderState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  const currentPage = body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const isActive =
        (currentPage === "home" && href === "index.html") ||
        (currentPage === "dmitry" && href === "dmitry-about.html") ||
        (currentPage === "volodymyr" && href === "volodymyr-about.html");

      if (isActive) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
})();
