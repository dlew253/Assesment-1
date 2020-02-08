// variables
let count = 0


// add input
const add = () => {
    let addAmount = parseInt(document.getElementById("input").value)
    count += addAmount
    updateNumber()
}

// subtract input
const subtract = () => {
    let subAmount = parseInt(document.getElementById("input").value)
    count -= subAmount
    updateNumber()
}
/*  */

//update
const updateNumber = () => {
    let display = document.getElementById("display")
    display.innerText = count
}
// color the text

if (display < 0) {
    document.getElementById("display").style.backgroundColor = '#236, 2, 2';
    }
    else  document.getElementById("display").style.backgroundColoe = "black";
    
//dom content

window.addEventListener("DOMContentLoaded", () => {

    document.getElementById("add").addEventListener("click", add)
    document.getElementById("subtract").addEventListener("click", subtract)
    document.getElementById("input").value = 1
})