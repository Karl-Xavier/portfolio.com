const showBtn = document.getElementById("ham")
const hideBtn = document.getElementById("ex")
const showBar = document.getElementById("showBar")

showBtn.addEventListener("click", function(){
    showBar.classList.add("show")
})
hideBtn.addEventListener("click", function(){
    showBar.classList.remove("show")
})

/* const header = document.getElementById("header")
const head = document.getElementById("h1")

header.addEventListener("mouseover", function(){
    head.classList.add("red")
})

header.addEventListener("mouseleave", function(){ 
    head.classList.remove("red")
}) */

