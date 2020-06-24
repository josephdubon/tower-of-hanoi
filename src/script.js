// Test connection to index.html
// console.log("Get script-y wit it. Na-Na Na Na N-Na Na.")

// Structure referenced from Randy's demos
// Thank you Randy

// Code Team
// Joseph Dubon (josephdubon@pm.me)
// and
// Jennifer Schneider (jennmac20123 @yahoo.com)

// Declare variables
let mode = "pickup" // pickup mode, drop mode
let pickedDisc = null

// Main game function
const towerClick = function (evt) {
    const tower = evt.currentTarget
    if (mode === "pickup") {
        // Pickup mode
        const disc = tower.lastElementChild
        if (disc) {
            console.log(disc.id + " is now your disc")
            pickedDisc = disc
            document.getElementById("hand").append(pickedDisc)
            // Declare drop mode
            mode = "drop"
        } else {
            console.log("Nothing to pick up.")
        }
    } else {
        // Drop mode
        console.log("You placed your disc onto " + tower.id)
        tower.append(pickedDisc)
        // Declare pickup mode
        mode = "pickup"
    }
}

// Declare towers
const tower1 = document.querySelector("#tower1")
const tower2 = document.querySelector("#tower2")
const tower3 = document.querySelector("#tower3")

// Initiate on click event for all 3 towers
tower1.onclick = towerClick
tower2.onclick = towerClick
tower3.onclick = towerClick