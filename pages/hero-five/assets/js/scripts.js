function toggleMenu() {
    const menu_box = document.querySelector(".menu-li");
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle('active');
    menu_box.classList.toggle('active');
}