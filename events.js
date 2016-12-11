var outputTarget = document.querySelector("#output-target")
var header1 = document.querySelector("h1")
var inputField = document.querySelector("input")
var guineaPig = document.querySelector("#guinea-pig")

document.querySelector("article").addEventListener("click", (e) => {
  outputTarget.innerHTML = `<p>You clicked on the ${e.target.innerHTML} section`
    inputField.value = ""
})

header1.addEventListener("mouseover", () => {
  outputTarget.innerHTML = "You moved your mouse over the header"
  inputField.value = ""
})

header1.addEventListener("mouseout", () => {
  outputTarget.innerHTML = "You left me!!"
  inputField.value = ""
})

inputField.addEventListener("input", (e) => {
  outputTarget.innerHTML = inputField.value
})

document.querySelector("#add-color").addEventListener("click", (e) => {
  guineaPig.classList.add("color-blue")
})

document.querySelector("#make-large").addEventListener("click", (e) => {
  guineaPig.classList.add("large-text")
})

document.querySelector("#add-border").addEventListener("click", (e) => {
  guineaPig.classList.add("add-border")
})

document.querySelector("#add-rounding").addEventListener("click", (e) => {
  guineaPig.classList.add("rounded")
})

document.querySelector("article").firstElementChild.classList.add("bold-text")
