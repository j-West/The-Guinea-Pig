var outputTarget = document.querySelector("#output-target")
var header1 = document.querySelector("h1")
document.querySelector("article").addEventListener("click", (e) => {
  outputTarget.innerHTML = `<p>You clicked on the ${e.target.innerHTML} section`
})

header1.addEventListener("mouseover", () => {
  outputTarget.innerHTML = "You moved your mouse over the header"
})

header1.addEventListener("mouseout", () => {
  outputTarget.innerHTML = "You left me!!"
})
