const btn = document.querySelector(".btn");
let preview = document.querySelector(".preview");
let triangle =document.querySelector(".triangle");


btn.addEventListener("click", function(){
    preview.classList.toggle("active");
    triangle.classList.toggle("active");
})