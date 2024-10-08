const kittyBtn = document.getElementById("kitty-btn")
const puppyBtn = document.getElementById("puppy-btn")
const carousel = document.getElementById("carousel-container")
const carouselImg = document.getElementById("carousel-images")
const gallery = document.getElementById("gallery-container")
const dotsContainer = document.getElementById("dot-container")

const kittyArr = ["kitty-1.jpg", "kitty-2.jpg", "kitty-3.jpg"]
const puppyArr = ["puppy-1.jpg", "puppy-2.jpg", "puppy-3.jpg"]

let slideIndex = 0
let dataSet = kittyArr

// ⬇️ EVENT LISTENERS ⬇️

kittyBtn.addEventListener("click", kittyClick)
puppyBtn.addEventListener("click", puppyClick)

// ⬇️ EVENT HANDLERS ⬇️

function kittyClick() {
    renderCarousel(kittyArr, slideIndex)
    renderGallery(kittyArr)
    dataSet = kittyArr
}

function puppyClick() {
    renderCarousel(puppyArr, slideIndex)
    renderGallery(puppyArr)
    dataSet = puppyArr
}

function changeSlide(n) {
    if (n === 1) {
        slideIndex ++
        if (slideIndex > dataSet.length - 1) {
            slideIndex = 0
        }
        renderCarousel(dataSet, slideIndex)
    }

    if (n === -1) {
        slideIndex --
        if (slideIndex < 0) {
            slideIndex = dataSet.length - 1
        }
        renderCarousel(dataSet, slideIndex)
    }
}

function changeSlideFromDots(num) {
    slideIndex = num
    renderCarousel(dataSet, slideIndex)
}

// ⬇️ RENDER FUNCTIONS ⬇️

// render carousel
function renderCarousel(arr, slideNum = 0) {
    carouselImg.innerHTML = ""

    const critters = arr.map(item => `
        <section class="carousel-critter hidden">
            <img src="img/${item}" alt="">
        </section>
    `).join("")

    carouselImg.innerHTML += critters

    let critterToShow = document.getElementsByClassName("carousel-critter")[slideNum]
    critterToShow.className = "carousel-critter"
    
    carouselImg.innerHTML = ""
    carouselImg.appendChild(critterToShow)

    renderDots(arr.length)
}

// render gallery
function renderGallery(arr) {
    gallery.innerHTML = ""

    const critters = arr.map(item => `
        <section class="gallery-critter">
            <img src="img/${item}" alt="">
        </section>
    `).join("")

    gallery.innerHTML += critters
}

function renderDots(num) {
    dotsContainer.innerHTML = ""
    
    for (i = 0; i < num; i++) {
        dotsContainer.innerHTML += `
            <span class="dot" onclick="changeSlideFromDots(${i})"></span>
        `
    }
}

renderCarousel(dataSet, slideIndex)
renderGallery(dataSet)