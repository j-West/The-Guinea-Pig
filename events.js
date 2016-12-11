var outputTarget = document.querySelector("#output-target")

document.querySelector("article").addEventListener("click", (e) => {
  outputTarget.innerHTML = `<p>You clicked on the ${e.target.innerHTML} section`
})
