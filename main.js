const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')


//validate if constant exists
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  });
};

//Menu hidden when CLOSED
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  });
};

//Remove the Mobile Menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
