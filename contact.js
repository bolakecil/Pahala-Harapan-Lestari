const hamburger = document.querySelector(".hamburger");
const text = document.querySelector(".text");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    text.classList.toggle("active");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyUYg0ttS_eSUs6VFcB-_5P_wvMyHalcH3S89L5sN6XJuu5zOBsWurIZ1WirM0M863w/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e =>{
    e.preventDefault()

    let name = document.getElementById("name").value;
    if (name == ""){
        alert("Name should not be empty!");
        return false;
    }
    else if (name.length < 3){
        alert("Name must be more than 3 characters!");
        return false;
    }
    else if (!(isNaN(name))){
        alert("Name should only consist of letters!");
        return false;
    }

    let companyname = document.getElementById("company-name").value;
    
    let email = document.getElementById("email").value;
    if (email == ""){
        alert("Email should not be empty!");
        return false;
    }
    else if (email.split("@").length > 2 || email.split("@").length == 1) {
        alert("Email should contain '@'!");
        return false;
    }
    else if (!email.split("@")[1].includes(".com")) {
        alert("Email should contain '.com' after '@'!");
        return false;
    }

    let phone = document.getElementById("phone").value;
    if (phone == ""){
        alert("Phone number should not be empty!");
        return false;
    }
    else if (phone.length < 6){
        alert("Phone number must be more than 6 numbers!");
        return false;
    }
    else if (isNaN(phone)){
        alert("Phone number should only consist of numbers!");
        return false;
    }

    let message = document.getElementById("message").value;
    if (message == ""){
        alert("Message should not be empty!");
        return false;
    }

    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Your inquiry has been successfully recorded."))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})