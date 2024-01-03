const header = document.getElementById("header")

header.addEventListener("mouseover", delay)
header.addEventListener("mouseleave", unlay)

function delay() {
    header.classList.add("red")
}

function unlay() {
    header.classList.remove("red")
}