document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#toggle-menu");
    const link = document.getElementsByClassName("links");
    const menu = document.querySelector("#dropdown-menu");

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

    document.querySelectorAll(".links").forEach((link) => {
      link.addEventListener("click", () => {
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
});