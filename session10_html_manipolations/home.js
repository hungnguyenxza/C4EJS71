let menu = [
    "Home",
    "About",
    "Rooms",
    "Dive site",
    "Food",
    "News",
    "Contact",
];

let menuLink = document.getElementsByClassName('menu-link');
for (let i = 0; i < menuLink.length && i < menu.length; i++) {
    menuLink[i].innerHTML = menu[i];
}