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

const buttons = document.querySelectorAll('.boat-text button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let boat = this.getAttribute('boat-name');
        
        for (let i = 1; i <= 4; i++) {
            document.getElementById('boat' + i).src = `assets/vessels/${boat}/${i}.png`; // Assuming images are named 1.jpg, 2.jpg, etc.
        }
        // Remove focus from all buttons
        buttons.forEach(btn => btn.classList.remove('focused'));
        // Add focus class to the clicked button
        this.classList.add('focused');
    });
});

// Default click simulation
document.querySelector('[boat-name="tug"]').click();
// If you also want the default button to visually appear focused, 
// add the following line after the previous one:
document.querySelector('[boat-name="tug"]').focus();
window.scrollTo(0, 0);
