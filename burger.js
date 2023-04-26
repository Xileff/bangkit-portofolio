const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('dropdown');
    for (const navItem of navItems) {
        navItem.classList.toggle('dropdown');
    }
});