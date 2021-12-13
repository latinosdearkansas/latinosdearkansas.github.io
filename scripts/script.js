let navLinks = document.getElementById("navLinks");
let showMenu = document.querySelector('.fa-bars');
let hideMenu = document.querySelector('.fa-times');

showMenu.onclick = () => {
    navLinks.style.left= '-10px';
}

hideMenu.onclick = () => {
    navLinks.style.left= '-480px';
}



const mainLink = document.querySelector('.main-image');
const mainImage = document.querySelector('.main-image > img');
const originalText = document.querySelector('.original-text > a');

const replacementLink = document.querySelectorAll('.replacement-image');
const replacementImage = Array.from(document.querySelectorAll('.replacement-image > img'));
const replacementText = document.querySelectorAll('.replacement-text > a');


let i = 0;

setInterval(function() {
    
    if (i < replacementImage.length) {
        mainLink.href = replacementLink[i].href;
        mainImage.src = replacementImage[i].src;
        originalText.textContent = replacementText[i].textContent;
        originalText.href = replacementText[i].href;
        i++;
    } else {
        i = 0;
    }
    
}, 6000)



// -----  Patrocinadores  -----
const patrocinadoresMainLink = document.querySelectorAll('.ventas > .section > a');
const patrocinadoresMainImage = document.querySelectorAll('.ventas > .section > a > img');

