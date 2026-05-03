const toc = document.querySelector(".mobile-toc");
const toggle = document.querySelector(".toc-toggle");

if (toc && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = toc.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  toc.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toc.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-copy-button]").forEach((button) => {
  button.addEventListener("click", async () => {
    const panel = button.closest(".code-panel");
    const code = panel?.querySelector("pre code")?.textContent ?? "";

    try {
      await navigator.clipboard.writeText(code);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1400);
    } catch {
      button.textContent = "Select";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1400);
    }
  });
});
