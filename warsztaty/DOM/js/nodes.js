'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[2];
console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stworz nowy element
var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworzenie nowego tekstu do paragrafu

newElement.appendChild(newElementContent);//dodaj tekst do elementu <p>
console.log(newElement);

istniejacyWezel.appendChild(newElement); //wyswietl na stronie
//istniejacyWezel.removeChild(newElement); //usun na stronie




































