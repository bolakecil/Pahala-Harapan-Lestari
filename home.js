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

const marqueeImages = document.querySelector('.marquee-images');
let startPosition = 0;
const speed = 5; // Adjust this value to increase or decrease the speed

function animateMarquee(timestamp) {
    startPosition -= speed;
    
    // If we've moved the images 50% of their width, reset the position
    if (Math.abs(startPosition) >= marqueeImages.offsetWidth / 2) {
        startPosition = 0;
    }
    
    marqueeImages.style.transform = `translateX(${startPosition}px)`;
    
    requestAnimationFrame(animateMarquee);
}

// Start the marquee animation
requestAnimationFrame(animateMarquee);
