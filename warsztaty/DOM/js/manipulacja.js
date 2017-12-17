'use strict';

var mainHeader = document.getElementById('main-header');

mainHeader.innerHTML = 'Tresc naglowka';

var p = document.querySelector('header').children[0];
console.log(p); //pobiera znacznik
console.log(p.innerHTML); //pobiera wszystko w znacnzikach
console.log(p.outerHTML); //pobiera wszystko
console.log(p.innerText); //pobiera tylko tekst

var link = document.getElementsByClassName('link') [0];

link.href = "https://google.pl";

mainHeader.style.color = 'white';
mainHeader.style.background = 'blue';























