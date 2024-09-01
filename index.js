const kittyBtn = document.getElementById("kitty-btn")
const puppyBtn = document.getElementById("puppy-btn")
const carousel = document.getElementById("carousel-container")
const carouselImg = document.getElementById("carousel-images")
const gallery = document.getElementById("gallery-container")
let slideIndex = 0

const kittyArr = ["kitty-1.jpg", "kitty-2.jpg", "kitty-3.jpg"]
const puppyArr = ["puppy-1.jpg", "puppy-2.jpg", "puppy-3.jpg"]

// ⬇️ EVENT LISTENERS ⬇️

kittyBtn.addEventListener("click", kittyClick)
puppyBtn.addEventListener("click", puppyClick)

// ⬇️ EVENT HANDLERS ⬇️

function kittyClick() {
    console.log("kitty button clicked")
    renderCarousel(kittyArr)
    renderGallery(kittyArr)
}

function puppyClick() {
    console.log("puppy button clicked")
    renderCarousel(puppyArr)
    renderGallery(puppyArr)
}

function changeSlide(n) {
    console.log("change slide", n)
}

// ⬇️ RENDER FUNCTIONS ⬇️

// render carousel
function renderCarousel(arr, slideNum = 0) {
    console.log(arr, slideNum)
    carouselImg.innerHTML = ""

    const critters = arr.map(item => `
        <section class="carousel-critter hidden">
            <img src="img/${item}" alt="">
        </section>
    `).join("")

    carouselImg.innerHTML += critters

    let critterToShow = document.getElementsByClassName("carousel-critter")[slideNum]
    critterToShow.className = "carousel-critter"
    console.log(critterToShow)

    carouselImg.innerHTML += critterToShow
}

// render gallery
function renderGallery(arr) {
    console.log(arr)
    gallery.innerHTML = ""

    const critters = arr.map(item => `
        <section class="gallery-critter">
            <img src="img/${item}" alt="">
        </section>
    `).join("")

    gallery.innerHTML += critters
}