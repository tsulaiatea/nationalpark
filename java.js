// "use strict"
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

// slider
let data = [
    {
       id: 1,
       title:"pirveli",
       imageUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSummer&psig=AOvVaw2kwtw2-ZdmEa6iERxm1aUn&ust=1741555172863000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjWkd60-4sDFQAAAAAdAAAAABAE"
    },
    {
        id: 2,
        title:"meore",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeorgia.travel%2Fka%2F%25E1%2583%2599%25E1%2583%259D%25E1%2583%259A%25E1%2583%25AE%25E1%2583%2594%25E1%2583%2597%25E1%2583%2598%25E1%2583%25A1-%25E1%2583%2594%25E1%2583%25A0%25E1%2583%259D%25E1%2583%2595%25E1%2583%259C%25E1%2583%25A3%25E1%2583%259A%25E1%2583%2598-%25E1%2583%259E%25E1%2583%2590%25E1%2583%25A0%25E1%2583%2599%25E1%2583%2598&psig=AOvVaw3dvZaN5mGOpI1lABHYULYE&ust=1741372315680000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiynsWL9osDFQAAAAAdAAAAABAP"
    },
    {
        id: 3,
        title:"mesame",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnationalparks.ge%2Fka%2Fsite%2Fkolxetinp&psig=AOvVaw3MmO6RUQ28qfuiyfo5bKTm&ust=1741372562744000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOi_pMKM9osDFQAAAAAdAAAAABAE"  
    },

];

let sliderContainer = document.getElementById("slider")
let arrowLeftBtn = document.getElementById("arrow-left")
let arrowRightBtn = document.getElementById("arrow-right")

let sliderIndex = 0

// სურათის შექმნის ფუნქცია

function createImg(item){
    sliderContainer.style.backgroundImage = `url(${item.imageUrl})`
    sliderContainer.style.backgroundRepeat = 'no-repeat'
    sliderContainer.style.backgroundSize = 'cover'
} 

// სათაურის გამოტანის ფუნქცია

function createH2tag(item) {
    

let h2tag = document.createElement('h2')
h2tag.innerText = item.title
h2tag.classList.add('slider-title')
return h2tag
}  

// მთავარი ფუნქცია, რომელშიც გამოჩნდება სურათები

function setSlider(){
    sliderContainer.innerText=''
    createImg(data[sliderIndex])
    let title = createH2tag(data[sliderIndex])

    sliderContainer.appendChild(title)
    
}

function arrowLeft(){
        if(sliderIndex === 0){
            sliderIndex = data.length-1
        }else {
            sliderIndex --
        }
        setSlider()
    }

    function arrowRight(){
        if(sliderIndex === data.length-1){
            sliderIndex = 0
        }else {
            sliderIndex ++
        }
        setSlider()
    }
    


arrowLeftBtn.addEventListener('click',arrowLeft)
arrowRightBtn.addEventListener('click',arrowRight)

setSlider()