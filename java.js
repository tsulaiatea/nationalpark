"use strict"
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

// sliderer
let data = [
    {
       id: 1,
       title:"კოლხეთის ეროვნული პარკი",
       imageUrl:"https://georgiantour.com/wp-content/uploads/2015/04/15121_293888440758581_1896679685_n.jpg"
    },
    {
        id: 2,
        title:"კოლხეთის ეროვნული პარკი",
        imageUrl: "https://cdn.mygeotrip.com/file_manager/images/Sights/Natural%20sights/2/Kolkheti%20State%20Reserve%20and%20National%20park.jpg"
    },
    {
        id: 3,
        title:" კოლხეთის ეროვნული პარკი",
        imageUrl: "https://i.pinimg.com/originals/12/5b/48/125b48ebd0b3457503761e6b4253eb41.jpg"  
    },
    {
        id: 4,
        title:" კოლხეთის ეროვნული პარკი",
        imageUrl: "https://i.pinimg.com/originals/2a/ee/56/2aee567a2ff8f2bfd74f66d85a1cdecd.jpg"  
    },
    {
        id: 5,
        title:"კოლხეთის ეროვნული პარკი",
        imageUrl: "https://www.georgianholidays.com/storage/e8rPc14jR9RqyCf2z1QwLtyLXtUKAolBGw93v7f3.jpeg"  
    },
    

];

// ვასელექტებთ

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
    let dots = createDots()

    sliderContainer.appendChild(title)
    sliderContainer.appendChild(dots)
    let dotElements = dots.querySelectorAll('.dot')

    
    dotElements[sliderIndex].classList.add('active')
    
    
}

// ისრები
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

 arrowLeftBtn.addEventListener('click', arrowLeft)
 arrowRightBtn.addEventListener('click', arrowRight)

   
    




// ავტომატურად გადასვლა მწ-ში

setInterval(()=>{
    arrowRight()
},3000)


// წერტილები
function createDots() {
    let dots = document.createElement('div')
    dots.classList.add('dots')
    data.forEach((elemetn)=>{
        let dot = document.createElement('div')
        dot.classList.add('dot')
        dot.setAttribute('data-id',elemetn.id-1)

        dot.onclick = function(event){
            let id = event.target.getAttribute('data-id')
            sliderIndex = id
            setSlider ()

            
        }
        dots.appendChild(dot)
    })
    return dots


    
}
setSlider ()





