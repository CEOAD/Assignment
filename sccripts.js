let dark = document.getElementById('Dark')
const article = document.querySelector(".light-theme2")

const aside = document.querySelector(".light-theme1")

const body = document.querySelector(".light-theme3")
let dark_themed = () => {
    article.classList.toggle('light-theme2')
    aside.classList.toggle('light-theme1')
    body.classList.toggle('light-theme3')
    if (dark.textContent == 'Light Theme') {
        dark.textContent = 'Dark Theme'}
    else {
    dark.textContent = 'Light Theme'}}

dark.addEventListener('click', dark_themed);

let cancel = document.getElementById('Cancel')

const textarea = document.querySelector('textarea')
const save = document.querySelector('#save')

let Hidden = () => {
    textarea.style.display= "none";
    save.style.display= "none";
    cancel.style.display= "none";
}
cancel.addEventListener('click', Hidden);
let New = document.getElementById('New')

let NewNote = () => {
    if (textarea.style.display == "none") {
    textarea.style.display= "block";
    save.style.display= "flex";
    cancel.style.display= "flex";
    }
    else {
        textarea.value= '';
    }
}
New.addEventListener('click', NewNote)