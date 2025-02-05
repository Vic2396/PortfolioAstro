document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-menu");
    const menu = document.getElementById("dropdown-menu");

    toggleButton?.addEventListener("click", () => {
      if (menu?.classList.contains("max-h-0")) {
        menu.classList.remove("max-h-0");
        menu.classList.add("max-h-[200px]"); 
        toggleButton.classList.add("rotate-180");
      } else {
        menu?.classList.remove("max-h-[200px]");
        menu?.classList.add("max-h-0");
        toggleButton.classList.remove("rotate-180");
      }
    });
});