const sliders = document.querySelectorAll("input [type='range']")
sliders.forEach((slider) => slider.addEventListener("input", calculateTip))

const billInput = document.getElementById("bill")
billInput.addEventListener("change", calculateTip)

function calculateTip() {
    let bill = parseFloat(billInput.value)
    let tipPercent = document.getElementById("tip").value
    let numOfPeople = document.getElementById("num-of-people").value

    billInput.value = bill.toFixed(2)

    let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2))
    let total = parseFloat((bill + totalTip).toFixed(2))

    let tipPerPerson = (totalTip / numOfPeople).toFixed(2)
    let totalPerPerson = (total / numOfPeople).toFixed(2)

    console.log(totalTip, total, tipPerPerson, totalPerPerson)
}