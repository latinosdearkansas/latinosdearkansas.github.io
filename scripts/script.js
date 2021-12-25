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
const patrocinadoresMainLink = Array.from(document.querySelectorAll('.ventas > .section > a'));
const patrocinadoresMainImage = Array.from(document.querySelectorAll('.ventas > .section > a > img'));

const patrocinadoresReplacementImage = [
    'deep-performance',
    'audi',
    'beach',
    'chita',
    'lambo',
    'mustang',
    'space',
    'rocks',
    'paisaje',
    'technology'
]

const patrocinadoresReplacementLink = [
    'https://latinosdearkansas.github.io/deepperformancecustoms/',
    'patrocinadores/index.html'
]

//fix code so page will only display blank if the page is in another webpage

function advertisementOne() {
    if (patrocinadoresMainLink !== null) {  //  <---- fix this to work in patrocinadores page
        setInterval(() => {
            if (i < patrocinadoresReplacementImage.length) {
                let randomImage = Math.floor(Math.random() * patrocinadoresReplacementImage.length);
                patrocinadoresMainImage[0].src = `../images/patrocinadores/${patrocinadoresReplacementImage[randomImage]}.jpg`;
                patrocinadoresMainLink[0].href = patrocinadoresReplacementLink[randomImage];
                patrocinadoresMainLink[0].target = '_blank';
            }
        }, 7000)
    }
}

function advertisementTwo() {
    if (patrocinadoresMainLink !== null) {
        setInterval(() => {
            if (i < patrocinadoresReplacementImage.length) {
                let randomImage = Math.floor(Math.random() * patrocinadoresReplacementImage.length);
                patrocinadoresMainImage[1].src = `../images/patrocinadores/${patrocinadoresReplacementImage[randomImage]}.jpg`;
                patrocinadoresMainLink[1].href = patrocinadoresReplacementLink[randomImage];
                patrocinadoresMainLink[1].target = '_blank';
            }
        }, 7000)
    }
}

advertisementOne();
advertisementTwo();