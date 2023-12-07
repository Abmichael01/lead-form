function checkInputs(){
    const inputs = document.querySelectorAll("input")

    for(const input of inputs){
        if(input.value == ""){
            input.classList.add("error")
            input.parentElement.classList.add("error")
            
        }

        if (inputs[1].value != "" ){
            checkEmail();
        }

        inputs[1].addEventListener("keyup", ()=>{
            checkEmail()
        })

        input.addEventListener("keyup", ()=>{
            if(input.value != ""){
                input.classList.remove("error")
                input.parentElement.classList.remove("error")
            }else{
                input.classList.add("error")
                input.parentElement.classList.add("error")
                
            }
        })
    }
}


function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)){
        email.classList.add("error")
        email.parentElement.classList.add('error')

        if (email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address"
        }else{
            errorTxtEmail.innerText = "Email Address cant be blank"
        }

    }else{
        email.classList.remove("error")
        email.parentElement.classList.remove('error')
    }
}


const form = document.querySelector("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    checkInputs()

    if(!name.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error")){
        
        window.location.href = "thankyou.html"

        form.reset()
        return false
    }
})

