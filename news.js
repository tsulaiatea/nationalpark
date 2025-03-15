// acordion
// // ეს გვიბრუნებს მასივს(ყველა ელემენტს )ამიტომ ვიყენებთ querSelectorall 

let acordion = document.querySelectorAll('.acordion-container')


acordion.forEach(item=> {
    item.addEventListener('click', function(){
        this.classList.toggle('active')
        console.log(acordion);
    })


})




// // 2.accordion  მეორე გზა for ით
// document.addEventListener('DOMContentLoaded', function(){
// let acordion = document.getElementsByClassName('acordion-container')

// for(let i=0; i< acordion.length; i++){
//     acordion[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     // console.log(acordion);
//     })
    
// }
// })   


