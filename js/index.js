'use strict';

let iconMenu = document.getElementById('icon-menu');
let navMenu = document.querySelector('#nav-menu');
let navBackground = document.querySelector('#nav-background');

let closeButton = document.querySelector('#icon-close');

iconMenu.addEventListener('click', () => {
    navMenu.style.display = 'block';
    navBackground.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    navMenu.style.display = 'none';
    navBackground.style.display = 'none';
});