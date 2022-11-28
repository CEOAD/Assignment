let dark = document.getElementById('Dark')
const article = document.querySelector("article")
const div1 = document.querySelector(".div1")
const div2 = document.querySelector(".div2")
const div3 = document.querySelector(".div3")
const div4 = document.querySelector(".div4")
const aside = document.querySelector("aside")
const header = document.querySelector("header")
const footer = document.querySelector("footer")

const body = document.querySelector("body")

console.log(body)
let dark_themed = () => {
    article.classList.toggle('light-theme2')
    aside.classList.toggle('light-theme1')
    body.classList.toggle('light-theme3')
    div1.classList.toggle('light-theme2')
    div2.classList.toggle('light-theme1')
    div3.classList.toggle('light-theme1')
    div4.classList.toggle('light-theme2')
    header.classList.toggle('light-theme3')
    footer.classList.toggle('light-theme3')
    footer.classList.toggle('light-theme2')
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

const notesArray = [];
    //  [ {title:"note one", body:"this is my first note"}];
let SaveTheNote = () => {
    let t = prompt() 
        {notesArray.push({title: t ,body: textarea.value})} 
    console.log(notesArray)
    let notes = document.querySelector('.notes')
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(t))
    notes.appendChild(li)
}
save.addEventListener('click', SaveTheNote)
let notes = document.querySelector('.notes')

let Search_for_note = (e) => {
    console.log(e.target.textContent)

    for (i of notesArray){
        console.log(i)
      if  (i['title'] === e.target.textContent) {
        textarea.value = i['body']
      }
    }
}

notes.addEventListener('click', Search_for_note)


