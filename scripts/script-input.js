const rangeInputs = document.querySelectorAll("input[type="range"]")

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== "range") {
    target = document.getElementById("range")
  }
  target.style.backgroundSize = target.value + "% 100%";
}

rangeInputs.forEach(input => {
  input.addEventListener("input", handleInputChange)
})
