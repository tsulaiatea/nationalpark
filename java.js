let links = document.getElementById ("links");
let burger = document.getElementById ("burger");

burger. addEventListener("click", function() {
    if(links.classList.contains("active")){
        links.classList.remove("active")
        burger.innerHTML =  '<i class="fa-solid fa-bars"></i>'

    }else {
        links.classList. add("active")
        burger.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
    }
    
});