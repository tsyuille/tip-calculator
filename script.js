const sliders = document.querySelectorAll("input [type='range']")
sliders.forEach((slider) => slider.addEventListener("input", calculateTip))

const billInput = document.getElementById("bill")
billInput.addEventListener("change", calculateTip)

function calculateTip() {
    let bill = parseFloat(billInput.value)
    let tipPercent = document.getElementById("tip").value
    let numOfPeople = document.getElementById("num-of-people").value

    billInput.value = bill.toFixed(2)
}