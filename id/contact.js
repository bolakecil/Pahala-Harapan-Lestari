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

// Your existing JavaScript code...

// Language switch button functionality
const languageButton = document.getElementById('languageButton');
const languages = ['EN', 'ID', 'ZH']; // The order here determines the cycle order
let currentLanguage = 'ID'; // Default language

// Function to determine the current language from the URL
function setCurrentLanguageFromUrl() {
  const pathname = window.location.pathname;

  if (pathname.includes('/id/')) {
    currentLanguage = 'ID';
  } else if (pathname.includes('/zh/')) {
    currentLanguage = 'ZH';
  } else {
    currentLanguage = 'EN';
  }
  // Set the button text to the current language
  languageButton.textContent = currentLanguage;
}

// Function to change the page language
function changePageLanguage() {
  // Get the current file name (e.g., "about.html")
  const currentPage = window.location.pathname.split('/').pop();
  
  // Determine the next language by finding the index of the current language and incrementing it
  let currentLanguageIndex = languages.indexOf(currentLanguage);
  let nextLanguageIndex = (currentLanguageIndex + 1) % languages.length;
  let nextLanguage = languages[nextLanguageIndex].toLowerCase();

  // Change the URL to the selected language version's folder
  let newUrl = window.location.origin + '/' + nextLanguage + '/' + currentPage;
  window.location.href = newUrl;
}

// Call the function to set the initial language on the button
setCurrentLanguageFromUrl();

// Add event listener for clicks to cycle through languages
languageButton.addEventListener('click', changePageLanguage);

//update year automatically
document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer .copyright');
    if (copyrightElement) {
        copyrightElement.textContent = `Copyright PT. Pahala Harapan Lestari © ${currentYear}`;
    }
});