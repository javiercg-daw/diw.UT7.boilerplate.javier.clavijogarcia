const carouselImages = document.querySelector(".carousel-images");
const carouselDots = document.querySelectorAll(".dot");

for (let i in carouselDots) {
    carouselDots[i].addEventListener('click', (event) => showImage(event, i))
}

function showImage(event, i) {

}