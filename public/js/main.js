"use strict";

var mainMenu = document.querySelector("#main-menu");
var searchMenu = document.querySelector("#search-menu");
var body = document.querySelector("body");
var sMenu = document.querySelector("#main-menu__open");
var cMenu = document.querySelector("#main-menu__close");
var sSearch = document.querySelector("#search-menu__open");
var cSearch = document.querySelector("#search-menu__close");

var showMenu = function showMenu(event) {
  mainMenu.classList.add("is-tx0");
  body.classList.add("is-blocked");
};

var hideMenu = function hideMenu(event) {
  mainMenu.classList.remove("is-tx0");
  body.classList.remove("is-blocked");
};

var showSearch = function showSearch(event) {
  searchMenu.classList.add("is-tx0");
  body.classList.add("is-blocked");
};

var hideSearch = function hideSearch(event) {
  searchMenu.classList.remove("is-tx0");
  body.classList.remove("is-blocked");
};

var main = function main(event) {
  sMenu.addEventListener("click", showMenu);
  cMenu.addEventListener("click", hideMenu);
  sSearch.addEventListener("click", showSearch);
  cSearch.addEventListener("click", hideSearch);
};

window.addEventListener("load", main);