// Setting dynamic date
const date           = document.querySelector('#date');
date.textContent     = new Date().getFullYear();

// close links
const navToggle      = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links          = document.querySelector('.links');
navToggle.addEventListener('click',function(){
    linksContainer.classList.toggle('show-links');
});
// fixed navbar

// smooth scroll

// select links