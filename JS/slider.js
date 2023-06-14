let slideOverlay
let sliderItems

document.addEventListener("DOMContentLoaded", () => {
    sliderItems = document.querySelectorAll(".slider__item")
    slideOverlay = document.querySelector(".slider-view__back")

    for (const item of sliderItems) {
        item.addEventListener("mousemove", mouseMoved)
    }
    sliderItems[0].style.display = "block"
});

