const topBarScroll = document.querySelector('.top-bar-scroll');
const btnGoToTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    // BAR DU HAUT QUI INDIQUE LE SCROLL
    const documentHeight= document.body.scrollHeight;
    const clientScroll = window.scrollY;
    const clientScreenHeight = window.innerHeight;
    topBarScroll.style.width = `${clientScroll / (documentHeight - clientScreenHeight) * 100}%`;


    // BOUTON SCROLL TO TOP QUI APPARAIT / DISPARAIT
    if(clientScroll > '50'){
        btnGoToTop.classList.remove('invisible');
    }
    else{
        btnGoToTop.classList.add('invisible');
    }

})






// OUVERTURE DES SLIDERS PROJET
const allProjects = document.querySelectorAll('.projet');
const sliderProjects = document.querySelector('.slider-project')
const btnPrevious = document.querySelector('.slider-project .btn.previous');
const btnNext = document.querySelector('.slider-project .btn.next');
let sliderProjectId = undefined;
let sliderCurrentImage = 0;

allProjects.forEach(projet => projet.addEventListener('click', (e) => {
    sliderProjectId = e.target.getAttribute('data-project-id');
    sliderProjects.querySelector('.container').querySelectorAll('img').forEach(img => img.remove());
    for(let img of sliderProjectsImages[sliderProjectId]){
        const newImg = document.createElement('img');
        newImg.src = img;
        newImg.alt = "Image de présentation du projet";
        sliderProjects.querySelector('.container').appendChild(newImg);
    }
    sliderProjects.querySelector('img').classList.add('active');
    sliderCurrentImage = 0;
    sliderProjects.classList.add('visible');
}))


// CHANGEMENT D'IMAGES DES SLIDERS PROJET
// Bouton retour
btnPrevious.addEventListener('click', (e) => {
    const images = sliderProjects.querySelectorAll('.container img');
    images.forEach(img => img.classList.remove('active'));

    if(sliderCurrentImage == 0){
        images[images.length - 1].classList.add('active');
        sliderCurrentImage = images.length - 1;
    }
    else{
        images[sliderCurrentImage - 1].classList.add('active');
        sliderCurrentImage = sliderCurrentImage - 1;
    }
})
// Bouton suivant
btnNext.addEventListener('click', (e) => {
    const images = sliderProjects.querySelectorAll('.container img');
    images.forEach(img => img.classList.remove('active'));

    if(sliderCurrentImage == images.length - 1){
        images[0].classList.add('active');
        sliderCurrentImage = 0;
    }
    else{
        images[sliderCurrentImage + 1].classList.add('active');
        sliderCurrentImage = sliderCurrentImage + 1;
    }
})

// FERMETURE EN CLIQUANT SUR l'OVERLAY
sliderProjects.querySelector('.overlay').addEventListener('click', () => {
    sliderProjects.classList.remove('visible');
})
// FERMETURE EN CLIQUANT SUR LE BOUTON
sliderProjects.querySelector('.close').addEventListener('click', () => {
    sliderProjects.classList.remove('visible');
})