const navToggle = document.querySelector('#navToggle'); 
const nav = document.querySelector('nav-links');
const navIcon = document.querySelectorAll('.navIcon');
const menubar =document.querySelector('#menubar');


navToggle.addEventListener("click", () => { /*Når der klikkes på menubaren så åbner den*/
    nav.classList.toggle('open')
    navIcon.forEach(icon => {
        icon.classList.toggle('cross'); /*Denne funktion gør at menbaren og kyrdset skifter mellem hinanden når man åbner og lukker*/
    });
});