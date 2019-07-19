const mainMenu = document.querySelector("#main-menu");
const searchMenu = document.querySelector("#search-menu");
const body = document.querySelector("body");

const sMenu = document.querySelector("#main-menu__open");
const cMenu = document.querySelector("#main-menu__close");
const sSearch = document.querySelector("#search-menu__open");
const cSearch = document.querySelector("#search-menu__close");

let showMenu = (event) => {
    mainMenu.classList.add("is-tx0");
    body.classList.add("is-blocked");
}
let hideMenu = (event) => {
    mainMenu.classList.remove("is-tx0");
    body.classList.remove("is-blocked");
}
let showSearch = (event) => {
    searchMenu.classList.add("is-tx0");
    body.classList.add("is-blocked");
}
let hideSearch = (event) => {
    searchMenu.classList.remove("is-tx0");
    body.classList.remove("is-blocked");
}

let main = (event) => {
    sMenu.addEventListener("click", showMenu);
    cMenu.addEventListener("click", hideMenu);

    sSearch.addEventListener("click", showSearch);
    cSearch.addEventListener("click", hideSearch);
}
window.addEventListener("load", main);
