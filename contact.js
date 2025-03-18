// სარეგისტრაციო ფორმა

// document.getElementById('registration').addEventListener('submit',function(event){

//     event.preventDefault()

//     let errors ={
//         //   username "დაწერეთ მომხმარებლის სახელი" აქ გროვდება ერორები
//         // password
//     }

//     let form = event.target

//     let userName = document.getElementById('username').value

//     if (userName.length < 2 || userName == '') {
//         errors.username = "დაწერეთ მომხმარებლის სახელი"
        
//     }

//     let lastName = document.getElementById('lastname').value

//     if(lastName.length < 3 || lastname ==''){
//         errors.lastname = "დაწერეთ მომხმარებლის გვარი"
//     }

//     let password = document.getElementById('password').value
//     let password2 = document.getElementById('password2').value
 
//     if (password != password2 || password =='') {
//         errors.password = "ჩაწერე პაროლი"
//         errors.password2 = "გაიმეორე პაროლი"
        
//     }

//     let agree = document.getElementById('checkAgree').checked
//     if(!agree){
//         errors.agree = 'დააკლიკე'

//     }

//     let age = false
//     form.querySelectorAll('[name ="age"]').forEach(elemetn =>{
//         if(elemetn.checked){
//             age = true
//         }
//     })

//     if (!age) {
//         errors.age = "გთხოვთ აირჩიეთ ერთ-ერთი"
//     }


    

// for(let item in errors){
//     let errorSpan = document.getElementById('error_' +item)
//     if (errorSpan) {
//         errorSpan.textContent = errors[item]
        
//     }
// }

//     form.querySelectorAll('.errorText').forEach(item=>{
//      item.textContent = ''  
//     })
    
//     if (Object.keys(errors).length == 0) {
//         form.submit()
        
//     }  

// })

document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let errors = {}; 
    let form = event.target; 

    // ჯერ ვასუფთავებთ წინა შეცდომებს
    form.querySelectorAll('.errorText').forEach(item => {
        item.textContent = '';
    });

    // სახელის შემოწმება
    let userName = document.getElementById('username').value.trim();
    if (userName.length < 2) {
        errors.username = "დაწერეთ მომხმარებლის სახელი";
    }

    // გვარის შემოწმება (შეცდომა გასწორებულია)
    let lastName = document.getElementById('lastname').value.trim();
    if (lastName.length < 3) {
        errors.lastname = "დაწერეთ მომხმარებლის გვარი";
    }

    // პაროლის შემოწმება
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    if (password.length < 6) {
        errors.password = "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო!";
    }
    if (password !== password2) {
        errors.password2 = "პაროლები არ ემთხვევა!";
    }

    // CheckBox (დათანხმება) შემოწმება
    let agree = document.getElementById('checkAgree').checked;
    if (!agree) {
        errors.agree = 'აუცილებელია დათანხმება!';
    }

    // რადიო ღილაკის შემოწმება
    let age = false;
    form.querySelectorAll('[name="age"]').forEach(element => {
        if (element.checked) {
            age = true;
        }
    });
    if (!age) {
        errors.age = "გთხოვთ აირჩიოთ ერთ-ერთი";
    }

    // ერორების გამოჩენა შესაბამის span-ებში
    for (let item in errors) {
        let errorSpan = document.getElementById('error_' + item);
        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }

    // თუ არ არის შეცდომები, ფორმა იგზავნება
    if (Object.keys(errors).length === 0) {
        form.submit();

    }
});