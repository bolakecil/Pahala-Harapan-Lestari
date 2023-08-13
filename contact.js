const hamburger = document.querySelector(".hamburger");
const text = document.querySelector(".text");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    text.classList.toggle("active");
}

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop; // Use documentElement.scrollTop for broader compatibility

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-6rem"; // Assuming the height of your navbar is 50px
    } else {
        // Scrolling up
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll;
});

const checkpoint = 800; // adjust this value to control the fade speed
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    let opacity;
    if (currentScroll <= checkpoint) {
        opacity = currentScroll / checkpoint;
    } else {
        opacity = 1;
    }
    document.querySelector(".landing-overlay").style.opacity = opacity;
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbwzBqY92EJH0AScvMwS4e4rw-UsX516iSinpnv_vP7hVu3gA3jMl_z8aMGdRLChzRRJ/exec'
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