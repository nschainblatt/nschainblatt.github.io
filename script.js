// Menu button for mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
const toggleMenu = () => {
    navbar.classList.toggle('activate');
    menuIcon.classList.toggle('bx-x');
};
menuIcon.addEventListener('click', toggleMenu)



// Scroll active menu buttons
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => { // on every scroll this function runs
    sections.forEach(section => {
        let top = window.scrollY; //how many pixels scrolled from top.
        let offset = section.offsetTop - 400; // how close in pixels is the inner border of the parent element to the outer border of the currect section element, which in this case is the body.
        let height = section.offsetHeight; // returns height in pixels of the current section element.
        let id = section.getAttribute('id'); // gets the id of the current section element.

        // console.log(id, top, offset, height);
        if (top >= offset && top < offset + height ) { // if the amount of pixels scrolled from the top is greater or equal to the distance from the top of the body. 
                                                      // and if the distance from the top of the section plus the height of the current element is greater than the amout scrolled.
            navLinks.forEach(link => {
                link.classList.remove('active');
                console.log(id);
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); //a[href*= means all a elements that have that particular id in them.
            });
        };
    });

    // Menu
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    // Remove menu bar after scroll (which does after clicking to)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('activate');
};

// Scroll Reveal Effects
const slideup = {
    delay: 375,
    duration: 500,
    distance: '150%',
    origin: 'left'
}

ScrollReveal().reveal('.home-content', slideup);