let links = document.getElementById ("links");
let burger = document.getElementById ("burger");

burger. addEventListener("click", function() {
    if(links.classList.contains("active")){
        // ნავიგაციას აქრობს
        links.classList.remove("active")
        // ბურგერ მენიუდ გადააქცევს  X აიქონს
        burger.innerHTML =  '<i class="fa-solid fa-bars"></i>'

    }else {
        // ეს გამოიტანს ნავიგაციის მენიუს
        links.classList. add("active")
        // ეს გადააქცევს X -ად
        burger.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
    }
    
});