const kittyBtn = document.getElementById("kitty-btn")
const puppyBtn = document.getElementById("puppy-btn")

kittyBtn.addEventListener("click", kittyClick)
puppyBtn.addEventListener("click", puppyClick)

function kittyClick() {
    console.log("kitty button clicked")
}

function puppyClick() {
    console.log("puppy button clicked")
}