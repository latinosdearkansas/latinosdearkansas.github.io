let navLinks = document.getElementById("navLinks");

function hideMenu () {
    navLinks.style.left= '-480px';
}

function showMenu () {
    navLinks.style.left= '-10px';
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