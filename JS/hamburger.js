document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButtons = document.querySelectorAll(".hamburger-menu");
            document.querySelector("body").onclick = (e) => {
            const menus = document.querySelectorAll(".hamburger-menu-list");
            for (const menu of menus) {
                menu.classList.add("navbar__menu--hidden");
            }
            for (const button of hamburgerButtons) {
                button.classList.remove("hamburger-menu--active");
            }
            }
            for (const btn of hamburgerButtons) {
            btn.onclick = (event) => {
                event.stopPropagation();
                const menus = document.querySelectorAll(".hamburger-menu-list");
                for (const menu of menus) {
                menu.classList.toggle("navbar__menu--hidden");
                }
                btn.classList.toggle("hamburger-menu--active");
            }
            }
});