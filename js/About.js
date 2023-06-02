// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// When on click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};   

// When out click

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});