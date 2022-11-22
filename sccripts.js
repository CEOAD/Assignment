let dark = document.getElementById('Dark');
const article = document.querySelector(".light-theme2")

const aside = document.querySelector(".light-theme1")

const body = document.querySelector(".light-theme3")
let dark_themed = () => {
    article.classList.toggle('light-theme2')
    aside.classList.toggle('light-theme1')
    body.classList.toggle('light-theme3')
    if (dark.textContent= 'Dark Theme') {
        dark.textContent = 'Light Theme'}
    else {
    dark.textContent = 'Dark Theme'
}}
// dark.addEventListener('click', light_themed);
dark.addEventListener('click', dark_themed);

