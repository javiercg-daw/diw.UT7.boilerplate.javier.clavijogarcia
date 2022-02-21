export function addCarouselEventListeners() {
    const carouselDots = [...document.querySelectorAll(".dot")];
    debugger
    carouselDots.forEach((dot, index) => {
        dot.addEventListener("click", (event) => showImage(event, index));
    });
}

function showImage(event, i) {
    const carouselImages = document.querySelector(".carousel-images");
    const carouselDots = [...document.querySelectorAll(".dot")];
    carouselImages.style.transform = `translateX(${i * -(100 / carouselDots.length)}%)`;
    carouselDots.forEach((dot, i) => {
        carouselDots[i].classList.remove("active");
    });
    carouselDots[i].classList.add("active");
}