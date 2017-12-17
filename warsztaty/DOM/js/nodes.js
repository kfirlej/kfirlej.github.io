'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[2];

var linki = document.getElementsByTagName('a');

for (var i = 0; i < linki.lenght; i++) {
    var br = document.createElement('br');
    linki[i].removeAttribute('class');
    linki[i].parentElement.insertBefore(br, linki[i].nextSibling);
} //znalezeienie znacznikow 'a', dodanie br na koncach, usuniecie znacznika 'class'
