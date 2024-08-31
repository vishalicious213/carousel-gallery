const kittyBtn = document.getElementById("kitty-btn")
const puppyBtn = document.getElementById("puppy-btn")
const carousel = document.getElementById("carousel-container")
const gallery = document.getElementById("gallery-container")

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

// ⬇️ RENDER FUNCTIONS ⬇️

// render carousel
function renderCarousel(arr) {
    console.log(arr)
    carousel.innerHTML = ""

    const critters = arr.map(item => `
        <section class="carousel-critter">
            <img src="img/${item}" alt="">
        </section>
    `)

    carousel.innerHTML += critters
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