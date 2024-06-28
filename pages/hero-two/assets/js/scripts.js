function toggleMenu() {
    const menu_box = document.querySelector(".menu-li");
    menu_box.classList.toggle('active');
}
const imgBox = document.querySelector(".card-img");
const slides = imgBox.getElementsByTagName("img");
var i = 0;

function next() {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
}

function previuos() {
    slides[i].classList.remove("active");
    textData[i].classList.remove("active");
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add("active");
    textData[i].classList.add("active");
}

const textContent = document.querySelector(".text-content");
const textData = textContent.getElementsByTagName("div");
var j = 0;
function nexttext() {
    textData[j].classList.remove("active");
    j = (j + 1) % textData.length;
    textData[j].classList.add("active");
}

function previuostext() {
    textData[j].classList.remove("active");
    j = (j - 1 + textData.length) % textData.length;
    textData[j].classList.add("active");
}