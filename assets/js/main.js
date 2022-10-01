const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const leftBtn = $('.button-left');
const rightBtn = $('.button-right');
const dots = $$('.container-slider__control-dot');
const img = $$('.container-slider__img');
const leftBtnWrap = $('.container__item-wrap-button-left');
const rightBtnWrap = $('.container__item-wrap-button-right');
const accountSubMenu = $('.header__submenu-list-account');
const stadingSubMenu = $('.header__submenu-list-stading');
const favoriteSubmenu = $('.header__submenu-list-favorite');
const arrowLeftBtn = $('.header__menu-item-icon-left');
const menu = $('.header__menu-list');
const menuBtn = $('.header__control-small-icon-menu');
const body = $('body');

var slideIndex = 0;



showDivs(slideIndex);
leftBtn.onclick = function () {
    slideIndex += -1;
    showDivs(slideIndex);
}

rightBtn.onclick = function () {
    slideIndex += 1;
    showDivs(slideIndex);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    if (n < 0) slideIndex = img.length - 1;
    if (n > img.length - 1) slideIndex = 0;
    for (i = 0; i < img.length; i++) {
        img[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('container-slider__control-dot--active');
    }
    img[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('container-slider__control-dot--active');
}


function showAccount() {
    accountSubMenu.classList.toggle('show');
}

function showStading() {
    stadingSubMenu.classList.toggle('show');
}

function showFavorite() {
    favoriteSubmenu.classList.toggle('show');
}

function closeMenu() {
    menu.style.width="0";
}

function showMenu() {
    menu.style.width = "350px";
}