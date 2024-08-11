let first = document.getElementById("first");
let second = document.getElementById("second");
let f_bar = document.getElementById("f-bar")
let s_bar = document.getElementById("s-bar")
first.addEventListener("click", function() {
    if(second.classList.contains("active")) {
        second.classList.toggle("active")
    }
    first.classList.toggle("active") 
    s_bar.classList.toggle("display")
    f_bar.classList.toggle("display")
})
second.addEventListener("click", function() { 
    if(first.classList.contains("active")) {
        first.classList.toggle("active")
    }
    second.classList.toggle("active")
    s_bar.classList.toggle("display")
    f_bar.classList.toggle("display")
})

let search = document.getElementById("search");
let search_img = document.getElementById("search-image");
search.addEventListener('focus', function() {
    search.style.backgroundColor = "black"
    search_img.src = "./svg/invoked-search.svg" 
})

search.addEventListener("blur", function() {
    search.style.backgroundColor = "#202327"
    search_img.src = "./svg/not-invoked-search.svg"

})


