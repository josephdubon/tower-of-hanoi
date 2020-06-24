// Test connection to index.html
console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Structure reference from Randy's demos
// Thank you Randy

// Declare variables
let mode = "pickup" // pickup mode, drop mode
let selectedDisc = null

// Main game function
const towerClick = function (evt) {
    const tower = evt.currentTarget
    if (mode === "pickup") {
        // Pickup mode
        const disc = tower.lastElementChild
        if (disc) {
            console.log("You picked up disc " + disc.id)
            selectedDisc = disc
            document.getElementById("hand").append(selectedDisc)
            mode = "drop"
        } else {
            console.log("No disc to pickup")
        }
    } else {
        // Drop mode
        console.log("You placed disc onto " + tower.id)
        tower.append(selectedDisc)
        mode = "pickup"
    }
}

// Declare towers
const tower1 = document.querySelector("tower1")
const tower1 = document.querySelector("tower2")
const tower1 = document.querySelector("tower3")