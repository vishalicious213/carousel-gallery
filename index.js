const kittyBtn = document.getElementById("kitty-btn")
const puppyBtn = document.getElementById("puppy-btn")

const kittyArr = ["kitty-1.jpg", "kitty-2.jpg", "kitty-3.jpg"]
const puppyArr = ["puppy-1.jpg", "puppy-2.jpg", "puppy-3.jpg"]

// ⬇️ EVENT LISTENERS ⬇️

kittyBtn.addEventListener("click", kittyClick)
puppyBtn.addEventListener("click", puppyClick)

// ⬇️ EVENT HANDLERS ⬇️

function kittyClick() {
    console.log("kitty button clicked")
}

function puppyClick() {
    console.log("puppy button clicked")
}

// ⬇️ RENDER FUNCTIONS ⬇️

// render carousel

// render gallery