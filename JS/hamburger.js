document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButtons = document.querySelectorAll(".hamburger-menu");
    const body = document.querySelector("body");
  
    body.onclick = (e) => {
      const menus = document.querySelectorAll(".hamburger-menu-list");
      for (const menu of menus) {
        menu.classList.add("navbar__menu--hidden");
      }
      for (const button of hamburgerButtons) {
        button.classList.remove("hamburger-menu--active");
      }
      body.classList.remove("open-menu"); // Odstraní třídu open-menu při kliknutí mimo hamburger menu
    };
  
    for (const btn of hamburgerButtons) {
      btn.onclick = (event) => {
        event.stopPropagation();
        const menus = document.querySelectorAll(".hamburger-menu-list");
        for (const menu of menus) {
          menu.classList.toggle("navbar__menu--hidden");
        }
        btn.classList.toggle("hamburger-menu--active");
        body.classList.toggle("open-menu"); // Přidá/zruší třídu open-menu po kliknutí na hamburger menu
      };
    }
  });
  