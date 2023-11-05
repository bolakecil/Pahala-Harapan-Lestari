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

// Your existing JavaScript code...

// Language switch button functionality
const languageButton = document.getElementById('languageButton');
const languages = ['EN', 'ID', 'ZH']; // The order here determines the cycle order
let currentLanguage = 'ZH'; // Default language

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
